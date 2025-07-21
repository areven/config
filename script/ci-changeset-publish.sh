#!/bin/bash

set -exo pipefail
if [[ -z "$CI" ]]; then
  exit 1
fi

# setup root .gitignore
git config --global core.excludesfile ~/.gitignore

# copy the license to all packages
echo "license.md" >> ~/.gitignore
find package -mindepth 1 -maxdepth 1 -type d -exec cp license.md {}/license.md \;

# build everything
npm run build --workspaces --if-present

# publish changed packages
npx changeset publish

# `changesets/action` expects an upper-case CHANGELOG.md file
if ! [ -f .NPMRC ]; then
  # case-sensitive fs
  find . -type f -name "changelog.md" -execdir cp {} CHANGELOG.md \;
  echo "CHANGELOG.md" >> ~/.gitignore
fi
