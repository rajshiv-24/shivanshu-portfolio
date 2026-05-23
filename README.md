# Shivanshu Rajput — Portfolio

A modern full-stack developer portfolio built with:
- **React.js + Vite** — fast build tooling
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations

## Project Structure
```
src/
  components/
    Navbar.jsx       — sticky responsive navigation
    Hero.jsx         — animated hero with floating code snippets
    About.jsx        — about + stats + education timeline
    Skills.jsx       — categorized skills + proficiency bars
    Projects.jsx     — expandable project cards with GitHub links
    Achievements.jsx — achievement cards
    Contact.jsx      — contact links + availability status
    Footer.jsx       — minimal footer
  data/
    portfolio.js     — all your data in one place (easy to update!)
  index.css          — global styles + custom utilities
  App.jsx            — root component
```

## Getting Started
```bash
npm install
npm run dev       # development server
npm run build     # production build → dist/
```

## Deployment (Free)

### Option 1: Netlify (Recommended — easiest)
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag and drop the `dist/` folder
4. Get your live URL instantly!

### Option 2: Vercel
```bash
npm i -g vercel
vercel --prod
```

### Option 3: GitHub Pages
Push to GitHub, then enable Pages → GitHub Actions in repo settings.

## Customization
All your personal data lives in `src/data/portfolio.js`.
Update the GitHub/LinkedIn/LeetCode/HackerRank URLs there before deploying.

## Contact
📧 rajputshivanshu589@gmail.com
📱 +91-8700268265
