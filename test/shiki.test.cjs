// @ts-check
// This is a copy of shiki.test.js with imports swapped for require

const { deepStrictEqual: equal } = require('node:assert')
const { test } = require('node:test')

const {
  codeToTokensWithThemes,
  createShikiInternal,
  createOnigurumaEngine,
  bundledLanguages,
  bundledThemes,
  loadBuiltinWasm,
} = require('mini-shiki')

test('CJS Highlight usage', async () => {
  await loadBuiltinWasm()

  const shiki = await createShikiInternal({
    engine: createOnigurumaEngine(),
    langs: [bundledLanguages.typescript],
    themes: [bundledThemes['light-plus']],
  })

  const lines = codeToTokensWithThemes(shiki, "console.log('Hello world!')", {
    themes: { light: 'light-plus' },
    lang: 'typescript',
  })

  equal(lines.length, 1)
  equal(
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
