import * as onig from "@shikijs/engine-oniguruma";
import { readFile } from "fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import type { LoadWasmOptions, RegexEngine } from "@shikijs/types";

export {
  bundledLanguages,
  bundledLanguagesInfo,
  bundledThemes,
  bundledThemesInfo,
  type BundledLanguage,
  type BundledTheme,
} from "shiki";

export { codeToTokensWithThemes, createShikiInternal } from "@shikijs/core";

export type {
  DynamicImportLanguageRegistration,
  DynamicImportThemeRegistration,
  BundledLanguageInfo,
  BundledThemeInfo,
  HighlighterCoreOptions,
  TokenStyles,
  LoadWasmOptions,
  RegexEngine,
} from "@shikijs/types";

export async function loadBuiltinWasm() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  await loadWasm(readFile(__dirname + "/onig.wasm"));
}

export function loadWasm(options: LoadWasmOptions): Promise<void> {
  return onig.loadWasm(options);
}

export function createOnigurumaEngine(
  options?: LoadWasmOptions
): Promise<RegexEngine> {
  return onig.createOnigurumaEngine(options);
}
