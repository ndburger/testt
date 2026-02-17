# CLAUDE.md — Project Memory for Nate's Personal Website & PM Blog

> This file is the persistent context document for Claude Code sessions. Reference it at the start of every session.

---

## Project Overview

- **What:** Nate's personal website and product management blog, hosted on GitHub Pages.
- **Primary goals:** PM blog, resume showcase, SEO optimization, AI portfolio.
- **Stack:** Static HTML/CSS/JS — no build tools, no frameworks. Served directly by GitHub Pages.
- **Repo:** `ndburger/testt`

---

## File Structure

```
/
├── index.html                              # Homepage (hero, resume, AI showcase, blog preview)
├── blog/
│   ├── index.html                          # Blog listing page
│   ├── template.html                       # Blog post template (copy for new posts)
│   ├── ai-powered-prds.html                # Post: AI-powered PRD writing
│   ├── extensible-product-architectures.html # Post: Extensible WMS architectures
│   └── brad-to-prd-framework.html          # Post: BRAD-to-PRD framework
├── assets/
│   ├── css/
│   │   └── styles.css                      # All styles — mobile-first, dark mode default
│   ├── js/
│   │   └── main.js                         # Theme toggle, mobile nav, scroll animations
│   └── images/                             # All images — use descriptive filenames for SEO
├── sitemap.xml                             # XML sitemap for search engines
├── robots.txt                              # Robots directive
├── CLAUDE.md                               # This file — project memory
└── README.md                               # Repo readme
```

---

## Design System

### Color Palette

| Token                    | Dark Mode (default)            | Light Mode                     | Usage                    |
|--------------------------|-------------------------------|-------------------------------|--------------------------|
| `--color-bg`             | `#0a0f1c` (deep navy)         | `#ffffff`                      | Page background          |
| `--color-surface`        | `#111827`                      | `#f8fafc`                      | Card / section background|
| `--color-surface-raised` | `#1a2332`                      | `#f1f5f9`                      | Elevated surface         |
| `--color-text`           | `#f1f5f9`                      | `#0f172a`                      | Primary body text        |
| `--color-text-muted`     | `#94a3b8`                      | `#475569`                      | Secondary / subtle text  |
| `--color-primary`        | `#3b82f6` (blue)               | `#2563eb`                      | Links, buttons, accents  |
| `--color-primary-hover`  | `#60a5fa`                      | `#1d4ed8`                      | Hover state for primary  |
| `--color-primary-subtle` | `rgba(59, 130, 246, 0.12)`     | `rgba(37, 99, 235, 0.08)`     | Subtle primary background|
| `--color-border`         | `#1e293b`                      | `#e2e8f0`                      | Borders and dividers     |
| `--color-accent`         | `#a78bfa` (purple)             | `#7c3aed`                      | Gradient accent          |
| `--color-success`        | `#34d399`                      | `#059669`                      | Status indicators        |
| `--color-code-bg`        | `#1e293b`                      | `#f1f5f9`                      | Code block background    |

### Typography

- **Font stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`
- **Monospace:** `'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace`
- **Base font size:** 16px (1rem)
- **Line height:** 1.6 (body), 1.2 (headings), 1.8 (loose / blog content)
- **Font scale:** sm: 0.875rem, base: 1rem, lg: 1.125rem, xl: 1.25rem, 2xl: 1.5rem, 3xl: 2rem, 4xl: 2.5rem, 5xl: 3.25rem
- **Font weights used:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extra-bold)

### Spacing & Sizing

- **Container max-width:** 1200px
- **Content max-width:** 720px (blog post body)
- **Header height:** 72px
- **Spacing scale:** xs: 0.25rem, sm: 0.5rem, md: 1rem, lg: 1.5rem, xl: 2rem, 2xl: 3rem, 3xl: 4rem, 4xl: 6rem
- **Border radius:** sm: 6px, md: 10px, lg: 16px
- **Transitions:** fast: 150ms, base: 250ms, slow: 400ms

### Dark Mode / Light Mode

- **Default theme:** Dark mode
- Theme toggle via JavaScript; preference stored in `localStorage` under key `theme`.
- CSS uses custom properties scoped under `:root` (dark default) and `[data-theme="light"]` override.
- Variable names follow the pattern `--color-*` as listed above.
- Responsive breakpoints: 640px, 768px, 1024px, 1200px

---

## Key Conventions

### SEO Requirements (every page)

Every page **must** include:

1. `<title>` — unique, keyword-rich, under 60 characters
2. `<meta name="description">` — unique, under 160 characters
3. Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
4. Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
5. JSON-LD structured data appropriate to the page type:
   - Homepage: `Person` or `WebSite`
   - Blog index: `Blog`
   - Blog post: `BlogPosting`
   - Resume: `Person` with `hasOccupation`
6. Canonical URL: `<link rel="canonical" href="...">`

### Blog Posts

- All blog posts live in `/blog/` as individual HTML files.
- Filenames are URL-friendly slugs: `my-post-title.html`.
- Each post must target at least one primary keyword and one secondary keyword.

### Images

- All images go in `/assets/images/`.
- Use descriptive, SEO-friendly filenames (e.g., `warehouse-management-system-dashboard.webp`).
- Always include `alt` text.
- Prefer `.webp` format for performance; include fallbacks if needed.

### CSS

- Mobile-first responsive approach.
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1200px (xl).
- No external CSS dependencies unless absolutely necessary.

### JavaScript

- Minimal — only for theme toggle, mobile nav, and light interactions.
- No frameworks or libraries unless absolutely necessary.

---

## Content Strategy / SEO Keywords

