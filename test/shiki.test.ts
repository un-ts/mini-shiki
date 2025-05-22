// @ts-check

import { deepStrictEqual } from 'node:assert/strict'
import { test } from 'node:test'

import {
  codeToTokensWithThemes,
  createShikiInternal,
  createOnigurumaEngine,
  bundledLanguages,
  bundledThemes,
  loadBuiltinWasm,
} from '../src/shiki.ts'

await loadBuiltinWasm()

void test('Highlight usage', async () => {
  const shiki = await createShikiInternal({
    engine: createOnigurumaEngine(),
    langs: [bundledLanguages.typescript],
    themes: [bundledThemes['light-plus']],
  })

  const lines = codeToTokensWithThemes(shiki, "console.log('Hello world!')", {
    themes: { light: 'light-plus' },
    lang: 'typescript',
  })

  deepStrictEqual(lines.length, 1)
  deepStrictEqual(
    lines[0].map(t => ({ text: t.content, offset: t.offset })),
    [
      { text: 'console', offset: 0 },
      { text: '.', offset: 7 },
      { text: 'log', offset: 8 },
      { text: '(', offset: 11 },
      { text: "'Hello world!'", offset: 12 },
      { text: ')', offset: 26 },
    ],
  )
})
