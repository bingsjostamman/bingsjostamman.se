#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/change-lane-config.sh"

BASE_REF="${1:-origin/main}"

changed_files=$(git diff --name-only "$BASE_REF"...HEAD)

if [[ -z "$changed_files" ]]; then
  echo "No changed files."
  exit 0
fi

blocked=()
while IFS= read -r file; do
  [[ -z "$file" ]] && continue
  if [[ "$file" =~ $CONTENT_BLOCKED_REGEX ]] || [[ ! "$file" =~ $CONTENT_ALLOWED_REGEX ]]; then
    blocked+=("$file")
  fi
done <<< "$changed_files"

if (( ${#blocked[@]} > 0 )); then
  echo "Content-only check failed. Non-content files changed:"
  for file in "${blocked[@]}"; do
    echo " - $file"
  done
  exit 1
fi

echo "Content-only check passed."