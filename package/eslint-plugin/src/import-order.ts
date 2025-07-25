// =============================================================================
// import-order rule
// =============================================================================

import type {Rule} from 'eslint';
import type {CallExpression, ImportDeclaration} from 'estree';


const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    schema: [],
    messages: {
      importBeforeRequire: 'Imports must be located before legacy require() calls.',
      groupByClass: 'Imports must be grouped based on their class.',
      sortByPath: 'Import is not sorted alphabetically by path.'
    }
  },

  create: function (context: Rule.RuleContext) {
    let foundRequireCall = false;
    const checkSeq = createSequenceChecker(context);

    return {
      ImportDeclaration(node: ImportDeclaration) {
        // imports must precede require() calls
        if (foundRequireCall) {
          context.report({
            node,
            messageId: 'importBeforeRequire'
          });
          return;
        }

        // do not enforce order for side effects imports
        if (node.specifiers.length === 0) {
          return;
        }

        // make typescript happy
        if (typeof node.source.value !== 'string') {
          return;
        }

        // verify import
        checkSeq(node, node.source.value);
      },
      CallExpression(node: CallExpression) {
        if (node.callee.type === 'Identifier' && node.callee.name === 'require') {
          foundRequireCall = true;
        }
      }
    };
  }
};

export default rule;


// Utils

function createSequenceChecker(context: Rule.RuleContext) {
  let lastClass = -1;
  let lastPath: string | null = null;

  return (currentNode: ImportDeclaration, currentPath: string) => {
    const currentClass = determinePathClass(normalizePath(currentPath));

    if (currentClass < lastClass) {
      context.report({
        node: currentNode,
        messageId: 'groupByClass'
      });
      return;
    } else if (currentClass > lastClass) {
      lastPath = null;
      lastClass = currentClass;
    }

    if (!lastPath) {
      lastPath = currentPath;
    } else {
      if (normalizePath(lastPath).toLowerCase().localeCompare(normalizePath(currentPath).toLowerCase()) > 0) {
        context.report({
          node: currentNode,
          messageId: 'sortByPath'
        });
      } else {
        lastPath = currentPath;
      }
    }
  };
}

function normalizePath(importPath: string): string {
  if (importPath.startsWith('!')) {
    // strip webpack loaders
    importPath = importPath.substring(1 + importPath.lastIndexOf('!'));
  }

  return importPath;
}

function determinePathClass(importPath: string): number {
  // 1. modules without @ or proto:
  // 2. modules with proto:
  // 3. modules with @
  // 4. project imports using ~/ paths
  // 5. local imports using relative paths with no extension
  // 6. local imports using relative paths with an extension

  if (importPath === '.') {
    return 5;
  }

  if (importPath.startsWith('./') || importPath.startsWith('../')) {
    const fileName = importPath.split('/').pop() ?? '';
    if (fileName.includes('.')) {
      return 6;
    } else {
      return 5;
    }
  }

  if (importPath.startsWith('~/')) {
    return 4;
  }

  if (importPath.startsWith('@')) {
    return 3;
  }

  if (importPath.startsWith('node:')) {
    return 2;
  }

  return 1;
}
