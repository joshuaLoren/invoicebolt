#!/bin/sh
# Build and deploy dist/ to the gh-pages branch.
set -e
cd "$(dirname "$0")"
node build.mjs
cd dist
git init -b gh-pages --quiet
git add -A
git commit -m "deploy" --quiet
git push -f https://github.com/joshuaLoren/invoicebolt.git gh-pages
cd ..
rm -rf dist/.git
echo "Deployed: https://joshualoren.github.io/invoicebolt/"
