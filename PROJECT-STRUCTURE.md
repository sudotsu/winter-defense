# Project Structure

```
winter-defense/
│
├── 📄 QUICK-START.md              ← START HERE! Basic setup instructions
├── 📄 README.md                   ← Full documentation
├── 📄 DEPLOYMENT-CHECKLIST.md     ← What to do before going live
├── 📄 EMAILJS-SETUP.md           ← How to connect the contact form
├── 📄 PROJECT-STRUCTURE.md       ← This file
│
├── 📦 package.json                ← Dependencies and scripts
├── ⚙️ vite.config.js              ← Vite configuration
├── ⚙️ vercel.json                 ← Vercel deployment config
├── ⚙️ tailwind.config.js          ← Tailwind CSS config
├── ⚙️ postcss.config.js           ← PostCSS config
├── 📄 .gitignore                  ← Git ignore rules
├── 📄 index.html                  ← HTML entry point
│
├── 📁 src/                        ← Source code
│   ├── 🎨 App.jsx                 ← Main React component (THE ENTIRE SITE)
│   ├── 🎨 index.css               ← Global styles
│   └── 🎨 main.jsx                ← React entry point
│
└── 📁 public/                     ← Static assets
    └── 📁 images/                 ← Put your images here
        └── 📄 README.md           ← Image upload instructions
```

## Key Files to Edit

### 🔥 src/App.jsx
**This is the main file you'll edit!** Contains:
- All page content
- Form logic
- EmailJS integration
- Phone numbers to update
- Image URLs to replace

### 📄 DEPLOYMENT-CHECKLIST.md
Step-by-step guide for:
- Content updates needed
- EmailJS setup
- Vercel deployment
- Domain connection

### 📁 public/images/
Where you put your photos:
- hero-winter.jpg (background)
- andrew.jpg (about section)
- Any other images

## Files You Don't Need to Touch

- package.json (auto-generated dependencies)
- vite.config.js (build configuration)
- tailwind.config.js (styling system)
- postcss.config.js (CSS processing)
- index.html (HTML shell)
- src/main.jsx (React bootstrap)
- src/index.css (global styles)

## npm Commands

```bash
npm install        # Install dependencies (run once)
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## Development Workflow

1. Edit `src/App.jsx`
2. Save file
3. Browser auto-refreshes
4. See changes instantly

## Deployment Workflow

1. Update content (see DEPLOYMENT-CHECKLIST.md)
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Deploy to Vercel
5. Connect domain

## Need Help?

Each markdown file (*.md) contains specific instructions:
- **General help:** README.md
- **Getting started:** QUICK-START.md
- **Form setup:** EMAILJS-SETUP.md
- **Going live:** DEPLOYMENT-CHECKLIST.md
- **Images:** public/images/README.md

## Pro Tips

- Use VS Code as your editor (free, great for React)
- Install "ES7+ React/Redux" extension in VS Code
- Keep `npm run dev` running while you work
- Test on mobile using Chrome DevTools
- Check browser console (F12) for errors
