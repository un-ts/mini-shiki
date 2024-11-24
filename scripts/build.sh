#!/bin/bash
set -e

# Build JS
./node_modules/.bin/rollup -c

cp ./node_modules/shiki/dist/onig.wasm dist/onig.wasm

# Build DTS
dts-bundle-generator -o dist/shiki.d.ts src/shiki.ts \
    --external-inlines shiki \
    --external-inlines @shikijs/core \
    --external-imports @shikijs/types
