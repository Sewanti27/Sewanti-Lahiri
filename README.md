<div align="center">
  
	# Sewanti Lahiri – Portfolio
  
	A modern, fast, accessible, single‑page developer & product portfolio built with **React + Vite**.
  
	![Hero Preview](public/Portfolio%20image.png)
  
</div>

## ✨ Features

- Responsive single‑page layout with smooth section navigation
- Modular sections: Hero, Services, Experience Timeline, Projects, Testimonials, Blog Posts, Discuss (Contact), Footer
- Custom carousels (services, projects, blog posts) with keyboard accessibility & pagination
- Project filtering & detail panel
- Inquiry form integrated with Google Forms backend (no server required)
- Accessible focus states, semantic landmarks, ARIA labels
- Inline SVG social icons (GitHub / X / LinkedIn) with glass hover effects
- Lightweight styling using plain CSS (no heavy CSS frameworks)
- Optimized asset loading via Vite

## 🗂 Section Overview

| Section | Purpose |
|---------|---------|
| Header | Sticky navigation + resume link |
| Hero | Intro, primary CTAs (Resume / Hire Me) |
| Services | Highlight of core capabilities (carousel) |
| Experience | Timeline of roles / milestones |
| Hire Me | (Optional branding / value prop panel) |
| Projects | Paginated showcase (2 per page) with selectable details |
| Testimonials | Social proof glass cards |
| Discuss | Inquiry form posting to Google Forms |
| Blog Posts | 12 curated posts across 4 pages |
| Footer | Navigation, newsletter form, social links |

## 🚀 Getting Started

### Prerequisites
Node.js 18+ (recommended) 
NPM (bundled) or Yarn / PNPM if you prefer.

### Install
```
npm install
```

### Development
```
npm run dev
```
Visit: http://localhost:5173 (default Vite dev port)

### Production Build
```
npm run build
npm run preview   # (optional) serve production build locally
```

## 🛠 Tech Stack

- React 18
- Vite
- ESLint (flat config)
- Plain CSS (scoped by section file) – no CSS-in-JS

## 📬 Inquiry Form (Google Forms Integration)

The Discuss section posts to a hidden Google Form endpoint using a `fetch` POST with `no-cors`. Success feedback is optimistic (since `no-cors` suppresses response visibility). To adapt:
1. Create your own Google Form with matching fields.
2. Inspect the form page source and copy each `entry.<id>` for the inputs.
3. Update the mapping inside `Discuss.jsx`.

## ♿ Accessibility Notes

- All interactive elements have discernible labels.
- Keyboard navigation supported for carousels via arrow buttons & focusable controls.
- Color contrasts tuned for dark backgrounds.

## 📂 Notable File Map

```
src/
	main.jsx            # App bootstrap
	App.jsx             # Section composition
	sections/           # All major page sections
	styles/             # Per-section CSS files
public/               # Static assets (images, svg, etc.)
```

## 🔄 Future Improvements (Ideas)

- Add dark/light theme toggle
- Motion reductions (prefers-reduced-motion)
- Convert inline carousels to reusable hook
- Deploy via GitHub Pages / Netlify / Vercel automation
- Integrate analytics (privacy-friendly)

## 📦 Deploying to GitHub Pages (Optional)
Quick path (after repo is pushed):
```
npm run build
```
Upload `dist/` to a static host OR configure an action (e.g. `peaceiris/actions-gh-pages`).

## 🧾 License
You may license this portfolio as you wish for personal use. If open sourcing, consider MIT:

```
MIT License – 2025 Sewanti Lahiri
```

## 🙌 Acknowledgements

- Vite team for the lightning dev environment
- React ecosystem maintainers

---
Made with focus, iteration, and accessibility in mind.
