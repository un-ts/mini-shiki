import { defineConfig } from 'tsdown/config'

export default defineConfig({
  entry: 'src/shiki.ts',
  dts: true,
  deps: {
    onlyBundle: false,
    neverBundle: [
      '@shikijs/vscode-textmate',
      '@shikijs/engine-oniguruma',
      '@shikijs/types',
      /^@shikijs\/langs/,
      /^@shikijs\/themes/,
    ],
  },
})
