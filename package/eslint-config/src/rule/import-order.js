// =============================================================================
// import-order rule
// =============================================================================

module.exports = {
  create: function (context) {
    let foundRequireCall = false;
    const checkSeq = createSequenceChecker(context);

    return {
      ImportDeclaration(node) {
        const comments = context.getComments(node);
        if (comments.trailing.some(comment => (
          comment.type === 'Line' &&
          comment.value.includes('@out-of-order')
        ))) {
          return;
        }

        if (foundRequireCall) {
          context.report(node, 'Imports must be located before legacy require() calls.');
        }

        if (node.specifiers.length === 0) {
          // do not enforce order for side effects imports
          return;
        }

        checkSeq(node, node.source.value);
      },
      CallExpression(node) {
        if (node.callee.type === 'Identifier' && node.callee.name === 'require') {
          foundRequireCall = true;
        }
      }
    };
  }
};

function createSequenceChecker(context) {
  let lastClass = -1;
  let lastPath = null;

  return (currentNode, currentPath) => {
    const currentClass = determinePathClass(normalizePath(currentPath));

    if (currentClass < lastClass) {
      context.report(
        currentNode,
        'Imports must be grouped based on their class.'
      );
      return;
    } else if (currentClass > lastClass) {
      lastPath = null;
      lastClass = currentClass;
    }

    if (!lastPath) {
      lastPath = currentPath;
    } else {
      if (normalizePath(lastPath).toLowerCase().localeCompare(normalizePath(currentPath).toLowerCase()) > 0) {
        context.report(currentNode, 'Import is not sorted alphabetically by path.');
      } else {
        lastPath = currentPath;
      }
    }
  };
}

function normalizePath(importPath) {
  if (importPath.startsWith('!')) {
    // strip webpack loaders
    importPath = importPath.substr(1 + importPath.lastIndexOf('!'));
  }

  return importPath;
}

function determinePathClass(importPath) {
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
    const fileName = importPath.split('/').pop();
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
