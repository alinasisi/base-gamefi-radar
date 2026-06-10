<div align="center">

# 🎮 Base GameFi Radar

**Daily AI-powered GameFi intelligence for Base ecosystem**

[![Daily Radar](https://github.com/alinasisi/base-gamefi-radar/actions/workflows/daily-radar.yml/badge.svg)](https://github.com/alinasisi/base-gamefi-radar/actions/workflows/daily-radar.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built on Base](https://img.shields.io/badge/Built%20on-Base-0052FF?logo=coinbase)](https://base.org)
[![Talent Protocol](https://img.shields.io/badge/Talent-Protocol-8B5CF6)](https://talent.app)

*Automated daily reports on Base GameFi — active games, NFT assets, guild rankings, opportunity alerts*

[📊 View Latest Report](reports/) · [🎮 Base GameFi](https://base.org) · [🏆 Talent Protocol](https://talent.app)

</div>

---

## ✨ What This Does

Every day automatically:

- 🎮 **Top GameFi Projects** — active games on Base ranked by TVL and 24h change
- 🖼 **NFT Asset Trends** — GameFi collections with floor price and volume
- 🏆 **Guild Intelligence** — top guilds and players by onchain activity
- 🔔 **Opportunity Alerts** — new grants, hackathons, beta tests
- 🗓 **Weekly Digest** — every Sunday, full week summary
- 🤖 **AI Analysis** — unique daily insights powered by OpenRouter

All runs on **GitHub Actions** — no server, free forever.

---

## 📁 Reports

Daily reports in [`/reports`](reports/) — unique AI content every day.

| Date | Content |
|------|---------|
| [Latest →](reports/) | GameFi analysis, NFT trends, alerts |

---

## 🚀 How It Works

```
GitHub Actions (daily, 8:23 UTC)
        ↓
Fetch GameFi data — DeFiLlama + Reservoir + ETHGlobal
        ↓
AI generates unique GameFi analysis (OpenRouter fallback)
        ↓
Save to reports/YYYY-MM-DD.md
        ↓
Auto-commit → Builder Score grows
```

---

## 🛠 Stack

| Tool | Purpose |
|------|---------|
| Node.js | Runtime |
| GitHub Actions | Free 24/7 scheduler |
| DeFiLlama API | GameFi TVL data |
| Reservoir API | NFT floor prices |
| OpenRouter | AI with free model fallback |
| ETHGlobal API | Hackathon tracking |

---

## ⚡ Setup Your Own

1. Fork this repo
2. Add secrets in **Settings → Secrets → Actions**:

| Secret | Value |
|--------|-------|
| `GH_PAT` | GitHub token with `repo` + `workflow` |
| `OPENAI_API_KEY` | OpenRouter key from [openrouter.ai](https://openrouter.ai) |
| `TALENT_WALLET` | Your Base wallet `0x...` |

3. **Actions** → **Daily GameFi Radar** → **Run workflow**
4. Check `reports/` — first report appears in ~30s

---

## 🔗 Links

- 🌐 **Base** — [base.org](https://base.org)
- 🎮 **DeFiLlama Gaming** — [defillama.com](https://defillama.com/protocols/Gaming)
- 🏆 **Talent Protocol** — [talent.app](https://talent.app)
- 🎯 **ETHGlobal** — [ethglobal.com](https://ethglobal.com)

---

<div align="center">

Built with ❤️ by [alinasisi.base.eth](https://talent.app/alinasisi.eth)

⭐ Star this repo if it helps your GameFi research!

</div>
