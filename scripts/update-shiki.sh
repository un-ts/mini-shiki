#!/bin/bash

set -e

# Install the latest version
yarn add shiki@latest @shikijs/engine-oniguruma@latest @shikijs/langs@latest @shikijs/themes@latest @shikijs/types@latest @shikijs/vscode-textmate@latest

# Build
yarn build

# Make sure the tests still pass
yarn test
