# mini-shiki

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/un-ts/mini-shiki/ci.yml?branch=main)](https://github.com/un-ts/mini-shiki/actions/workflows/ci.yml?query=branch%3Amain)
[![Codecov](https://img.shields.io/codecov/c/github/un-ts/mini-shiki.svg)](https://codecov.io/gh/un-ts/mini-shiki)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fun-ts%2Fmini-shiki%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/un-ts/mini-shiki)](https://coderabbit.ai)
[![npm](https://img.shields.io/npm/v/mini-shiki.svg)](https://www.npmjs.com/package/mini-shiki)
[![GitHub Release](https://img.shields.io/github/release/un-ts/mini-shiki)](https://github.com/un-ts/mini-shiki/releases)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/changesets/changesets)

This is a re-bundled version of [Shiki](https://shiki.style/) which strips out
the dependencies which aren't necessary for [TypeDoc](https://typedoc.org/)'s usage.

> [!NOTE]
> This is an unscoped version of [@gerrit0/mini-shiki](https://github.com/Gerrit0/mini-shiki), please view [Gerrit0/mini-shiki#3](https://github.com/Gerrit0/mini-shiki/issues/3) for more information.

## TOC <!-- omit in toc -->

- [Why?](#why)
- [Releases](#releases)
- [ESM / CommonJS](#esm--commonjs)
- [Usage](#usage)
- [Sponsors and Backers](#sponsors-and-backers)
  - [Sponsors](#sponsors)
  - [Backers](#backers)
- [Changelog](#changelog)
- [License](#license)

## Why?

Compare Shiki's dependency tree:

<img src="static/shiki-dependency-tree.svg">

To this package's dependency tree:

<img src="static/mini-shiki-dependency-tree.svg">

The Shiki maintainers [have declined](https://github.com/shikijs/shiki/issues/844) to split
up the package in a way which makes it possible to avoid these dependencies when just relying
on shikijs published packages.

## Releases

This package will be released and keep the same major/minor version numbers as Shiki.
Patch versions will generally be the same as Shiki, but may differ if adjustments are
necessary to fix compatibility issues.

## ESM / CommonJS

This package is ESM, but does not use top level await, so may be `require`d in
Node 23, or Node 20.17+ with the `--experimental-require-module` flag.

## Usage

```js
import {
  codeToTokensWithThemes,
  createShikiInternal,
  createOnigurumaEngine,
  bundledLanguages,
  bundledThemes,
  loadBuiltinWasm,
} from 'mini-shiki'

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
```

## Sponsors and Backers

[![Sponsors](https://raw.githubusercontent.com/1stG/static/master/sponsors.svg)](https://github.com/sponsors/JounQin)

### Sponsors

| 1stG                                                                                                                   | RxTS                                                                                                                   | UnTS                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

### Backers

| 1stG                                                                                                                | RxTS                                                                                                                | UnTS                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stG.me]: https://www.1stG.me
[JounQin]: https://github.com/JounQin
[MIT]: http://opensource.org/licenses/MIT
