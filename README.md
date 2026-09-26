<div align="center">

  <img src="assets/banner.svg" alt="Stx Engineering Portfolio" width="100%" />

  <br><br>

  <p>Software Engineer building <strong>local-first architectures, Go & Python services, and zero-telemetry client tools.</strong></p>

  <p>
    <a href="https://go.dev"><img src="https://img.shields.io/badge/Go-1.22%2B-00ADD8?style=flat-square&logo=go&logoColor=white" alt="Go" /></a>
    <a href="https://www.python.org"><img src="https://img.shields.io/badge/Python-3.11%2B-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" /></a>
    <a href="https://www.sqlite.org"><img src="https://img.shields.io/badge/SQLite-WAL-003B57?style=flat-square&logo=sqlite&logoColor=white" alt="SQLite" /></a>
    <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-ES2022-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <img src="https://img.shields.io/badge/Privacy-Zero--Telemetry-10b981?style=flat-square" alt="Zero Telemetry" />
    <img src="https://img.shields.io/badge/Storage-Local--First-7B61FF?style=flat-square" alt="Local First" />
  </p>

</div>

---

### 🚀 Selected Projects

#### 🐾 [NovelClaw](https://github.com/Stxyu-p/NovelClaw)
> **High-Performance Web Novel Reader & Streaming Translation Engine**

- **Architecture:** Single-binary service written in **Go** with an embedded zero-dependency web interface.
- **Streaming Pipeline:** Real-time translation and event dispatch powered by Server-Sent Events (SSE).
- **Context Governance:** Persistent glossary extraction, local cache persistence, and deterministic job scheduling.
- **Distribution:** Open Source (MIT) · [`github.com/Stxyu-p/NovelClaw`](https://github.com/Stxyu-p/NovelClaw)

---

#### 🧠 [MemCore](https://github.com/Stxyu-p/memcore)
> **Governed Memory Engine for Autonomous AI Agents**

- **Persistence Layer:** Embedded relational store built on **Python** and **SQLite WAL (Write-Ahead Logging)** with full-text search via **FTS5**.
- **Data Invariants:** Journal-first transaction admission, immutable version history DAGs, and tombstone deletion guards.
- **Design Goal:** Eliminates AI agent hallucinations and memory corruption by enforcing schema-level constraints rather than heuristic conventions.
- **Distribution:** Open Source (MIT) · [`github.com/Stxyu-p/memcore`](https://github.com/Stxyu-p/memcore)

---

### 🌐 Client-Side & Browser Engineering

A suite of standalone, zero-telemetry client extensions built for high-throughput DOM virtualization and client-side stream processing:

| Project | Platform / Target | Technical Highlights | Distribution |
| :--- | :--- | :--- | :--- |
| **[Telefilter Desktop](https://github.com/Stxyu-p/telefilter-desktop)** | Telegram WebK | In-memory ZIP32 media compilation without disk writes, virtualized DOM harvester, and private client vault. | [![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-v5.1.0-red?style=flat-square&logo=greasyfork&logoColor=white)](https://greasyfork.org/scripts/596222-telefilter-desktop-edition-v5) |
| **[IG MaxPland](https://github.com/Stxyu-p/ig-maxpland)** | Instagram Web | Decoupled 18-module architecture, stealth telemetry interceptor across `fetch`, XHR, and `sendBeacon`, and zero-bounce clean feed. | [![Greasy Fork](https://img.shields.io/badge/Greasy%20Fork-v3.0.0-red?style=flat-square&logo=greasyfork&logoColor=white)](https://greasyfork.org/scripts/595787-ig-maxpland) |
| **[ThreadMax](https://github.com/Stxyu-p/threadmax)** | Threads Web | Carousel and bulk media extraction, link tracking sanitization, and floating picture-in-picture video engine. | [![Source](https://img.shields.io/badge/Userscript-v1.4.0-blue?style=flat-square&logo=javascript&logoColor=white)](https://raw.githubusercontent.com/Stxyu-p/threadmax/main/threadmax.user.js) |

---

### 🛡️ Engineering Philosophy

* **Local-First by Default:** Computation and persistence remain on user-owned hardware. No uninvited cloud sync or third-party storage.
* **Zero-Telemetry Standard:** Software must never phone home. Zero analytics scripts, tracking beacons, or invisible fingerprinting.
* **Minimal Dependency Surface:** Prioritize the standard library and native platform APIs. Every third-party dependency is an audit liability.
* **Empirical Verification:** Invariants are strictly verified through deterministic execution and automated test suites.

---

<div align="center">
  <sub>Engineering showcase by <a href="https://github.com/Stxyu-p">@Stxyu-p</a> · Independent Open Source Projects</sub>
</div>
