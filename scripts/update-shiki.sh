#!/bin/bash

set -e

# Install the latest version
yarn add shiki@latest @shikijs/engine-oniguruma@latest @shikijs/types@latest @shikijs/vscode-textmate@latest @shikijs/langs@latest @shikijs/themes@latest

# Build
yarn build

# Make sure the tests still pass
yarn test
