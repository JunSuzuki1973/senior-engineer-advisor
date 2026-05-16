#!/usr/bin/env bash
# Convert: install advisor as OpenCode agent config
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
OPENCODE_DIR="${HOME}/.opencode"

mkdir -p "${OPENCODE_DIR}/agents"

TARGET="${OPENCODE_DIR}/agents/senior-engineer-advisor.yaml"
ln -sf "${REPO_DIR}/adapters/opencode/config.yaml" "${TARGET}"
echo "[advisor] OpenCode adapter installed → ${TARGET}"
echo "[advisor] Restart OpenCode to activate."
