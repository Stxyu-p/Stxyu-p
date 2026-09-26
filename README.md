<div align="center">

  <h1>⚙️ Stx</h1>
  <p><strong>Engineering work by <a href="https://github.com/Stxyu-p">@Stxyu-p</a></strong></p>
  <p>Local-first systems, agent infrastructure, and browser tooling</p>

  <p>
    <img src="https://img.shields.io/badge/Projects-5-0284c7?style=flat-square&logo=github&logoColor=white" alt="Projects" />
    <img src="https://img.shields.io/badge/Telemetry-None-10b981?style=flat-square" alt="Zero Telemetry" />
    <img src="https://img.shields.io/badge/Storage-Local--First-7B61FF?style=flat-square" alt="Local First" />
    <img src="https://img.shields.io/badge/commits-555-8b949e?style=flat-square" alt="Commits" />
    <img src="https://img.shields.io/badge/code-59.1k-8b949e?style=flat-square" alt="Lines of code" />
    <img src="https://img.shields.io/badge/tests-81-6e7681?style=flat-square" alt="Test files" />
  </p>

</div>

---

## System Map

<p align="center">
  <img src="assets/system-map.svg" alt="MemCore and NovelClaw feed a Hermes agent fleet that drives three browser userscripts" width="880" />
</p>

---

## Featured Projects

| Project | Domain | Architecture & Core Highlights | Distribution |
| :--- | :--- | :--- | :--- |
| **🧠 [MemCore](https://github.com/Stxyu-p/memcore)** | Multi-Agent Memory | Governed memory engine: SQLite + WAL + FTS5, immutable version history, tombstone guards, journal-first admission with semantic review. | [![Python](https://img.shields.io/badge/Python-MIT-3776AB?style=flat-square&logo=python&logoColor=white)](https://github.com/Stxyu-p/memcore) |
| **🐾 [NovelClaw](https://github.com/Stxyu-p/NovelClaw)** | Web Novels / AI Reader | Single-binary Go application, embedded zero-dependency web reader, 9Router/LLM translation pipeline, persistent glossary and context memory, SSE job streaming. | [![Go](https://img.shields.io/badge/Go-1.22%2B-MIT-00ADD8?style=flat-square&logo=go&logoColor=white)](https://github.com/Stxyu-p/NovelClaw) |
| **⚡ [Telefilter Desktop](https://github.com/Stxyu-p/telefilter-desktop)** | Telegram WebK | Ultra-compact 34px inline toolbar, client-side ZIP32 multi-album packing, deep virtualized DOM harvester, privacy vault. | [![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-v5.1.0-red?style=flat-square&logo=greasyfork&logoColor=white)](https://greasyfork.org/scripts/596222-telefilter-desktop-edition-v5) |
| **⚡ [IG MaxPland](https://github.com/Stxyu-p/ig-maxpland)** | Instagram Web | Clean Architecture with 18 decoupled modules, stealth seen-telemetry interceptor across `fetch`, XHR and `sendBeacon`, zero-bounce clean feed, dormant radar with randomized jitter. | [![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-v3.0.0-red?style=flat-square&logo=greasyfork&logoColor=white)](https://greasyfork.org/scripts/595787-ig-maxpland) |
| **⚡ [ThreadMax](https://github.com/Stxyu-p/threadmax)** | Threads Web | One-click carousel and bulk media extraction, in-memory ZIP32 compiler, video booster with PiP, tracking-sanitized links, thread unroller reader. | [![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-v1.4.0-red?style=flat-square&logo=greasyfork&logoColor=white)](https://github.com/Stxyu-p/threadmax) |

---

## Install

| Project | Install |
| :--- | :--- |
| **Telefilter Desktop** | [Greasy Fork v5.1.0](https://greasyfork.org/scripts/596222-telefilter-desktop-edition-v5) |
| **IG MaxPland** | [Greasy Fork v3.0.0](https://greasyfork.org/scripts/595787-ig-maxpland) |
| **ThreadMax** | [Userscript RAW v1.4.0](https://raw.githubusercontent.com/Stxyu-p/threadmax/main/threadmax.user.js) |
| **MemCore** | Go 1.22+ / Python, MIT |
| **NovelClaw** | Go 1.22+, MIT |

---

## Engineering Principles

**Local-first and zero-telemetry.**
Data stays on the machine. No hidden network calls.

**Dependencies as a budget.**
Stdlib and native platform features before any third-party package.

**Governance over hope.**
Invariants enforced in code and schema, not conventions.

**Prove it by running it.**
Every claim backed by a test suite or a real execution log.

---

<div align="center">
<sub>Curated showcase. Updated as projects ship.</sub>
</div>
