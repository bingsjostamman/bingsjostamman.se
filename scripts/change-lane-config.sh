#!/usr/bin/env bash

# Shared path rules for content-lane and system-lane checks.

# Broadly content-safe areas.
readonly CONTENT_ALLOWED_REGEX='^(src/editions/|src/_data/|src/pages/content/|data/)'

# Reserved for explicit content-lane exceptions when needed.
readonly CONTENT_BLOCKED_REGEX='^$'