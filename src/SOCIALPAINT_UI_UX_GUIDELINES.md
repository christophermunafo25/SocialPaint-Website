# Socialpaint UI/UX Design Guidelines

> Comprehensive design system and interaction requirements extracted from the Socialpaint marketing site. Use these as copy-paste requirements for building the actual platform.

---

## 1. Color System

### Core Palette

| Token | Hex | Usage |
|---|---|---|
| Near-black | `#231f23` | Primary text, dark backgrounds, primary buttons |
| Warm gray | `#f7f6f5` | Page backgrounds, light surfaces |
| Light gray | `#ececec` | Card backgrounds, secondary surfaces, dividers |
| White | `#ffffff` | Elevated cards, input backgrounds, content containers |

### Accent Palette (Feature Colors)

Each product feature owns a pastel accent color. Use consistently across the platform wherever that feature appears (icons, status indicators, section highlights, progress bars).

| Feature | Hex | Usage |
|---|---|---|
| Style DNA | `#cebffa` | Purple pastel |
| Content Studio | `#ccfdcf` | Green pastel |
| Brand Guard | `#d7e9ff` | Blue pastel |
| Insights | `#f4e7c7` | Gold/warm pastel |
| Smart Templates | `#ffe1d6` | Peach pastel |

### Semantic Accent

| Token | Hex | Usage |
|---|---|---|
| Coral | `#ed7472` | Testimonials, use-case badges, warm emphasis |
| Success/positive | `#4a7c59` | Positive trend indicators, success states |
| Error/negative | `#e94560` | Negative trend indicators, error states |

### Opacity Conventions

| Usage | Value |
|---|---|
| Secondary text | `rgba(35,31,35,0.64)` |
| Tertiary text / labels | `rgba(35,31,35,0.48)` |
| Placeholder text | `rgba(35,31,35,0.32)` |
| Disabled / dormant elements | `rgba(35,31,35,0.08)` or `0.06` opacity |
| Borders | `rgba(35,31,35,0.08)` |
| Light text on dark backgrounds | `rgba(247,246,245,0.64)` for secondary, `0.48` for tertiary, `0.32` for dormant |
| Dark surface borders | `rgba(247,246,245,0.08)` or `0.06` |

---

## 2. Typography

### Font Stack

