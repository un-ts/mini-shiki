#!/bin/bash

set -e

if ! git diff --exit-code package.json > /dev/null; then
  echo "Shiki version changed, building new release"
  shiki_version=$(node -p "require('./package.json').devDependencies.shiki.replace(/[^0-9.]/g, '')")
  read major minor patch <<< $(tr . " " <<< "$shiki_version")

  while true; do
    yarn version "$major.$minor.$patch" && break
    patch=$((patch + 1))
  done
  version="v$major.$minor.$patch"

  extra=$"\
\n\
## $version ($(date '+%Y-%m-%d'))\n\
\n\
- Update to Shiki [v$shiki_version](https://github.com/shikijs/shiki/releases/tag/v$shiki_version)\n\
"

  awk $"
        modif {
            printf(\"$extra\")
            modif = 0
        }
        /^# Changelog/ && !modif {
            modif = 1
        }
        {print}
    " CHANGELOG.md > CHANGELOG2.md
  mv CHANGELOG2.md CHANGELOG.md

  git add CHANGELOG.md ./package.json ./yarn.lock
  git commit -m "chore: update shiki to v$shiki_version [ci skip]"
  git push
else
  echo "Shiki is up to date"
fi
