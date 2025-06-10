# 🧼 In It, Lee – SP Karma Oracle Generator

> *The daily comic oracle for the spiritually sprint-fatigued.*

---

## 👀 What Is This?

**In It, Lee** is a satire-powered comic engine that delivers daily Agile-inspired panels, punchlines, and prophecies. Each day, users receive a comic strip, an oracle message, and an SP Karma score—offering emotional resonance for teams navigating the rituals and absurdities of modern tech work.

---

## 🎯 Why Does This Exist?

To offer daily engagement and self-aware storytelling for individuals and teams in product, software, and design—connecting the emotional, ritual, and absurd layers of Agile culture through comics, archetypes, and shareable satire.

---

## 👥 Who Is It For?

* Software Engineers
* Product Managers
* Scrum Masters
* Designers & QA Testers
* Agile Coaches & Team Leads

---

## 🔧 How It Works

* Visit the home page to receive the comic, your SP Karma, and an oracle truth
* Use the `/bless` page to generate personalized sprint blessings
* Explore `/team` for a Slack-connected team ritual experience
* Optional inputs (mood, role, ticket) personalize the oracle and messages

---

## ✅ Key Benefits

* Brings humor and emotional truth into Agile rituals
* Reinforces team culture and individual reflection
* Encourages lightweight but daily engagement
* Enhances retros and standups with shareable tools

---

## ✍️ User Stories

**Individual Contributor (IC):** “I want a daily comic that captures how Agile work *feels* so I can reflect, laugh, and feel seen.”

**Team Lead:** “I want to track our team’s SP Karma and share comics to open retros with emotional honesty.”

**Designer/Writer:** “I want to explore comics filtered by theme or character for inspiration about team dynamics.”

**Agile Coach:** “I want to use comic bundles in retros to spark conversations my team actually cares about.”

**Enterprise Admin:** “I want Slack integration, privacy toggles, and a karma dashboard for safe scaling.”

---

## 🧭 The 5 Planes of UX

### 1. Strategy

* Reflect emotional + mythic side of software life
* Create daily narrative habit loop

### 2. Scope

* Features: Comic, oracle, karma score, personalization, team mode, archive

### 3. Structure

* Flow: View comic → receive oracle → log karma → share → archive

### 4. Skeleton

* Pages: Home, Bless (form), Archive (future), Team Ritual, Settings

### 5. Surface

* Flat, symbolic comic aesthetic
* Satirical and poetic UI copy
* Emoji + accessibility-friendly design

---

## 🖼 Core Features

### Daily Comic Panel

* One stylized panel per day
* Rotates roles/archetypes/themes

### SP Karma Oracle

* Daily score (numeric/emoji)
* Oracle quote (from curated truthbank)

### Punchline Engine

* Random or context-aware captions
* Taglines like: “Not every commit is a confession.”

### Shareability

* Save/share comic image
* “Bless My Team” Slack integration (in dev)

---

## 🧙 Characters

* 🙀 **Lee** – The unknowable, cursed estimator
* 🧼 **The Scrub Maiden** – Scrubs QA, scrubs destiny
* 🧽 **Soap Maestro** – Refactors with polish
* 😱 **The Intern** – Inherits all forgotten tech debt
* 💼 **The PO** – Product Oracle, but also mythologically suspect
* 🍜 **El Sukuramu Masuta** – Scrum master via divine inheritance
* 🌀 **The Sprint Whisperer** – Believes no sprint ever truly ends

---

## 🏁 The Amazing Sprint (Race) Modules

### 🟩 Leg 1: The Estimation Gauntlet

Guess SP of legacy tickets based only on Git logs and Confluence emoji: \[🧼]

### 🟦 Leg 2: Merge or WWJD

Merge a 243-comment PR or Jira merges it for you… to main… tagged to your name.

### 🟥 Detour: Scrub Maiden vs Soap Maestro vs El Sukuramu Masuta

Pick a path: QA limbo, UX shine-up, or multilingual sprint diplomacy

### 🟨 Roadblock: In It, Lee.

Explain who Lee is. Why tickets now render upside down. Only then may you retro.

---

## 💻 Prototype UI Pages

* `/` Home – Comic, oracle, karma
* `/bless` – Mood/role/ticket → personal blessing
* `/team` – Team mode teaser + Slack CTA

---

## 📦 Dev Stack

* **Next.js 13+ (App Router)**
* **TailwindCSS**
* **Yarn Berry**
* **Vercel deployment**
* Optional: Supabase, Resend, Slack SDK

---

## 🔨 Repo Plan: Phase 1 (Complete)

```
/app
  page.tsx             # Daily comic + oracle
  bless/page.tsx       # Personal blessing form
  team/page.tsx        # Team ritual teaser
/components
  ComicPanel.tsx       # Comic image component
  OracleMessage.tsx    # Oracle quote rotator
/lib
  oracle.ts            # Oracle truthbank
/public/images
  sample-comic.png     # Placeholder art
```

---

## 🛠️ Next Steps

* Finalize comic visual system
* Deploy landing page + waitlist
* Expand oracle logic + ritual packs
* Prep Slack + email integrations
* Build archive + filter view

---

## 🚀 Getting Started

```bash
yarn install
yarn dev
```

Visit `http://localhost:3000` to view the daily comic oracle.

---

> *“The sprint ends. The sprint begins. The backlog remembers. Are you in it… Lee?”*
