#!/usr/bin/env bash
# Convert: install advisor as Kilo CLI agent
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
KILO_DIR="${HOME}/.kilo/advisors"

mkdir -p "${KILO_DIR}"

TARGET="${KILO_DIR}/senior-engineer-advisor.yaml"
ln -sf "${REPO_DIR}/adapters/kilo/config.yaml" "${TARGET}"
echo "[advisor] Kilo CLI adapter installed → ${TARGET}"
