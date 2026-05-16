# Senior Engineer Advisor

> 安価なモデルが実装し、Opusが助言し、Wikiが記憶する。

**Senior Engineer Advisor** はソフトウェア開発のためのマルチモデル AI オーケストレーションシステムです。  
DeepSeek や Qwen などの安価・高速モデルが日常の実装を担い、アーキテクチャの判断が必要な場面だけ Claude Opus が登場します。解決策はすべて LLM Wiki に蓄積されるため、同種のタスクは2回目以降コストゼロで処理されます。

📖 [English Documentation](README.md)

---

## 仕組み

```
タスク
 └─► Wiki 検索 ──── ヒット ──► 実装（LLMコストゼロ）
          │
         ミス
          │
          └─► 複雑度スコア（安価モデル）
                    │
          スコア ≥ 0.5          スコア < 0.5
                    │                  │
                    ▼                  ▼
             Opus が助言         直接実装
                    │                  │
                    └────────┬─────────┘
                             ▼
                        Wiki に保存
```

---

## 対応ツール

| ツール | 状態 |
|---|---|
| Claude Code | ✅ |
| OpenCode | ✅ |
| Kilo CLI | ✅ |
| OpenClaw | ✅ |

---

## 対応プロバイダ（OpenAI互換）

すべてのプロバイダを同一のOpenAI互換インターフェースで統一しています。  
Agentは安価プロバイダ、Advisorは Anthropic/OpenRouter という組み合わせも自由です。

| プロバイダ | Agent モデル例 | Advisor モデル例 |
|---|---|---|
| [OpenRouter](https://openrouter.ai) | `deepseek/deepseek-chat-v3-5` | `anthropic/claude-opus-4.6` |
| [Kilo Pass](https://kilocode.ai) | `deepseek/deepseek-v3` | `anthropic/claude-opus-4.6` |
| [Together.ai](https://together.ai) | `Qwen/Qwen3-235B-A22B` | — |
| Anthropic Direct | — | `claude-opus-4-5-20251001` |
| Ollama（ローカル） | `qwen2.5-coder:32b` | — |

> **ベンダーロックインなし。** `.env` の2行を変えるだけでプロバイダを切り替え可能。

---

## クイックスタート

### 1. クローン

```bash
git clone https://github.com/JunSuzuki1973/senior-engineer-advisor
cd senior-engineer-advisor
```

### 2. 設定

```bash
cp .env.example .env
```

最小設定（OpenRouter — 1つのキーで Agent と Advisor を両方カバー）:

```bash
AGENT_API_KEY=sk-or-xxxx
AGENT_MODEL=deepseek/deepseek-chat-v3-5

ADVISOR_API_KEY=sk-or-xxxx
ADVISOR_MODEL=anthropic/claude-opus-4.6
```

すべてのプロバイダ設定は [`.env.example`](.env.example) を参照してください。

### 3. インストール

```bash
# ツールを自動検出してインストール（claude, opencode, kilo, openclaw）
bash scripts/install.sh

# または明示的に指定
bash scripts/install.sh claude-code
```

### 4. 動作確認

```bash
# 複雑度チェックのみ（API使用最小）
python -m core.cli --dry-run "Implement JWT refresh token rotation with Redis"

# フル実行
python -m core.cli "Add rate limiting to the login endpoint"
```

---

## 使い方

### CLI

```bash
advisor "タスク内容"                   # フルパイプライン実行
advisor --dry-run "タスク"             # 複雑度スコアのみ
advisor --wiki-only "キーワード"       # Wiki 検索のみ（LLM呼び出しなし）
advisor --no-save "タスク"            # Wiki 保存をスキップ
advisor --depth 5 "タスク"            # Opus の助言を詳細に（1〜5）
```

### Claude Code スラッシュコマンド

```
/advisor   Implement JWT refresh token rotation
/advisor-wiki   JWT authentication
/advisor-dry    Add rate limiting to the login endpoint
```

---

## LLM Wiki — 育つ知識

すべての解決策が `$WIKI_DIR`（デフォルト: `~/.advisor/wiki/`）に Markdown ファイルとして保存されます。  
類似タスクが来たとき、まず Wiki が検索されます。ヒットすればモデル呼び出しはゼロ。

**Karpathy パターン**: 新しい知識は既存ノートに追記するのではなく**上書き**します。  
ノートは常に最新の状態を保ち、古い情報が積み重なりません。

### Obsidian との統合（オプション）

```bash
OBSIDIAN_VAULT=/path/to/your/vault   # .env に設定
```

Wiki を Obsidian Vault に向けることで、グラフビュー・双方向リンク・全文検索が使えます。

---

## 専門エージェント

### 組み込み（8ドメイン）

[`agents/`](agents/) ディレクトリに収録:

| ファイル | 担当ドメイン |
|---|---|
| `security.md` | 認証、JWT、OWASP、暗号化 |
| `database.md` | スキーマ設計、マイグレーション、クエリ最適化 |
| `api.md` | REST、GraphQL、gRPC、OpenAPI |
| `performance.md` | キャッシュ、プロファイリング、並行処理 |
| `devops.md` | Docker、Kubernetes、CI/CD、IaC |
| `frontend.md` | React/Vue、アクセシビリティ、Core Web Vitals |
| `backend.md` | クリーンアーキテクチャ、マイクロサービス、DDD |
| `ml.md` | LLM統合、埋め込み、RAG |

### 拡張: agency-agents（オプション）

[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)（MIT）から 144+ の専門エージェントをインポート:

```bash
bash scripts/convert/agency-agents.sh
```

---

## プロジェクト構成

```
senior-engineer-advisor/
├── core/
│   ├── providers.py        # OpenAI互換クライアントファクトリ
│   ├── complexity.py       # 安価モデルによる複雑度スコアリング
│   ├── wiki.py             # LLM Wiki（Karpathy 上書きパターン）
│   ├── orchestrator.py     # メインパイプライン
│   └── cli.py              # advisor CLI エントリポイント
├── prompts/
│   ├── complexity.md       # スコアリングプロンプト（JSON出力）
│   ├── advisor_system.md   # Opus の役割：助言のみ、実装コード不可
│   ├── agent_system.md     # 実装エージェントのルール
│   └── agency_assignment.md  # 専門家ルーティングテーブル
├── agents/                 # 8種の組み込み専門家定義
├── adapters/
│   ├── claude-code/        # CLAUDE.md + スラッシュコマンド
│   ├── opencode/           # config.yaml
│   ├── kilo/               # config.yaml
│   └── openclaw/           # config.yaml
├── scripts/
│   ├── install.sh          # ツール自動検出＆インストール
│   └── convert/            # ツール別変換スクリプト
├── .env.example            # 全プロバイダ設定テンプレート
├── config.yaml             # 動作パラメータ
└── requirements.txt        # openai, python-dotenv, pyyaml
```

---

## 動作要件

- Python 3.10+
- Agent モデル用 API キー（OpenAI互換プロバイダなら何でも可）
- Advisor モデル用 API キー（OpenRouter、Kilo Pass、または Anthropic Direct）
- Obsidian アプリ（オプション — Wiki の UI として使用）

---

## ライセンス

MIT License — Copyright 2026 Jun Suzuki

本プロジェクトは以下のリポジトリを参照・統合しています:
- [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) (MIT)
- [eugeniughelbur/obsidian-second-brain](https://github.com/eugeniughelbur/obsidian-second-brain) (MIT)
- Andrey Karpathy の [LLM Wiki パターン](https://x.com/karpathy)
