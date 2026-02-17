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
├── index.html              # Homepage
├── blog/
│   ├── index.html          # Blog listing / index page
│   ├── template.html       # Blog post template (copy this to create new posts)
│   └── *.html              # Individual blog post files
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # Main JavaScript (theme toggle, interactions)
│   └── images/
│       └── *.webp / *.png  # All images — use descriptive filenames for SEO
├── resume.html             # Resume / CV page
├── sitemap.xml             # XML sitemap for search engines
├── robots.txt              # Robots directive
├── favicon.ico             # Favicon
├── CNAME                   # Custom domain config (if applicable)
├── CLAUDE.md               # This file — project memory
└── README.md               # Repo readme
```

> **Note:** This structure is the target layout. Update this section as files are actually created.

---

## Design System

### Color Palette

| Token               | Light Mode | Dark Mode  | Usage                   |
|----------------------|-----------|------------|-------------------------|
| `--color-bg`         | TBD       | TBD        | Page background          |
| `--color-surface`    | TBD       | TBD        | Card / section background|
| `--color-text`       | TBD       | TBD        | Primary body text        |
| `--color-text-muted` | TBD       | TBD        | Secondary / subtle text  |
| `--color-primary`    | TBD       | TBD        | Links, buttons, accents  |
| `--color-primary-hover`| TBD     | TBD        | Hover state for primary  |
| `--color-border`     | TBD       | TBD        | Borders and dividers     |

> **Action:** Fill in exact hex values once the design is finalized during site creation.

### Typography

- **Heading font:** TBD (e.g., system font stack or Google Fonts choice)
- **Body font:** TBD
- **Monospace font:** TBD (for code snippets)
- **Base font size:** TBD (e.g., 16px / 1rem)
- **Line height:** TBD (e.g., 1.6 for body)
- **Font scale:** TBD (e.g., h1: 2.5rem, h2: 2rem, h3: 1.5rem)

### Spacing & Sizing

- **Container max-width:** TBD (e.g., 1200px)
- **Content max-width:** TBD (e.g., 720px for blog post body)
- **Section padding:** TBD
- **Card gap / grid gap:** TBD
- **Border radius:** TBD

### Dark Mode / Light Mode

- Theme toggle via JavaScript; preference stored in `localStorage`.
- CSS uses custom properties (variables) scoped under `:root` (light) and `[data-theme="dark"]` or a `.dark` class.
- Variable names follow the pattern `--color-*` as listed above.

> **Action:** Update all TBD values in this section as soon as the stylesheet is created.

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
- Breakpoints: TBD (e.g., 768px, 1024px).
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

### In Progress

- [ ] Initial site build (homepage, styles, layout)

### Planned

- [ ] Homepage (`index.html`)
- [ ] Global stylesheet (`assets/css/styles.css`)
- [ ] Dark/light theme toggle
- [ ] Blog index page (`blog/index.html`)
- [ ] Blog post template (`blog/template.html`)
- [ ] First blog post
- [ ] Resume page (`resume.html`)
- [ ] AI portfolio / showcase section
- [ ] `sitemap.xml`
- [ ] `robots.txt`
- [ ] Favicon
- [ ] Google Analytics integration
- [ ] RSS feed (`feed.xml`)
- [ ] Newsletter signup form
- [ ] Additional blog posts
- [ ] Real project screenshots for AI showcase section

---

## Session Notes

> Append a dated entry after each Claude Code session documenting what was changed or added.

### 2026-02-17

- **Created `CLAUDE.md`** — Initial project memory file with all sections: project overview, file structure, design system (TBD values to be filled during site build), key conventions, SEO keywords, blog post workflow, roadmap, and session notes.
- Repository is brand new (empty). All file structure and design system values are documented as targets and will be updated as the site is built.
