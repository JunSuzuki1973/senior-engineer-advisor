#!/usr/bin/env bash
# Setup script for advisor CLI integration

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🔧 Setting up advisor for CLI..."

# 1. Create symlink in ~/.local/bin
mkdir -p ~/.local/bin
if [ ! -L ~/.local/bin/advisor ]; then
    ln -sf "$SCRIPT_DIR/integrations/advisor.sh" ~/.local/bin/advisor
    echo "✅ Created symlink: ~/.local/bin/advisor"
else
    echo "✅ Symlink already exists"
fi

# 2. Setup environment variables
echo ""
echo "📝 Environment Setup:"
echo "Add the following to your ~/.bashrc or ~/.zshrc:"
echo ""
echo "  # Senior Engineer Advisor Settings"
echo "  export WIKI_DIR=\"\$HOME/openclaw-wiki\""
echo "  export AA_DIR=\"\$HOME/agency-agents\""
echo "  export PATH=\"\$HOME/.local/bin:\$PATH\""
echo ""

# 3. Verify installation
echo "🔍 Verification:"
if command -v advisor &> /dev/null; then
    echo "✅ advisor is in PATH"
    advisor --help | head -10
else
    echo "⚠️  advisor not found in PATH"
    echo "   Run: export PATH=\"\$HOME/.local/bin:\$PATH\""
fi

echo ""
echo "🚀 Ready to test! Try:"
echo "  advisor --auto \"シンプルな計算機アプリを作って\""
echo "  advisor --force --auto \"複雑なタスク\""
