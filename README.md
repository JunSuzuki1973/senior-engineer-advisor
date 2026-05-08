# Senior Engineer Advisor v4

**アーキテクチャ指導 × 動的専門家アサイン × LLM Wikiナレッジ管理**

コスパ重視モデルに「謙虚さ」「専門性」「品質保証」を与えるスキル。
226人の専門家からタスクに最適なチームを動的アサインし、LLM Wikiで蓄積した知見を再利用。

---

## 🎯 新機能（v4.0）

### 1. 動的エージェント選択（226専門家から最適チームを選択）
- **タスク分析** → 該当する専門家を3-8名自動選択
- **Agency Agents統合**: https://github.com/msitarzewski/agency-agents
- 無駄なコンサル防止、必要な専門性のみアサイン

### 2. アドバイス深度設定（5段階）
```bash
advisor --depth 5 --auto "タスク"
```
| レベル | 詳細度 |
|--------|--------|
| 1 | Simple - 大枠のみ |
| 2 | General - 主要ポイント |
| 3 | Standard - アーキテクチャ+決定事項+落とし穴（デフォルト）|
| 4 | Detailed - 実装提案、詳細分析含む |
| 5 | Comprehensive - 徹底分析、代替案、コードパターン |

### 3. LLM Wikiナレッジサイクル
```
タスク入力
    ↓
Wiki検索（類似度0.75以上で再利用）
    ↓
該当エージェントにコンサル
    ↓
実装
    ↓
Wikiに自動保存（パターンとして蓄積）
    ↓
次回以降のタスクで活用 ← ナレッジが螺旋的に充実
```

### 4. コードレビュー統合
- 実装後の自動品質チェック
- Opus 4.6による専門的レビュー
- ユーザー許可制

---

## 🚀 クイックスタート

### インストール
```bash
# OpenClawスキルとしてインストール
git clone https://github.com/JunSuzuki1973/senior-engineer-advisor.git
ln -sf $(pwd)/senior-engineer-advisor/integrations/advisor.sh ~/.local/bin/advisor
```

### 環境設定
```bash
# ~/.bashrc or ~/.zshrc
export WIKI_DIR="$HOME/openclaw-wiki"
export AA_DIR="$HOME/agency-agents"
export ADVICE_DEPTH="3"  # 1-5
export PATH="$HOME/.local/bin:$PATH"
```

### 使用方法
```bash
# スタンダード（深度3）
advisor --auto "機能を実装して"

# 最も詳細なアドバイス（深度5）
advisor --depth 5 --auto "複雑な機能を実装して"

# Wikiに必ず保存
advisor --force --auto "機能を実装して"

# Wiki未構築時のみ発動
advisor --wiki-only --auto "調査タスク"

# ドライラン（実行せず確認のみ）
advisor --dry-run --auto "機能を実装して"
```

---

## 📊 動作フロー

### Phase 0: Wikiナレッジ検索
- 既存パターンを類似度検索（閾値0.75）
- 該当パターンがあれば知見を活用

### Phase 1: 複雑度評価 + エージェント選択
- タスクの複雑度をスコアリング
- 226エージェントの中から該当者を3-8名選択

### Phase 2: アドバイザー + 専門家コンサル
- Opus 4.6がアーキテクチャ指導（深度設定に応じて詳細度変更）
- 選択された専門家から個別ガイダンス

### Phase 3: 実装
- 指導に基づき実装エージェントがコーディング
- 専門家レビューを実施

### Phase 4: Wiki自動保存
- パターンとして一般化し保存
- Usage Historyで改善追跡

---

## 💰 コスト分析

| シナリオ | 従来（Opus単体） | advisor使用 | 削減率 |
|---------|----------------|------------|--------|
| 単純タスク | $0.15 | $0.03 | 80% |
| 複雑タスク（深度3） | $0.15 | $0.05 | 67% |
| 複雑タスク（深度5） | $0.15 | $0.08 | 47% |
| Wiki再利用時 | $0.15 | $0.02 | 87% |

**月50タスク/日の場合**: $225 → $35-70（70-85%削減）

---

## ⚙️ 設定

### 環境変数
```bash
# 必須
export WIKI_DIR="$HOME/openclaw-wiki"        # LLM Wikiパス
export AA_DIR="$HOME/agency-agents"          # Agency Agentsパス

# オプション
export ADVICE_DEPTH="3"                      # デフォルト深度（1-5）
export DEFAULT_MODEL="opencode-go/glm-5"     # 実装モデル
export ADVISOR_MODEL="kilo/anthropic/claude-opus-4-6"  # アドバイザーモデル
```

### config.yaml
```yaml
advisor:
  general:
    model: "kilo/anthropic/claude-opus-4-6"
    max_tokens: 800
  
  # アドバイス深度: 1-5
  advice_depth: 3
  
  # コードレビュー設定
  code_review:
    enabled: true
    require_permission: true

knowledge:
  llm_wiki:
    enabled: true
    path: "~/openclaw-wiki"
    auto_save: true
```

---

## 🏗️ システム構成

```
┌─────────────────────────────────────────────────────────┐
│                    User Request                         │
└──────────────────┬──────────────────────────────────────┘
                   │
    ┌──────────────▼──────────────┐
    │   Phase 0: Wiki Search      │
    │   (Similarity ≥ 0.75)       │
    └──────────────┬──────────────┘
                   │
    ┌──────────────▼──────────────┐
    │   Phase 1: Task Analysis    │
    │   - Complexity scoring      │
    │   - Agent selection         │
    └──────────────┬──────────────┘
                   │
    ┌──────────────▼──────────────┐
    │   Phase 2: Consultation     │
    │   - Architect (Opus 4.6)    │
    │   - Specialists (3-8名)     │
    └──────────────┬──────────────┘
                   │
    ┌──────────────▼──────────────┐
    │   Phase 3: Implementation   │
    │   - GLM-5 / opencode-go     │
    │   - With specialist review  │
    └──────────────┬──────────────┘
                   │
    ┌──────────────▼──────────────┐
    │   Phase 4: Wiki Save        │
    │   - Pattern generalization  │
    │   - Knowledge accumulation  │
    └─────────────────────────────┘
```

---

## 📁 リポジトリ構成

```
senior-engineer-advisor/
├── integrations/
│   └── advisor.sh          # メインスクリプト
├── prompts/
│   └── agent_system.md     # 実装エージェント用プロンプト
├── config.yaml             # 設定ファイル
├── .env.example            # 環境変数テンプレート
├── tests/                  # テスト結果
│   └── voxel-gun/          # 比較テスト
├── SKILL.md                # 技術仕様
└── README.md               # このファイル
```

---

## 🔗 関連リポジトリ

- **[Agency Agents](https://github.com/msitarzewski/agency-agents)** - 226名の専門家エージェント
- **[LLM Wiki](https://github.com/karpathy/llm-wiki)** - ナレッジベース管理思想

---

## 📄 ライセンス

MIT License

---

*Senior Engineer Advisor v4 - 設計された謙虚さと専門性で、AIコーディングの品質を向上*
