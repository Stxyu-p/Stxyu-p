# Stx

I build small, local-first tools to solve friction I run into. Zero telemetry, minimal dependencies.

### 🛠️ Projects

| Project | What it does | Stack | Link |
| :--- | :--- | :--- | :--- |
| **trimtok** | Local stdlib-only context compressor for Hermes agents. Folds terminal output and tool results (repeats, Drain templates, near-dups, cross-turn spans, TOON tables) with exact CCR retrieval. 88.6% fewer chars on heavy outputs. | Python | [Repo ↗](https://github.com/Stxyu-p/trimtok) |
| **Skill Proof** | In-process deterministic skill routing for Hermes agents. Replaces 4,000-token prompt dumps with a single-line directive. Sub-millisecond lexical path, optional local ONNX (multilingual-e5-small), Stdio MCP for multi-agent fleets. | Python | [Repo ↗](https://github.com/Stxyu-p/skill-proof) |
| **MemCore** | Governed local memory engine for autonomous agents. SQLite WAL, semantic review queue, governance tiers (candidate→accepted→golden), native Hermes provider, recovery subsystem (backup/restore/doctor). | Python, SQLite | [Repo ↗](https://github.com/Stxyu-p/memcore) |
| **NovelClaw** | Web novel reader with streaming AI translation. Concurrent chapter fetch, real-time LLM translation overlay, local-first cache, EPUB export. | Go | [Repo ↗](https://github.com/Stxyu-p/NovelClaw) |
| **Telefilter** | Telegram WebK media extractor & in-memory ZIP pack. Batch download, progress streaming, no disk writes until user saves. | JavaScript | [Repo ↗](https://github.com/Stxyu-p/telefilter-desktop) |
| **ThreadMax** | Threads bulk media downloader & floating PiP player. One-click batch save, picture-in-picture video player. | JavaScript | [Repo ↗](https://github.com/Stxyu-p/threadmax) |

---

<sub>All data stays on device. No tracking.</sub>