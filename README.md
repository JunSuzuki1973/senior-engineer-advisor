# Senior Engineer Advisor

**コスパ重視モデルに「謙虚さ」「専門性」「品質保証」を与えるスキル**

Agency Agents連携で専門家をアサイン、コードレビューで品質保証、LLM Wikiでナレッジ蓄積。

## 推奨リポジトリ

- **[Agency Agents](https://github.com/msitarzewski/agency-agents)** - 専門家システムのベースとなるフレームワーク
- **[Karpathy's LLM Wiki](https://github.com/karpathy/llm-wiki)** - ナレッジベース管理（必須）

## 新機能（v2.0）

- 🎯 **Agency Agents統合** - タスクに応じて専門家（Security Architect, Database Expert等）を自動アサイン
- 🔍 **コードレビュー** - 実装後にユーザー許可を得て品質レビュー
- 💰 **コスト最適化** - 70-85%のコスト削減
- 📚 **LLM Wiki連携** - 成功パターンの自動蓄積・再利用

## クイックスタート

```bash
# インストール
openclaw skill install senior-engineer-advisor

# 対話的セットアップ（Agency Agents、コードレビュー有効化）
openclaw skill advisor setup

# 使用
opencode --skill senior-engineer-advisor "OAuth2認証を実装"
```

## 動作フロー

```
あなた: "機能実装を依頼"
    ↓
AI（GLM-4.7）: 複雑さ評価
    ↓
複雑な場合:
    ↓
Agency Agents: 専門家アサイン（例：Security Architect）
    ↓
専門家（Opus）: アーキテクチャ指針提供
    ↓
AI（GLM-4.7）: 指針に従って実装
    ↓
AI: "コードレビューしますか？"
    ↓
ユーザー許可 → コードレビュー実施
    ↓
LLM Wikiにパターン保存
```

## Agency Agents 専門家一覧

| 専門家 | 対象タスク | 割り当てキーワード |
|--------|-----------|-------------------|
| **Security Architect** | 認証・暗号化・脆弱性対策 | auth, jwt, oauth, encrypt, security |
| **Database Expert** | スキーマ設計・最適化 | database, schema, sql, migration |
| **API Designer** | REST/GraphQL設計 | api, rest, graphql, endpoint |
| **Performance Engineer** | パフォーマンス・スケーリング | performance, cache, scale, optimize |
| **DevOps Specialist** | CI/CD・インフラ | docker, kubernetes, deployment |
| **Frontend Architect** | UI/UX・コンポーネント設計 | react, vue, component, frontend |
| **Backend Architect** | サービス設計・アーキテクチャ | backend, service, microservice |
| **ML Engineer** | MLモデル・データパイプライン | machine learning, model, training |

## コードレビューフロー

### トリガー条件

1. **実装後**: AIが「レビューしますか？」と確認
2. **バグ報告**: 「動かない」と報告された場合
3. **改善要請**: 「もっと良くして」と要請された場合
4. **高複雑度**: 実装の複雑度が0.8以上

### レビュープロセス

```
実装完了
    ↓
「コードレビューしますか？」（ユーザー許可）
    ↓
コードレビューAgent（Opus）が評価
    ↓
問題発見 → 修正案提示 → ユーザー承認 → 修正 → 再レビュー
    ↓
PASS → LLM Wikiに保存
```

## コスト分析

| シナリオ | 従来（Opus） | 本スキル | 削減率 |
|---------|------------|---------|--------|
| 単純タスク | $0.15 | $0.03 | 80% |
| 専門家アサイン | $0.15 | $0.038 | 75% |
| コードレビュー付き | $0.15 | $0.053 | 65% |
| Wiki再利用 | $0.15 | $0.03 | 80% |

**月50タスク/日の場合**: $225 → $50-70（70-78%削減）

## 設定例

```yaml
# ~/.openclaw/skills/senior-engineer-advisor/config.yaml

agent:
  model: "glm-4.7"
  provider: "zai"
  api_key: "${ZAI_API_KEY}"

advisor:
  agency_agents:
    enabled: true
    specialists:
      security:
        model: "claude-opus-4.7"
      database:
        model: "claude-opus-4.7"
      # ... 他の専門家

code_review:
  enabled: true
  require_permission: true  # 必ずユーザー許可を得る
  reviewer_model: "claude-opus-4.7"

knowledge:
  llm_wiki:
    enabled: true
    path: "~/openclaw-wiki"
    auto_save: true
```

## 対応CLI

| CLI | 使用方法 |
|-----|---------|
| **OpenCode** | `opencode --skill senior-engineer-advisor "タスク"` |
| **Claude Code** | `claude --skill senior-engineer-advisor "タスク"` |
| **Kilo** | `kilo run --skill senior-engineer-advisor "タスク"` |

## 詳細ドキュメント

- [SKILL.md](SKILL.md) - 技術仕様・詳細設計
- [prompts/](prompts/) - プロンプトテンプレート
- [workflows/](workflows/) - ワークフロー定義
- [integrations/](integrations/) - CLI統合ガイド

## ライセンス

MIT License
