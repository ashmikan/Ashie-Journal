<div align="center">

  # 🌸 Ashie - Literary Journal
  
  *“Stories, words & little pieces of the heart.”*

  <p align="center">
    A quiet, romantic web sanctuary crafted for tender literary excerpts, antique book margins and vintage paper aesthetics.
  </p>

  <p align="center">
    <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-7.3.5-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro Version" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" /></a>
    <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-%3E%3D22.12.0-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node Version" /></a>
    <a href="https://github.com/ashmikan/Ashie-Journal"><img src="https://img.shields.io/badge/Aesthetic-Retro_Vintage-D87088?style=for-the-badge&logo=sparkles&logoColor=white" alt="Retro Vintage Aesthetic" /></a>
  </p>

  <p align="center">
    <a href="#-about-the-journal">About</a> •
    <a href="#-aesthetic--design-palette">Aesthetic</a> •
    <a href="#-key-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-folder-structure">Structure</a> •
    <a href="#-dispatch--connect">Connect</a>
  </p>

</div>

---

## 📖 About The Journal

**Ashie Journal** is an intimate digital journal created for book lovers, quiet dreamers, and collectors of beautiful quotes. Designed with warm cream tones, subtle floral charms, and tactile glassmorphic layers, it offers readers a calming respite from the hurried modern web.

> *“Between the yellowed pages of a beloved novel is where we find the pieces of ourselves we thought we’d lost. A quiet sanctuary where tender sentences linger forever.”*

---

## 🎨 Aesthetic & Design Palette

The journal is thoughtfully styled using a bespoke retro-vintage color scheme inspired by antique parchment, dried blush petals, and soft ink.

| Token | Hex | Purpose |
| :--- | :--- | :--- |
| **Parchment Cream** | `#FAF7F2` | Background warmth & natural paper canvas |
| **Blush Rose** | `#FCECEE` | Soft card tints, badges, and pill tags |
| **Rose Petal** | `#DF8A9C` | Buttons, icons, and accent borders |
| **Deep Rose** | `#C76B80` | Script calligraphy, hover states & highlights |
| **Warm Ink** | `#2B2523` | Primary literary serif typography |
| **Muted Sepia** | `#7A706C` | Metadata, citations, and secondary copy |

### 🖋️ Typography Harmony
- **Playfair Display** - Elegant serif headers reminiscent of classic printed literature.
- **Plus Jakarta Sans** - Crisp, clean modern sans-serif for legible UI elements and micro-copy.
- **Caveat** - Organic, handwritten cursive notes scattered throughout the experience.

---

## ✨ Key Features

- **🕯️ Atmospheric Vintage Hero**  
  Rich vintage desk backdrop framed with frosted-glass typography, floating chapter stamps, and delicate ambient sparkles.
  
- **📜 Vertically Staggered Quotes Feed**  
  Alternating organic quote layout that mimics flipping through journal pages, complete with literature category tags and authors (*The Secret History*, *Wuthering Heights*, *Persuasion*).

- **💖 Interactive Heart Reacts**  
  Lightweight, dependency-free micro-interactions with dynamic like counters and tactile scale animations.

- **🌸 "About Ashie" Personal Vignette**  
  Warm author bio section featuring a dashed circular portrait, signature calligraphy, and oversized decorative quotation marks.

- **💌 "Share Your Thoughts" Dispatch Form**  
  Dedicated reader interaction card allowing visitors to submit quotes that touched their hearts, complete with client-side feedback handling.

- **⚡ Blazing Astro Performance**  
  Near-zero client-side JavaScript footprint, fast load times, and responsive mobile-first craftsmanship powered by Tailwind CSS v4.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) `v7.3.5`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Fonts**: Google Fonts (`Playfair Display`, `Plus Jakarta Sans`, `Caveat`)
- **Icons**: Custom accessible SVG iconography
- **Bundler / Runtime**: Vite / Node.js `>= 22.12.0`

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure you have **Node.js (>= 22.12.0)** installed on your machine.

### 2. Clone the Repository
```bash
git clone https://github.com/ashmikan/Ashie-Journal.git
cd Ashie-Journal
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure likes

Copy `.env.example` to `.env` and fill in the REST URL and token from your Upstash Redis database:

```bash
copy .env.example .env
```

The likes API returns `503 Likes service is not configured` when these variables are missing, rather than attempting to connect with an invalid Redis client.

### 5. Run the Development Server
```bash
npm run dev
```

Visit [`http://localhost:4321`](http://localhost:4321) in your browser to view the journal.

---

## 📋 Available Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Astro development server |
| `npm run build` | Compiles production assets into `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run astro` | Access Astro CLI commands |

---

## 📂 Folder Structure

```
Ashie-Journal/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── images/
│       ├── ashie_profile.jpg         # Ashie portrait image
│       └── hero_vintage_desk.jpg     # Hero atmospheric desk background
├── src/
│   ├── components/
│   │   ├── About.astro               # Personal bio & author introduction
│   │   ├── Contact.astro             # Direct dispatch & reader thoughts form
│   │   ├── Hero.astro                # Vintage hero section with frosted card
│   │   ├── QuoteCard.astro           # Individual stylized literary quote card
│   │   └── QuoteList.astro           # Staggered quote feed & like handlers
│   ├── layouts/
│   │   └── Layout.astro              # Base HTML layout, SEO tags, & header nav
│   ├── pages/
│   │   └── index.astro               # Landing page aggregator
│   └── styles/
│       └── global.css                # Tailwind CSS v4 imports & theme tokens
├── astro.config.mjs                  # Astro project configuration
├── package.json                      # Scripts and dependencies
└── tsconfig.json                     # TypeScript configuration
```

---

## 💌 Dispatch & Connect

Have a question, book recommendation, or beloved quote to share?

- **Author**: Ashie (Ashmika N.)
- **Location**: Kalutara, Sri Lanka
- **Email**: [ashmika.nathali123@gmail.com](mailto:ashmika.nathali123@gmail.com)
- **Repository**: [github.com/ashmikan/Ashie-Journal](https://github.com/ashmikan/Ashie-Journal)


<div align="center">
  <br />
  <p><em>“Every letter sent is a tender bridge between kindred spirits.”</em></p>
  <sub>Crafted with love, ink, and nostalgia • © 2026 Ashie's Literary Journal</sub>
</div>
