import { defineConfig } from 'tsdown/config'

export default defineConfig({
  entry: 'src/shiki.ts',
  dts: true,
  external: [
    '@shikijs/vscode-textmate',
    '@shikijs/engine-oniguruma',
    '@shikijs/types',
    /^@shikijs\/langs/,
    /^@shikijs\/themes/,
  ],
})
