#!/usr/bin/env bash
# Push synpath_web main to YukiC0804/Demo to trigger Vercel production deploy.
# Run from a machine with access to the private Demo repo:
#   chmod +x scripts/deploy-to-demo.sh && ./scripts/deploy-to-demo.sh

set -euo pipefail

DEMO_REPO="${DEMO_REPO:-https://github.com/YukiC0804/Demo.git}"
SOURCE_BRANCH="${SOURCE_BRANCH:-main}"
WORK_DIR="${WORK_DIR:-/tmp/synpath-demo-deploy}"

rm -rf "$WORK_DIR"
git clone --branch "$SOURCE_BRANCH" "$(git remote get-url origin)" "$WORK_DIR"
cd "$WORK_DIR"

git remote add demo "$DEMO_REPO" 2>/dev/null || git remote set-url demo "$DEMO_REPO"
git push demo "$SOURCE_BRANCH:main"

echo "Pushed to Demo/main. Vercel should deploy to https://www.synpath-ai.com shortly."
