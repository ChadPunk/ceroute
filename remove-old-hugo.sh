#!/usr/bin/env bash
set -euo pipefail

# Run from the root of your cloned ChadPunk/ceroute repository.
rm -rf archetypes content public resources static themes
rm -f .gitmodules .hugo_build.lock hugo.yaml
rm -rf .github/workflows

echo "Old Hugo files removed."
echo "Now copy the contents of the new static-site package into this repository root,"
echo "then run:"
echo "  git add -A"
echo '  git commit -m "Replace Hugo site with new static personal site"'
echo "  git push origin main"
