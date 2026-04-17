#!/usr/bin/env bash
# One-shot script: reset the sandbox-leftover .git folder, create a clean
# local git repo, commit, add the GitHub remote, and push.
#
# Run from the bottega-deck folder:
#   cd ~/Desktop/bottega-deck
#   bash setup-repo.sh

set -e

REMOTE_URL="https://github.com/bomber77711/bottega-deck.git"

if [ ! -f "package.json" ]; then
  echo "Error: run this from inside the bottega-deck folder."
  exit 1
fi

# Blow away the half-initialised .git the sandbox left behind
if [ -d ".git" ]; then
  echo "Removing stale .git..."
  rm -rf .git
fi

echo "Initialising fresh git repo..."
git init -b main
git config user.name  "${GIT_USER_NAME:-Alessandro Vaccari}"
git config user.email "${GIT_USER_EMAIL:-alessandro.vaccari1995@gmail.com}"

echo "Staging files..."
git add -A

echo "Creating initial commit..."
git commit -m "Initial commit: Bottega investor deck

20-slide React + Vite + Tailwind pitch deck for Bottega Delivery.
Custom brand system, interactive keyboard navigation, deterministic 16:9 stage."

echo "Adding remote $REMOTE_URL..."
git remote add origin "$REMOTE_URL"

echo "Pushing to GitHub..."
echo "(If prompted, paste a GitHub Personal Access Token as the password."
echo " Create one at https://github.com/settings/tokens — 'repo' scope is enough.)"
git push -u origin main

echo ""
echo "Done. Your deck is live at:"
echo "  $REMOTE_URL"
