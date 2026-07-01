# Nerdstack — Style Reference
> Engineering clarity for complex code

**Theme:** auto

Nerdstack is a developer-tool brand that translates dense engineering systems into something legible and human. The aesthetic pairs warm off-white paper surfaces with deep ink-black type, then lets pastel utility hues — coral, orchid, mint, sky, sand, peach — surface as small badges, gradient washes, and category markers. The result is a calm, technical feeling: documentation-clean, with just enough warmth to feel inviting rather than clinical.

Typography leans on a low-contrast, slightly geometric sans (StackSans) for both headlines and body, paired with a monospaced label voice (Fragment Mono) for taxonomy. Layouts breathe — generous section padding, soft 20px container radii, and floating card components shadowed onto cream paper. When the surface flips to dark, the brand stays restrained: a single deep ink (#231f23) under the same pastel accent system.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ash Depth | `#ececec` | `--color-ash-depth` | Recessed depth surface. Input fields, subtle chip wells, and inset zones beneath the canvas. |
| Cache Sand | `#f4e7c7` | `--color-cache-sand` | Warm tag accent. Footer pills, blog category chips, and warm gradient endpoints. |
| Core Coral | `#ed7472` | `--color-core-coral` | Critical accent & error tone. Marks debug critical states, error chips, and warm gradient stops. |
| Lift White | `#ffffff` | `--color-lift-white` | Lifted card surface. Pure white used for elevated cards, dropdowns, and floating tiles above the cream. |
| Linen Base | `#f6f3f0` | `--color-linen-base` | Alternate page canvas. Slightly warmer cream used for full-bleed background washes and hero stages. |
| Packet Sky | `#d7e9ff` | `--color-packet-sky` | Cleanup & info accent. Cool pastel for review tags, debug icon backdrops, and informational chips. |
| Paper Cream | `#f7f6f5` | `--color-paper-cream` | Primary canvas. Warm off-white background that anchors every page surface and section. |
| Syntax Mint | `#ccfdcf` | `--color-syntax-mint` | Success & banner accent. Pass states, announcement banners, and docs category tags. |
| Midnight Ink | `#231f23` | `--color-midnight-ink` | Primary text & ink. Headlines, body copy, primary button fills, and dark surfaces. |
| Qubit Orchid | `#cebffa` | `--color-qubit-orchid` | Issue category accent. Soft lavender tile backgrounds for issue-found tags and product icons. |
| Signal Amber | `#d5ad4b` | `--color-signal-amber` | Warning state. Reserved for caution indicators and validation feedback only. |
| Verdant Pass | `#5cce63` | `--color-verdant-pass` | Success state. Reserved for confirmed-pass indicators and form success feedback. |
| Violet Quill | `#4c3e5e` | `--color-violet-quill` | Brand accent. Reserved for occasional emphasis, brand marks, and subdued highlights. |
| Graphite Lift | `#322d32` | `--color-graphite-lift` | Dark-mode lifted surface. Cards and form blocks elevated against obsidian backgrounds. |
| Latency Peach | `#ffe1d6` | `--color-latency-peach` | Warning accent & gradient halo. Warning markers, peach text accents, and the signature CTA gradient bloom. |
| Obsidian Depth | `#1a171a` | `--color-obsidian-depth` | Deepest dark surface. Dark-mode hero backgrounds and inverted code panels. |

## Tokens — Typography

### Fragment Mono — Labels & taxonomy. Uppercased monospace voice for category tags, table headers, and small metadata. · `--font-fragment-mono`
- **Substitute:** monospace
- **Weights:** 400
- **Sizes:** 10px, 12px
- **Line height:** 1.20, 1.33
- **Letter spacing:** 0.75px
- **Role:** Labels & taxonomy. Uppercased monospace voice for category tags, table headers, and small metadata.

### StackSans Text — Body & UI. Light-weight default for paragraphs, buttons, navigation, and form fields. · `--font-stacksans-text`
- **Substitute:** Arial, sans-serif
- **Weights:** 300, 400, 500
- **Sizes:** 13px, 14px, 16px, 20px
- **Line height:** 1.23, 1.43, 1.50, 1.60
- **Letter spacing:** 0px
- **Role:** Body & UI. Light-weight default for paragraphs, buttons, navigation, and form fields.

### StackSans Headline — Display & headings. A low-contrast geometric sans that carries every H0–H6 with confident, slightly compressed letterforms. · `--font-stacksans-headline`
- **Substitute:** Arial, sans-serif
- **Weights:** 400, 500
- **Sizes:** 20px, 24px, 32px, 40px, 48px, 64px, 88px
- **Line height:** 1.00, 1.06, 1.17, 1.20, 1.25, 1.33, 1.50
- **Letter spacing:** -2px, -1px, -0.5px, 0px
- **Role:** Display & headings. A low-contrast geometric sans that carries every H0–H6 with confident, slightly compressed letterforms.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.2 | 0.75px | `--text-caption` |
| body-sm | 13px | 1.54 | 0px | `--text-body-sm` |
| body | 16px | 1.5 | 0px | `--text-body` |
| body-lg | 20px | 1.6 | 0px | `--text-body-lg` |
| heading-sm | 20px | 1.2 | 0px | `--text-heading-sm` |
| heading | 32px | 1.25 | 0px | `--text-heading` |
| heading-lg | 40px | 1.2 | -0.5px | `--text-heading-lg` |
| display-sm | 48px | 1.17 | -0.5px | `--text-display-sm` |
| display | 64px | 1.06 | -1px | `--text-display` |
| display-xl | 88px | 1 | -2px | `--text-display-xl` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** spacious

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |
| 160 | 160px | `--spacing-160` |
| 200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
|---------|-------|
| pill | 999px |
| tags | 8px |
| cards | 20px |
| small | 8px |
| circle | 24px |
| inputs | 8px |
| buttons | 8px |
| default | 12px |
| navigation | 20px |

### Layout

- **Page max-width:** 1800px
- **Section gap:** 160px
- **Card padding:** 32px
- **Element gap:** 24px

## Tokens — Shadows

| Name | Value | Role |
|------|-------|------|
| dropdown | `0 4px 40px rgba(35,31,35,0.08)` | Navigation dropdowns and small floating panels. |
| card-soft | `0 4px 80px rgba(35,31,35,0.08)` | Primary card and footer elevation against cream canvas. |
| scroll-nav | `0 4px 80px rgba(35,31,35,0.08)` | Scrolled navigation bar lift. |

## Tokens — Motion

| Name | Duration | Easing | Role |
|------|----------|--------|------|
| tabs | 200ms | `ease-in-out` | Tab pane in/out transitions. |
| ui-default | 300ms | `ease` | Buttons, link hovers, background transitions. |
| tertiary-hover | 350ms | `ease` | Tertiary CTA color shifts. |

## Tokens — Breakpoints

- **lg:** 991px
- **md:** 767px
- **sm:** 479px

## Do's and Don'ts

### Do
- Anchor every page on Paper Cream (#f7f6f5) and let Lift White cards float above it with a soft 0 4px 80px rgba(35,31,35,0.08) shadow.
- Pair StackSans Headline at 64–88px with a tight -1px to -2px tracking for hero displays — keep weight at 400, never bold.
- Use the pastel accents (Coral, Orchid, Mint, Sky, Sand, Peach) only as small icon tile backgrounds, category tags, or blurred gradient halos behind hero scenes.
- Apply 20px (general--large) radii to cards, navbars, and footer containers; reserve 8px radii for buttons, tags, and inputs.
- Set body copy to StackSans Text 16px / 1.5 at weight 300 in Midnight Ink, and downshift secondary copy to the 64% dark tone (#231f23a3).
- Use Fragment Mono uppercase at 10–12px with 0.75px tracking for category labels, table headers, and metadata — never for body or buttons.
- Build the signature CTA halo as a 600px blurred radial gradient from Core Coral into Cache Sand, sitting behind centered headlines.
- Keep section padding at 80px / 120px / 160px / 200px steps to preserve the spacious editorial rhythm.

### Don't
- Don't saturate the pastel accents into large flat color fields — they exist as small chips, icon backings, and soft gradient stops only.
- Don't introduce additional brand hues outside the six named pastels plus Violet Quill; the palette is intentionally curated.
- Don't bold StackSans for headlines — the type system relies on weight 400 paired with negative tracking, not heavier weights.
- Don't place primary buttons on Ash Depth or Paper Cream without the full Midnight Ink fill; ghost buttons must carry the dark-8 tint background.
- Don't use Signal Amber or Verdant Pass as decorative colors — they are reserved exclusively for warning and success state feedback.
- Don't replace Fragment Mono labels with the headline or body family; the monospace voice is what marks taxonomy and metadata.
- Don't tighten section padding below 80px on desktop — the brand reads as cramped and loses its documentation-paper feel.
- Don't mix radii on a single component — buttons stay at 8px, cards stay at 20px, never blend the two scales.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 1 | Linen Base | `#f6f3f0` | Page-level canvas behind the entire layout. |
| 2 | Paper Cream | `#f7f6f5` | Primary content surface and section backgrounds. |
| 3 | Ash Depth | `#ececec` | Recessed depth surface for inputs and inset wells. |
| 4 | Lift White | `#ffffff` | Lifted cards, dropdown panels, and floating tiles. |
| 5 | Obsidian Depth | `#1a171a` | Inverted dark stage for hero scenes and code panels. |
| 6 | Graphite Lift | `#322d32` | Lifted card surface against obsidian backgrounds. |

## Dark Variant Overrides

### Colors

| Token | Light | Dark |
|-------|-------|------|
| `--color-ash-depth` | `#ececec` | `#231f23` |
| `--color-lift-white` | `#ffffff` | `#322d32` |
| `--color-linen-base` | `#f6f3f0` | `#1a171a` |
| `--color-paper-cream` | `#f7f6f5` | `#1a171a` |
| `--color-midnight-ink` | `#231f23` | `#f7f6f5` |

### Surfaces

| Token | Light | Dark |
|-------|-------|------|
| `--surface-ink` | `—` | `#f7f6f5` |
| `--surface-lift` | `—` | `#322d32` |
| `--surface-canvas` | `—` | `#1a171a` |

## Imagery

Imagery is split between two registers: warm photographic portraits used for testimonials and case studies (soft daylight, neutral wardrobes, cropped to 64px or 500px square avatars with 20px radii) and abstract product widgets — dark obsidian panels containing hand-drawn SVG curve charts in coral, sand, and faint ink, plus tiled time-distribution bars in mint, peach, and orchid. App-icon mosaics float around hero centerpieces as 80px rounded-square tiles tinted in the pastel accent set, each holding a single Lucide-style line icon. Decorative blurred radial gradients (Core Coral → Cache Sand) sit behind hero CTAs and product screens, providing the brand's signature warm bloom against the cream canvas.

## Layout

The layout is a centered editorial column anchored on a 1800px max container with 32px lateral margins, breathing into 80–200px section padding for a documentation-paper feel. Hero scenes stack a small monospace category pill, a centered display headline (up to 88px with -2px tracking), a 4-column subtext block, and a button group of one Midnight Ink primary plus one Ash Depth ghost. Below, content alternates between full-width product widget cards (20px radius, soft 80px-blur shadow on cream) and two-column scroll sections pairing left-side copy with right-side floating UI tiles. Navigation is a pill-shaped 1200px-wide bar with 20px radius, holding logo, center menu, sign-in link, and a dark Get Template CTA. The footer is a single rounded 20px card on cream, shadowed softly, containing brand mark, link columns, social row, and a Cache Sand version pill.

## Agent Prompt Guide

### Quick reference
- Canvas: #f7f6f5 (Paper Cream)
- Page wash: #f6f3f0 (Linen Base)
- Recessed: #ececec (Ash Depth)
- Lifted: #ffffff (Lift White)
- Ink: #231f23 (Midnight Ink)
- Dark stage: #1a171a (Obsidian Depth)
- Critical accent: #ed7472 (Core Coral)
- Issue accent: #cebffa (Qubit Orchid)
- Success accent: #ccfdcf (Syntax Mint)
- Info accent: #d7e9ff (Packet Sky)
- Warm tag: #f4e7c7 (Cache Sand)
- Warm halo: #ffe1d6 (Latency Peach)
- Display family: StackSans Headline @ 400, -1 to -2px tracking
- Body family: StackSans Text @ 300, 16/1.5
- Label family: Fragment Mono @ 400, uppercase, 0.75px tracking
- Card radius: 20px · Button/tag radius: 8px
- Section padding: 80 / 120 / 160 / 200px
- Card shadow: 0 4px 80px rgba(35,31,35,0.08)

### Voice
Nerdstack speaks like a senior engineer who finally has time to explain things properly — calm, exact, and quietly witty. Headlines are short declaratives ("The AI that turns complex into easy"), body copy stays plain-spoken and technical without jargon, and labels are clipped, uppercased, and machinic. Never marketing-loud; always documentation-clean.

### Example prompts
- **New marketing section:** "Design a Nerdstack feature section on a #f7f6f5 canvas: left column with a Fragment Mono uppercase 'DEBUG' label inside a Packet Sky icon tile, a 40px StackSans Headline H3, and a single ghost CTA. Right column holds a 20px-radius Lift White card with a dark obsidian widget showing three SVG curves in Core Coral, Cache Sand, and faint ink."
- **Pricing card:** "Render a pricing card on Lift White with 20px radius, 32px padding, top tile carrying the plan name in StackSans Headline H6 and price in H2, a Midnight Ink primary button below, and a feature list using 16px StackSans Text 300 with 8px Lucide check icons."
- **Hero CTA stage:** "Compose a centered CTA section: 48px H2 in Midnight Ink, two buttons (primary dark, secondary Ash Depth tint), and a 600px blurred radial halo from Core Coral into Cache Sand sitting behind the headline at 35% Y offset."
- **Testimonial tile:** "Build a testimonial card on Lift White with 20px radius and 32px padding: SVG client logo on top, 16px paragraph in 64% Midnight Ink, then an author row with a 64px square avatar (20px radius), bold name, and tone-medium role."

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-ash-depth: #ececec;
  --color-cache-sand: #f4e7c7;
  --color-core-coral: #ed7472;
  --color-lift-white: #ffffff;
  --color-linen-base: #f6f3f0;
  --color-packet-sky: #d7e9ff;
  --color-paper-cream: #f7f6f5;
  --color-syntax-mint: #ccfdcf;
  --color-midnight-ink: #231f23;
  --color-qubit-orchid: #cebffa;
  --color-signal-amber: #d5ad4b;
  --color-verdant-pass: #5cce63;
  --color-violet-quill: #4c3e5e;
  --color-graphite-lift: #322d32;
  --color-latency-peach: #ffe1d6;
  --color-obsidian-depth: #1a171a;

  /* Typography — Font Families */
  --font-fragment-mono: "Fragment Mono", Arial, sans-serif, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-stacksans-text: "StackSans text Variable", Arial, sans-serif, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-stacksans-headline: "StackSans headline Variable", Arial, sans-serif, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: 0.75px;
  --text-body-sm: 13px;
  --leading-body-sm: 1.54;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-body-lg: 20px;
  --leading-body-lg: 1.6;
  --tracking-body-lg: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --tracking-heading: 0px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.5px;
  --text-display-sm: 48px;
  --leading-display-sm: 1.17;
  --tracking-display-sm: -0.5px;
  --text-display: 64px;
  --leading-display: 1.06;
  --tracking-display: -1px;
  --text-display-xl: 88px;
  --leading-display-xl: 1;
  --tracking-display-xl: -2px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-160: 160px;
  --spacing-200: 200px;

  /* Layout */
  --page-max-width: 1800px;
  --section-gap: 160px;
  --card-padding: 32px;
  --element-gap: 24px;

  /* Border Radius */
  --radius-pill: 999px;
  --radius-tags: 8px;
  --radius-cards: 20px;
  --radius-small: 8px;
  --radius-circle: 24px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-default: 12px;
  --radius-navigation: 20px;

  /* Surfaces */
  --surface-linen-base: #f6f3f0;
  --surface-paper-cream: #f7f6f5;
  --surface-ash-depth: #ececec;
  --surface-lift-white: #ffffff;
  --surface-obsidian-depth: #1a171a;
  --surface-graphite-lift: #322d32;

  /* Shadows */
  --shadow-dropdown: 0 4px 40px rgba(35,31,35,0.08);
  --shadow-card-soft: 0 4px 80px rgba(35,31,35,0.08);
  --shadow-scroll-nav: 0 4px 80px rgba(35,31,35,0.08);

  /* Motion */
  --duration-tabs: 200ms;
  --easing-tabs: ease-in-out;
  --duration-ui-default: 300ms;
  --easing-ui-default: ease;
  --duration-tertiary-hover: 350ms;
  --easing-tertiary-hover: ease;

  /* Breakpoints */
  --breakpoint-lg: 991px;
  --breakpoint-md: 767px;
  --breakpoint-sm: 479px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-ash-depth: #231f23;
    --color-lift-white: #322d32;
    --color-linen-base: #1a171a;
    --color-paper-cream: #1a171a;
    --color-midnight-ink: #f7f6f5;
    --surface-ink: #f7f6f5;
    --surface-lift: #322d32;
    --surface-canvas: #1a171a;
  }
}

[data-theme="dark"] {
  --color-ash-depth: #231f23;
  --color-lift-white: #322d32;
  --color-linen-base: #1a171a;
  --color-paper-cream: #1a171a;
  --color-midnight-ink: #f7f6f5;
  --surface-ink: #f7f6f5;
  --surface-lift: #322d32;
  --surface-canvas: #1a171a;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-ash-depth: #ececec;
  --color-cache-sand: #f4e7c7;
  --color-core-coral: #ed7472;
  --color-lift-white: #ffffff;
  --color-linen-base: #f6f3f0;
  --color-packet-sky: #d7e9ff;
  --color-paper-cream: #f7f6f5;
  --color-syntax-mint: #ccfdcf;
  --color-midnight-ink: #231f23;
  --color-qubit-orchid: #cebffa;
  --color-signal-amber: #d5ad4b;
  --color-verdant-pass: #5cce63;
  --color-violet-quill: #4c3e5e;
  --color-graphite-lift: #322d32;
  --color-latency-peach: #ffe1d6;
  --color-obsidian-depth: #1a171a;

  /* Typography */
  --font-fragment-mono: "Fragment Mono", Arial, sans-serif, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-stacksans-text: "StackSans text Variable", Arial, sans-serif, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-stacksans-headline: "StackSans headline Variable", Arial, sans-serif, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.2;
  --text-body-sm: 13px;
  --leading-body-sm: 1.54;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 20px;
  --leading-body-lg: 1.6;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --text-heading: 32px;
  --leading-heading: 1.25;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --text-display-sm: 48px;
  --leading-display-sm: 1.17;
  --text-display: 64px;
  --leading-display: 1.06;
  --text-display-xl: 88px;
  --leading-display-xl: 1;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-120: 120px;
  --spacing-160: 160px;
  --spacing-200: 200px;

  /* Border Radius */
  --radius-pill: 999px;
  --radius-tags: 8px;
  --radius-cards: 20px;
  --radius-small: 8px;
  --radius-circle: 24px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-default: 12px;
  --radius-navigation: 20px;

  /* Shadows */
  --shadow-dropdown: 0 4px 40px rgba(35,31,35,0.08);
  --shadow-card-soft: 0 4px 80px rgba(35,31,35,0.08);
  --shadow-scroll-nav: 0 4px 80px rgba(35,31,35,0.08);

  /* Breakpoints */
  --breakpoint-lg: 991px;
  --breakpoint-md: 767px;
  --breakpoint-sm: 479px;
}
```
