// This is a copy of shiki.test.ts with imports swapped for require

const { deepStrictEqual } =
  require('node:assert/strict') as typeof import('node:assert/strict')
const { test } = require('node:test') as typeof import('node:test')

void test('CJS Highlight usage', async () => {
  const {
    codeToTokensWithThemes,
    createShikiInternal,
    createOnigurumaEngine,
    bundledLanguages,
    bundledThemes,
    loadBuiltinWasm,
  } = await import('../src/shiki.ts')

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

  // @ts-expect-error -- no idea
  deepStrictEqual(lines.length, 1)
  // @ts-expect-error -- no idea
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
