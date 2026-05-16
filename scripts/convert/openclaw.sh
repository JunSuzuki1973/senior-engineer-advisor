#!/usr/bin/env bash
# Convert: install advisor as OpenClaw agent
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
OPENCLAW_DIR="${HOME}/.openclaw/agents"

mkdir -p "${OPENCLAW_DIR}"

TARGET="${OPENCLAW_DIR}/senior-engineer-advisor.yaml"
ln -sf "${REPO_DIR}/adapters/openclaw/config.yaml" "${TARGET}"
echo "[advisor] OpenClaw adapter installed → ${TARGET}"