### Primary Keywords

- product management
- AI product management
- warehouse management systems
- workflow automation
- WMS product manager

### Secondary Keywords

- PRD writing
- business requirements analysis
- AI-assisted development
- extensible architecture
- Jira Product Discovery

### Keyword Usage Rules

- Every new page or blog post should target **at least one primary** and **one secondary** keyword.
- Use the primary keyword in the `<title>`, `<h1>`, and meta description.
- Use secondary keywords naturally in subheadings and body content.
- Include keywords in image alt text where relevant.

---

## Blog Post Workflow

### Creating a New Blog Post

1. **Copy the template:** Duplicate `blog/template.html` and rename it with a URL-friendly slug (e.g., `blog/ai-product-management-guide.html`).
2. **Update metadata:**
   - Set a unique `<title>` (include target keyword, under 60 chars).
   - Write a `<meta name="description">` (include target keyword, under 160 chars).
   - Fill in all Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`).
   - Fill in all Twitter Card tags.
   - Update the JSON-LD `BlogPosting` schema with title, description, datePublished, author, and image.
   - Set the canonical URL.
3. **Write the content:**
   - Use the target primary keyword in the `<h1>` and intro paragraph.
   - Use secondary keywords in subheadings and body naturally.
   - Add images to `/assets/images/` with descriptive filenames and alt text.
4. **Add to blog index:** Add a new card entry to `blog/index.html` with the post title, date, excerpt, and link.
5. **Update sitemap:** Add a `<url>` entry to `sitemap.xml` with the new post URL and date.
6. **Test locally:** Open in browser, verify responsive layout, check all links, validate meta tags.

### New Blog Post Checklist

- [ ] File created from template in `/blog/`
- [ ] `<title>` set (unique, keyword-rich, < 60 chars)
- [ ] `<meta name="description">` set (< 160 chars)
- [ ] Open Graph tags filled in
- [ ] Twitter Card tags filled in
- [ ] JSON-LD `BlogPosting` schema complete
- [ ] Canonical URL set
- [ ] Content written with target keywords
- [ ] Images added to `/assets/images/` with alt text
- [ ] Card added to `blog/index.html`
- [ ] Entry added to `sitemap.xml`
- [ ] Tested on mobile and desktop

---

## Current Status / Roadmap

### Completed

- [x] Repository created
- [x] CLAUDE.md project memory established
- [x] Homepage (`index.html`) — hero, resume, AI showcase, blog preview sections
- [x] Global stylesheet (`assets/css/styles.css`) — mobile-first, dark mode default
- [x] JavaScript (`assets/js/main.js`) — theme toggle, mobile nav, scroll animations, back-to-top
- [x] Dark/light theme toggle with localStorage persistence
- [x] Blog index page (`blog/index.html`)
- [x] Blog post template (`blog/template.html`)
- [x] Blog post: "How I Use AI to Write Better PRDs in Half the Time"
- [x] Blog post: "Building Extensible Product Architectures for WMS"
- [x] Blog post: "From BRAD to PRD: My Framework for Turning Business Requirements into Shipping Products"
- [x] AI Showcase section with 4 project cards
- [x] Resume / Experience section with skills and timeline
- [x] `sitemap.xml`
- [x] `robots.txt`
- [x] `README.md` with project docs and blog post instructions
- [x] Full SEO: meta tags, Open Graph, Twitter Cards, JSON-LD on every page

### Planned

- [ ] Favicon
- [ ] Professional headshot (replace placeholder)
- [ ] Real project screenshots for AI showcase cards
- [ ] Resume PDF download (replace placeholder link)
- [ ] Google Analytics integration
- [ ] RSS feed (`feed.xml`)
- [ ] Newsletter signup form
- [ ] Additional blog posts
- [ ] Custom domain + CNAME file
- [ ] OG image (`assets/images/og-image.png`)

---

## Session Notes

> Append a dated entry after each Claude Code session documenting what was changed or added.

### 2026-02-17 — Session 1

- **Created `CLAUDE.md`** — Initial project memory file with all sections.

### 2026-02-17 — Session 2 (Full Site Build)

- **Built complete site from scratch** — all static HTML/CSS/JS, no frameworks.
- **`index.html`** — Homepage with hero section (headline, description, CTA), resume/experience section (timeline + skill tags), AI showcase (4 project cards), blog preview (3 post cards), sticky header, footer.
- **`assets/css/styles.css`** — Full stylesheet with CSS custom properties, dark mode default, light mode override, mobile-first responsive design (breakpoints: 640/768/1024/1200px), scroll animations, blog post layout, print styles.
- **`assets/js/main.js`** — Theme toggle (localStorage), mobile nav hamburger, IntersectionObserver scroll animations, back-to-top button, active nav link highlighting.
- **`blog/index.html`** — Blog listing page with 3 post cards.
- **`blog/template.html`** — Blog post template with clearly marked placeholder sections for metadata and content.
- **`blog/ai-powered-prds.html`** — Full blog post with substantive content about AI-powered PRD writing workflows.
- **`blog/extensible-product-architectures.html`** — Full blog post about extensible architecture patterns for WMS.
- **`blog/brad-to-prd-framework.html`** — Full blog post about the BRAD-to-PRD translation framework.
- **`sitemap.xml`** — XML sitemap with all 5 pages.
- **`robots.txt`** — Allow all, sitemap reference.
- **`README.md`** — Project documentation with structure, blog post instructions, tech stack.
- **Updated `CLAUDE.md`** — Filled in all design system values (colors, typography, spacing), updated file structure, marked roadmap items complete.
