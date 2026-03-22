// =============================================================================
// import-line-breaks rule
// =============================================================================

import type {Rule} from 'eslint';
import type {ImportDeclaration, ImportSpecifier} from 'estree';


const rule: Rule.RuleModule = {
  meta: {
    type: 'layout',
    fixable: 'whitespace',
    schema: [],
    messages: {
      wrongFormat: 'Imports should use minimal amount of line breaks to satisfy the max line length requirement.'
    }
  },

  create: function (context: Rule.RuleContext) {
    const indent = '  ';
    const maxLength = 100;
    const sourceCode = context.sourceCode;

    const getSpecifierText = (specifier: ImportSpecifier): string => {
      const imported = sourceCode.getText(specifier.imported);
      const local = sourceCode.getText(specifier.local);
      return imported === local ? imported : `${imported} as ${local}`;
    };

    const buildSingleLine = (
      node: ImportDeclaration,
      specifiers: string[],
      sourceText: string
    ): string => {
      const typePart = 'importKind' in node && node.importKind === 'type' ? ' type' : '';
      return `import${typePart} { ${specifiers.join(', ')} } from ${sourceText};`;
    };

    const buildMultiline = (
      node: ImportDeclaration,
      specifiers: string[],
      sourceText: string
    ): string => {
      const typePart = 'importKind' in node && node.importKind === 'type' ? ' type' : '';
      const lines: string[] = [];
      let currentItems: string[] = [];

      for (const specifier of specifiers) {
        const nextItems = [...currentItems, specifier];
        const nextLine = `${indent}${nextItems.join(', ')}`;

        if (nextLine.length <= maxLength) {
          currentItems = nextItems;
        } else {
          if (currentItems.length > 0) {
            lines.push(`${indent}${currentItems.join(', ')},`);
          }
          currentItems = [specifier];
        }
      }

      if (currentItems.length > 0) {
        lines.push(`${indent}${currentItems.join(', ')}`);
      }

      return [
        `import${typePart} {`,
        ...lines,
        `} from ${sourceText};`
      ].join('\n');
    };

    return {
      ImportDeclaration(node: ImportDeclaration) {
        const importNode = node as ImportDeclaration;

        if (importNode.specifiers.length === 0) {
          return;
        }

        if (!importNode.specifiers.every(s => s.type === 'ImportSpecifier')) {
          return;
        }

        const specifiers = importNode.specifiers as ImportSpecifier[];
        const specifierTexts = specifiers.map(getSpecifierText);
        const sourceText = sourceCode.getText(importNode.source);

        const singleLine = buildSingleLine(importNode, specifierTexts, sourceText);
        const shouldBeSingleLine = singleLine.length <= maxLength;

        const actualText = sourceCode.getText(importNode);
        const isCurrentlyMultiline = actualText.includes('\n');

        if (shouldBeSingleLine) {
          if (!isCurrentlyMultiline) {
            return;
          }

          context.report({
            node: importNode,
            messageId: 'wrongFormat',
            fix(fixer: Rule.RuleFixer) {
              return fixer.replaceText(importNode, singleLine);
            }
          });
          return;
        }

        const multiline = buildMultiline(importNode, specifierTexts, sourceText);

        if (actualText === multiline) {
          return;
        }

        context.report({
          node: importNode,
          messageId: 'wrongFormat',
          fix(fixer: Rule.RuleFixer) {
            return fixer.replaceText(importNode, multiline);
          }
        });
      }
    };
  }
};

export default rule;
