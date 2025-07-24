// =============================================================================
// file-header rule
// =============================================================================

import type {Rule} from 'eslint';


const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Require file to start with a custom comment header',
      recommended: false
    },
    schema: [],
    messages: {
      missingHeader: 'File must start with a formatted header comment block.',
      invalidContinuation: 'Header must be followed by a blank line, comment, or a directive like "use client".'
    }
  },

  create(context) {
    const fileName = context.filename.split('/').pop();
    const sourceCode = context.sourceCode.getText();
    const lowerSourceCode = sourceCode.toLowerCase();
    const lines = sourceCode.split('\n');
    const blockHeader = '// =============================================================================';

    return {
      Program(node) {
        // Ignore known managed files
        if (
          fileName === 'next-env.d.ts'
        ) {
          return;
        }

        // Ignore managed files
        if (
          lowerSourceCode.includes('file should not be edited') ||
          lowerSourceCode.includes('file is managed') ||
          lowerSourceCode.includes('is managed by') ||
          lowerSourceCode.includes('is automatically managed') ||
          lowerSourceCode.includes('do not edit')
        ) {
          return;
        }

        // Ignore files with less than 3 lines
        if (lines.length < 3) {
          return;
        }

        // Require the block header to exist
        if (
          lines[0] !== blockHeader ||
          lines[2] !== blockHeader ||
          !lines[1].startsWith('//')
        ) {
          context.report({
            node,
            loc: {line: 1, column: 0},
            messageId: 'missingHeader'
          });
          return;
        }

        // Require a blank line, a comment or a directive afterwards
        if (lines.length > 3 && !(
          lines[3] === '' ||
          lines[3].startsWith('//') ||
          lines[3].startsWith('/*') ||
          lines[3].startsWith("'")
        )) {
          context.report({
            node,
            loc: {line: 4, column: 0},
            messageId: 'invalidContinuation'
          });
        }
      }
    };
  }
};

export default rule;