| Role | Family | Import |
|---|---|---|
| Body / UI | System sans-serif: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif` | Native, no import needed |
| Labels / Mono | `'Fragment Mono', monospace` | Google Fonts: `Fragment+Mono:ital@0;1` |

### Heading Scale (all use `<p>` tags with explicit classes)

| Level | Mobile | Tablet | Desktop | Tracking | Leading |
|---|---|---|---|---|---|
| Hero / H1 | `36px` | `48px`-`56px` | `64px` | `-1px` | `1.1` |
| Section / H2 | `28px` | `36px` | `48px` | `-0.5px` | `1.15` |
| Subsection / H3 | `20px` | `24px` | `40px` | `-0.5px` | `1.15`-`1.2` |
| Card title | `20px` | `24px` | `27px` | `0` | `28px`-`32px` |

### Body Text

| Variant | Size | Leading | Weight |
|---|---|---|---|
| Large body (hero descriptions) | `16px` / `18px` / `20px` | `28px`-`32px` | `fontWeight: 300` |
| Standard body | `14px` / `16px` | `24px` | `fontWeight: 300` |
| Small body / descriptions | `13px` / `15px` | `20px`-`22px` | `fontWeight: 300` |

### Label / Monospace Style

```
font-family: 'Fragment Mono', monospace
font-size: 11px-12px
letter-spacing: 0.75px
text-transform: uppercase
color: rgba(35,31,35,0.48) (or white equivalent on dark)
```

### Font Weight Convention

All font weights are set via **inline `style={{ fontWeight: N }}`**, never via Tailwind `font-*` classes:

| Weight | Usage |
|---|---|
| `300` | Body text, descriptions, secondary content |
| `400` | Standard UI text, form values |
| `500` | Headings, card titles, emphasis, metric values |

---

## 3. Spacing & Layout

### Global Container

- Max width: `1440px`, centered with `mx-auto`
- Page padding: `px-4` (mobile), `px-8` (tablet+)
- Content max-width (within container): `1100px` for wide sections, `800px`-`900px` for narrow, `520px` for forms

### Section Spacing

| Breakpoint | Vertical padding |
|---|---|
| Mobile | `py-16` (64px) |
| Tablet | `py-20` (80px) |
| Desktop | `py-[120px]` (120px) |

### Section Header Pattern

Every section follows this structure:

1. **Badge/tag** (Fragment Mono, uppercase, small colored dot or icon + border pill)
2. **Heading** (large, tight tracking)
3. **Subheading** (optional, secondary text color, max-width constrained)
4. **Gap**: `gap-6` between elements, `mb-12 md:mb-16` between header and content

### Component Gaps

| Context | Gap |
|---|---|
| Cards in a grid | `gap-4` |
| Section header to content | `mb-12 md:mb-16` |
| Between major sections | `gap-12 sm:gap-16 lg:gap-20` |
| Inside a card | `gap-4` to `gap-6` |
| Form fields | `gap-5` |
| Button groups | `gap-3` |

---

## 4. Component Patterns

### Buttons

**Primary CTA (dark):**
```
bg-[#231f23] text-[#f7f6f5] px-5 py-3 rounded-lg
font-size: 14px (mobile), 16px (desktop)
Optional: trailing arrow icon (16px, lucide ArrowRight)
```

**Secondary / Ghost:**
```
backdrop-blur-[8px] bg-[rgba(35,31,35,0.08)] text-[#231f23] px-5 py-3 rounded-lg
```

**Nav buttons (smaller):**
```
px-4 py-2 rounded-lg
font-size: 14px
```

**Inverted (on dark backgrounds):**
```
bg-[#f7f6f5] text-[#231f23] px-5 py-3 rounded-lg
```

**Dark surface ghost:**
```
backdrop-blur-[8px] bg-[rgba(247,246,245,0.08)] text-[#f7f6f5] px-5 py-3 rounded-lg
```

### Cards

**Standard card:**
```
bg-[#ececec] rounded-[20px] p-6 sm:p-8
```

**Elevated card:**
```
bg-white rounded-[16px] p-5 sm:p-6 border border-[rgba(35,31,35,0.08)]
Hover: shadow-[0px_4px_40px_rgba(0,0,0,0.06)]
```

**Dark surface card:**
```
bg-[rgba(247,246,245,0.04)] rounded-[16px] p-6 sm:p-7
border: 1px solid rgba(247,246,245,0.08)
Hover: bg-[rgba(247,246,245,0.06)], y: -4px
```

**Feature shadow card:**
```
bg-[#f7f6f5] rounded-[20px] shadow-[0px_4px_80px_0px_rgba(0,0,0,0.08)]
```

### Section Tag / Badge

**Bordered pill (most common):**
```
<div class="flex gap-2 items-center px-3 py-2 rounded-lg relative">
  <div class="absolute border border-[rgba(35,31,35,0.08)] inset-0 pointer-events-none rounded-lg" />
  <div class="bg-[ACCENT_COLOR] rounded-[2px] size-[10px]" />
  <p class="font-['Fragment_Mono',monospace] text-[12px] tracking-[0.75px] uppercase">LABEL</p>
</div>
```

**Filled badge (hero pages):**
```
<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style="background: ACCENT_COLOR">
  <Icon size={14} />
  <p class="font-['Fragment_Mono',monospace] text-[12px] tracking-[0.75px] uppercase">LABEL</p>
</div>
```

### Icon Badges (Feature icons in nav/cards)

```
<div class="w-10 h-10 rounded-[10px] flex items-center justify-center" style="background: FEATURE_COLOR">
  <Icon size={18-20} color="#231f23" />
</div>
```

Smaller variant (nav dropdowns):
```
p-3 rounded-[12px] with size-[24px] icon
```

### Form Inputs

```
w-full px-4 py-3 rounded-lg
bg-[rgba(35,31,35,0.04)]
border border-[rgba(35,31,35,0.08)]
text-[#231f23] text-[16px] fontWeight: 300
focus: border-[rgba(35,31,35,0.24)]
placeholder: text-[rgba(35,31,35,0.32)]
transition-colors
```

**Form labels:**
```
font-['Fragment_Mono',monospace] text-[11px] tracking-[0.75px] uppercase text-[rgba(35,31,35,0.48)]
```

### Border Radius Scale

| Element | Radius |
|---|---|
| Full sections / large containers | `rounded-[20px]` |
| Cards | `rounded-[16px]` or `rounded-[20px]` |
| Buttons | `rounded-lg` (8px) |
| Icon badges | `rounded-[10px]` or `rounded-[12px]` |
| Inputs | `rounded-lg` |
| Small color dots | `rounded-[2px]` (square-ish) or `rounded-full` |
| Tags/pills | `rounded-lg` or `rounded-full` |

---

## 5. Dark Sections

Dark sections create contrast within pages and are used for emphasis content (features, key messaging, CTAs).

**Background:** `bg-[#1a171a]` (slightly warmer than pure black)
**Container:** Full-width with `rounded-[20px]`, same max-width as page
**Text colors:** `#f7f6f5` for headings, `rgba(247,246,245,0.5)` for body, `rgba(247,246,245,0.32)` for dormant
**Card borders:** `rgba(247,246,245,0.08)`
**Card backgrounds:** `rgba(247,246,245,0.04)`, hover `rgba(247,246,245,0.06)`

---

## 6. Navigation

### Desktop

- Fixed top, `z-50`, centered with max-width `1440px`
- Background: `#f7f6f5` with `rounded-[20px]`
- Scrolled state: adds `shadow-[0px_4px_80px_0px_rgba(0,0,0,0.08)]`
- Nav links: `text-[14px]`, active links are `opacity-100`, inactive `opacity-48 hover:opacity-100`
- Dropdown menus: `rounded-[20px]`, same shadow, `p-6 pb-12`, `AnimatePresence` with y-slide
- Logo: 25.2px height in nav, 40-50px in footer

### Announcement Bar

- `bg-[#ccfdcf]` (green pastel), `rounded-[20px]`
- Collapses on scroll with opacity/height transition
- Content: `text-[11px] sm:text-[13px]`

### Mobile

- Hamburger with animated lines (rotate to X)
- Full-width collapsible menu
- Expandable dropdown sections with chevron rotation
- Buttons stack vertically at mobile button size (`px-5 py-3`)

---

## 7. Animation & Motion

### Library

Use **Motion** (`motion/react`) for all animations. Import: `import { motion } from 'motion/react'`.

### Scroll-Triggered Entrance (AnimatedSection)

```tsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-80px' }}
transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
```

### Staggered Children (AnimatedItem)

```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-40px' }}
transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
```

### Standard Easing Curve

```
[0.25, 0.1, 0.25, 1]   // Used everywhere: cubic-bezier for UI transitions
```

### Interactive Card Hover

```tsx
whileHover={{ y: -4, boxShadow: '0px 8px 40px rgba(0,0,0,0.06)' }}
transition={{ duration: 0.25 }}
```

### Dropdown / Expand Animations

```tsx
initial={{ height: 0, opacity: 0 }}
animate={{ height: 'auto', opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
```

### Scroll-Driven Effects

- Use `useScroll({ target: ref })` with `useTransform` for parallax, progress bars, scroll-linked reveals
- Target containers must have `position: relative`
- Typical offset: `['start 0.85', 'end 0.3']`

### Smooth Scrolling

- **Lenis** smooth scrolling: `duration: 1.2`, exponential ease-out: `1.001 - Math.pow(2, -10 * t)`
- Scroll-to-top on route change (immediate)

### Mouse-Tracking Cards

For premium interactive cards on dark backgrounds:
```tsx
const handleMouseMove = (e) => {
  const rect = ref.getBoundingClientRect();
  setMousePos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
};
// Apply radial gradient at mouse position:
background: `radial-gradient(circle at ${x*100}% ${y*100}%, ${glowColor}, transparent 70%)`
```

---

## 8. Responsive Breakpoints

All styling is mobile-first. Key breakpoints:

| Prefix | Width | Usage |
|---|---|---|
| (none) | `0px+` | Mobile base |
| `sm:` | `640px+` | Large phones / small tablets |
| `md:` | `768px+` | Tablets |
| `lg:` | `1024px+` | Desktop |

### Common Responsive Patterns

- **Heading sizes:** `text-[36px] sm:text-[48px] lg:text-[64px]`
- **Padding:** `px-4 sm:px-8`, `p-6 sm:p-8 lg:p-12`
- **Layout shifts:** `flex-col lg:flex-row`
- **Grid columns:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- **Section spacing:** `py-16 sm:py-20 lg:py-[120px]`
- **Hide/show elements:** `hidden sm:block`, `sm:hidden`
- **Page top padding** (for fixed nav clearance): `pt-[140px] sm:pt-[180px] lg:pt-[200px]`

---

## 9. Iconography

### Library

Use **lucide-react** for all icons.

### Sizing

| Context | Size |
|---|---|
| Inline with text / small UI | `14px`-`16px` |
| Icon badges (cards, nav) | `18px`-`20px` |
| Feature icons (larger) | `24px` |
| Hero / decorative | `32px`, `strokeWidth: 1` |

### Color

- Default: `#231f23` on light, `#f7f6f5` on dark
- Secondary: `rgba(35,31,35,0.48)` or `rgba(35,31,35,0.32)`
- Arrows inside buttons match the button text color

---

## 10. Shadows & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Subtle elevation | `shadow-[0px_4px_40px_rgba(0,0,0,0.06)]` | Hover cards |
| Standard elevation | `shadow-[0px_4px_80px_0px_rgba(0,0,0,0.08)]` | Nav (scrolled), footer, floating panels |
| No shadow (default) | `none` | Cards at rest, flat surfaces |

---

## 11. Page Structure Conventions

### Standard Page Layout

```
<Layout>              // Fixed nav + Lenis smooth scroll + Footer
  <PageContent>       // pt-[140px] sm:pt-[180px] lg:pt-[200px] max-w-[1440px] mx-auto
    <HeroSection>     // Centered text, badge, heading, description, CTA
    <ContentSection>  // Alternating light/dark, different layouts
    <DarkSection>     // bg-[#1a171a] rounded-[20px]
    <CTASection>      // Bottom call-to-action
  </PageContent>
</Layout>
```

### Hero Pattern

1. Colored badge pill (feature accent color + icon + Fragment Mono label)
2. Large headline (`text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px]`)
3. Description paragraph (secondary text, `max-w-[580px]`, centered)
4. CTA button(s)
5. Optional: visual element (stats grid, interactive demo, illustration)

### Section Alternation

Alternate between:
- **Light sections** on `#f7f6f5` background
- **Dark sections** on `#1a171a` with `rounded-[20px]`
- **White card grids** on `#f7f6f5` background

### Bottom CTA Pattern

```
bg-[#231f23] rounded-[20px] p-8 sm:p-12 lg:p-16
Centered text, max-w-[480px]
Primary inverted button + ghost button
```

---

## 12. Interactive Patterns

### Tab / Filter Switches

Active state: `bg-[#231f23] text-[#f7f6f5]`
Inactive state: `bg-[rgba(35,31,35,0.06)] text-[#231f23] hover:bg-[rgba(35,31,35,0.1)]`
Transition: `AnimatePresence mode="wait"` with `opacity + y` animation

### Expandable / Accordion Items

- Toggle with `motion.div` height animation
- Chevron rotates 180 degrees on open
- Container: `rounded-xl`, background `#ececec`
- Padding: `p-4 sm:p-6`

### Progress Bars

```
Container: h-2 bg-[rgba(35,31,35,0.06)] rounded-full overflow-hidden
Fill: motion.div with whileInView width animation, delay stagger
Color: feature accent color
```

### Metric Cards (Dashboard-style)

```
Background: white, rounded-[16px], border
Color dot (2px radius) + Fragment Mono label
Large value (28px-36px, fontWeight 500)
Trend indicator: ArrowUpRight (green) or ArrowDownRight (red) + percentage
"vs last month" secondary label
Hover: y -4px + shadow
```

### Infinite Marquee Scroll

```css
animation: marquee 60s linear infinite;
// Duplicate content array for seamless loop
// Fade edges with gradient overlays (from-[#f7f6f5] to-transparent)
```

---

## 13. Imagery & Visual Effects

### Gradient Blobs

Use SVG ellipses with `feGaussianBlur` (stdDeviation 100) for soft decorative backgrounds. Typical gradient: coral (#ED7472) to warm gold (#F4E7C7).

### Image Overlays (Case Studies)

Gradient overlays on images:
- Top: `from-[rgba(35,31,35,0.64)]` to transparent, `h-[232px]`
- Bottom: `from-[rgba(35,31,35,0.64)]` to transparent, `h-[480px]`

### Noise Texture

Dark sections use SVG noise filters (`feTurbulence` + `feColorMatrix`) at very low opacity for tactile texture.

---

## 14. Accessibility Notes

- All interactive elements use `cursor-pointer`
- Focus states on inputs: `focus:border-[rgba(35,31,35,0.24)]`
- Link underlines removed globally (`no-underline` on `<Link>`)
- Hover transitions on all interactive elements: `transition-opacity` or `transition-colors`
- Decorative elements use `aria-hidden="true"` and `pointer-events-none`
- Scroll animations use `viewport={{ once: true }}` to avoid re-triggering
- Images use descriptive alt text or empty alt for decorative

---

## 15. Naming & Brand Voice

### Product Feature Names

| Feature | Slug | One-liner |
|---|---|---|
| Style DNA | `/products/style-dna` | Your brand, decoded by AI |
| Content Studio | `/products/content-studio` | Create anything, always on-brand |
| Brand Guard | `/products/brand-guard` | Consistency on autopilot |
| Smart Templates | `/products/smart-templates` | Start fast, stay on-brand |
| Insights | `/products/insights` | Know what's working and why |

### Copy Tone

- **Confident, not aggressive.** Statements, not exclamations.
- **Concise.** Short sentences. No filler words.
- **Specific.** "60% of production hours" not "lots of time." Concrete, not abstract.
- **Active voice.** "Socialpaint learns your brand" not "Your brand is learned by Socialpaint."
- **Second person.** "Your brand" / "Your team" - speak directly to the user.
- **No jargon.** "Brand consistency checks" not "multi-dimensional brand alignment protocols."

### CTA Language

- Primary: "Join the Waitlist" (pre-launch)
- Post-launch equivalents: "Start Free", "Get Started", "Try Socialpaint"
- Secondary: "View Pricing", "Explore [Feature]", "Read case study"
- Never: "Learn more" (too vague), "Click here", "Submit"

---

## 16. Z-Index Scale

| Layer | Z-Index | Usage |
|---|---|---|
| Navigation | `z-50` | Fixed nav, always on top |
| Dropdowns | Inherited from nav | Menu panels |
| Gradient overlays | `z-10` | Fade edges, marquee masks |
| Case study section | `z-[7]` | Stacking context |
| Products section | `z-[6]` | Stacking context |
| Testimonials | `z-[5]` | Stacking context |
| Hero | `z-10` | Above decorative elements |
| Footer wrapper | `z-[1]` | Base level |

---

## 17. File & Component Architecture

### Directory Structure

```
/src/app/
  App.tsx                    # RouterProvider entrypoint
  routes.tsx                 # createBrowserRouter config
  components/
    Navigation.tsx           # Fixed nav with dropdowns
    Footer.tsx               # Footer with links + social
    Layout.tsx               # Lenis + Outlet + CTA + Footer
    AnimatedSection.tsx      # Reusable scroll-triggered wrapper
    [SectionName].tsx        # Home page sections
  pages/
    HomePage.tsx             # Composes home sections
    ProductPage.tsx          # Routes to individual feature pages
    PricingPage.tsx
    WaitlistPage.tsx
    ClientsPage.tsx
    ResourcesPage.tsx
    IntegrationsPage.tsx
    NotFoundPage.tsx
    features/
      StyleDNAPage.tsx
      ContentStudioPage.tsx
      BrandGuardPage.tsx
      SmartTemplatesPage.tsx
      InsightsPage.tsx
/src/styles/
  index.css                  # Imports all CSS
  fonts.css                  # Google Font imports only
  tailwind.css               # Tailwind base
  theme.css                  # CSS variables + base styles
```

### Component Conventions

- All components are named exports (except `App.tsx` which has a default export)
- Pages compose section components; sections are self-contained
- Typography always uses `<p>` tags with explicit Tailwind size/leading/tracking + inline `style={{ fontWeight }}`
- Never use Tailwind `font-bold`, `text-2xl`, `leading-none` etc. for typography
- Colors are raw hex values in classes, not CSS variables (except in theme.css)
- All routing via React Router Data mode with `createBrowserRouter`
