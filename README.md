# Nate Burger — Personal Website & PM Blog

A static personal website and product management blog, built with HTML, CSS, and JavaScript. No frameworks, no build tools — just clean code served directly by GitHub Pages.

## Live Site

**https://ndburger.github.io/testt/**

## Project Structure

```
/
├── index.html                  # Homepage (hero, resume, AI showcase, blog preview)
├── blog/
│   ├── index.html              # Blog listing page
│   ├── template.html           # Blog post template — copy this for new posts
│   ├── build-vs-buy-ai-product-decisions.html
│   ├── wms-product-management-prioritization.html
│   └── agile-teams-organized-by-product.html
├── assets/
│   ├── css/
│   │   └── styles.css          # All styles — mobile-first, dark mode default
│   ├── js/
│   │   └── main.js             # Theme toggle, mobile nav, scroll animations
│   └── images/                 # All images (use descriptive filenames)
├── sitemap.xml                 # XML sitemap for search engines
├── robots.txt                  # Robots directive
├── CLAUDE.md                   # Project memory for Claude Code sessions
└── README.md                   # This file
```

## How to Add a New Blog Post

1. **Copy the template:**
   ```bash
   cp blog/template.html blog/your-post-slug.html
   ```

2. **Update the metadata** in the new file's `<head>`:
   - `<title>` — unique, include target keyword, under 60 characters
   - `<meta name="description">` — under 160 characters, include keyword
   - Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`)
   - Twitter Card tags
   - JSON-LD `BlogPosting` schema (headline, description, dates, URL)
   - Canonical URL
   - Replace all instances of `POST-SLUG`, `POST TITLE`, `POST DESCRIPTION`, `POST-IMAGE`, and `YYYY-MM-DD`

3. **Write your content** inside the `<div class="blog-post-content">` section.

4. **Add a card** to `blog/index.html` — copy an existing `<article class="blog-card">` block and update the title, date, excerpt, and link.

5. **Add a card** to the blog preview section in `index.html` (optional — for featuring on the homepage).

6. **Update `sitemap.xml`** — add a new `<url>` entry with the post URL and date.

## Tech Stack

- **HTML5** — semantic markup with proper heading hierarchy
- **CSS3** — custom properties, flexbox, grid, mobile-first responsive
- **JavaScript** — vanilla JS for theme toggle, mobile nav, scroll animations (IntersectionObserver)
- **Fonts** — Inter via Google Fonts
- **Hosting** — GitHub Pages (static files, no build step)

## Design

- Dark mode default with light mode toggle
- Color palette: deep navy (#0a0f1c), white text (#f1f5f9), blue accent (#3b82f6)
- Smooth scroll navigation with sticky header
- Scroll-triggered fade-in animations via IntersectionObserver
- Fully responsive — mobile-first breakpoints at 640px, 768px, 1024px, 1200px

## SEO

Every page includes:
- Unique `<title>` and `<meta name="description">`
- Open Graph and Twitter Card meta tags
- JSON-LD structured data (Person, Blog, BlogPosting)
- Canonical URLs
- `sitemap.xml` and `robots.txt`

## Local Development

No build step required. Just open `index.html` in a browser, or use any local server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

## License

All rights reserved.
