import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { createOnigurumaEngine, loadWasm } from '@shikijs/engine-oniguruma'

export { codeToTokensWithThemes, createShikiInternal } from '@shikijs/core'
export type {
  BundledLanguageInfo,
  BundledThemeInfo,
  DynamicImportLanguageRegistration,
  DynamicImportThemeRegistration,
  HighlighterCoreOptions,
  LoadWasmOptions,
  RegexEngine,
  ShikiInternal,
  TokenStyles,
} from '@shikijs/types'
export {
  type BundledLanguage,
  bundledLanguages,
  bundledLanguagesInfo,
  type BundledTheme,
  bundledThemes,
  bundledThemesInfo,
} from 'shiki'

export async function loadBuiltinWasm() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  await loadWasm(fs.readFile(path.join(__dirname, 'onig.wasm')))
}

export { createOnigurumaEngine, loadWasm }
