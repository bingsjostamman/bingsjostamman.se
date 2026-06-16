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

system_files=()
while IFS= read -r file; do
  [[ -z "$file" ]] && continue
  if [[ "$file" =~ $CONTENT_BLOCKED_REGEX ]] || [[ ! "$file" =~ $CONTENT_ALLOWED_REGEX ]]; then
    system_files+=("$file")
  fi
done <<< "$changed_files"

if (( ${#system_files[@]} == 0 )); then
  echo "System-change check failed. Only content-safe files changed:"
  while IFS= read -r file; do
    [[ -z "$file" ]] && continue
    echo " - $file"
  done <<< "$changed_files"
  echo "Use the content lane or mark the change as content-only instead."
  exit 1
fi

echo "System-change check passed. System files changed:"
for file in "${system_files[@]}"; do
  echo " - $file"
done