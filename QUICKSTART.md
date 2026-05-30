# 🚀 Quick Start Guide

Panduan cepat untuk memulai portfolio React Anda dalam 5 menit!

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies (1 minute)

```bash
cd "web porto"
npm install
```

**Wait for completion... ⏳**

### Step 2: Start Development (30 seconds)

```bash
npm run dev
```

**Browser will open automatically to `localhost:3000`** ✨

### Step 3: Make Your Changes (2 minutes)

Edit this file:
```
src/data/portfolioData.ts
```

**Hot reload happens automatically!** 🔄

### Step 4: Build for Production (1 minute)

```bash
npm run build
```

**Creates optimized `dist/` folder** 📦

### Step 5: Deploy to Netlify (30 seconds)

**Option A - Drag & Drop:**
1. Go to https://netlify.com
2. Drag the `dist/` folder
3. Your site is LIVE! 🎉

**Option B - Via GitHub:**
1. Push code to GitHub
2. Connect repo to Netlify
3. Auto-deploys on every push! 🚀

---

## 📁 Project Structure

```
web porto/
├── src/
│   ├── components/          ← React components
│   ├── data/                ← Your portfolio data
│   ├── styles/              ← Global styles
│   ├── App.tsx              ← Main component
│   └── main.tsx             ← Entry point
├── public/                  ← Static assets
├── index.html               ← HTML entry
├── package.json             ← Dependencies
└── README.md                ← Full docs
```

---

## 📝 Update Your Content

### Update Portfolio Data

Edit: `src/data/portfolioData.ts`

```typescript
export const PORTFOLIO_DATA = {
  about: {
    title: "Your Title",
    subtitle: "Your Subtitle",
    description: "Your description..."
  },
  skills: { /* ... */ },
  experience: [ /* ... */ ],
  projects: [ /* ... */ ],
  // ... more sections
};
```

**Changes appear instantly in browser!** ✨

---

## 🛠️ NPM Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
```

---

## 🌐 Deployment

### Fastest Way (Netlify Drag & Drop)

1. Run: `npm run build`
2. Go to: https://netlify.com
3. Drag the `dist/` folder
4. **DONE!** Your site is live 🎉

### Best Way (GitHub + Netlify Auto-Deploy)

```bash
# 1. Push to GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main

# 2. Connect to Netlify
# - Go to netlify.com
# - Click "New site from Git"
# - Select your GitHub repo
# - Done! Auto-deploys on every push 🚀
```

---

## 📁 File Guide

Important files to know:

| File | Purpose |
|------|---------|
| `src/data/portfolioData.ts` | Your portfolio content |
| `src/App.tsx` | Main component / page layout |
| `package.json` | Dependencies & scripts |
| `tailwind.config.js` | Styling configuration |
| `vite.config.ts` | Build configuration |
| `index.html` | HTML entry point |

---

## ✅ Verification Checklist

After setup, verify:

- [ ] `npm install` completed without errors
- [ ] `npm run dev` opens browser to localhost:3000
- [ ] All sections visible (Hero, About, Projects, etc)
- [ ] Interactive elements work (click modals, links)
- [ ] No console errors (F12 → Console)
- [ ] Responsive on mobile (F12 → Device Toggle)

---

## 🚨 Common Issues

### Port 3000 in use
```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

### npm install fails
```bash
rm -rf node_modules package-lock.json
npm install
```

### Module not found error
```bash
npm install
```

---

## 📚 Full Documentation

- **README.md** - Project overview & features
- **DEVELOPMENT.md** - Development best practices
- **DEPLOYMENT.md** - All hosting options
- **WORKFLOW.md** - Complete workflow guide
- **CHECKLIST.md** - Pre-deployment checklist

---

## 🎯 Next Steps

1. ✅ Run `npm install && npm run dev`
2. ✅ Edit `src/data/portfolioData.ts`
3. ✅ Add your photos to `public/`
4. ✅ Run `npm run build`
5. ✅ Deploy to Netlify
6. ✅ Share your portfolio! 🌟

---

## 💡 Pro Tips

```bash
# Update dependencies periodically
npm outdated         # Check for updates
npm update           # Update minor versions
npm audit            # Check for security issues
npm audit fix        # Fix vulnerabilities

# Check code quality
npm run lint         # Show code issues
npm run lint:fix     # Auto-fix issues

# Preview production build
npm run build && npm run preview

# Monitor bundle size
npm run build        # Check dist/ size
```

---

## 🎨 Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety  
- **Vite** - Lightning fast build
- **Tailwind CSS** - Modern styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

---

## 📞 Getting Help

- Check documentation files (README, DEVELOPMENT, etc)
- Review comments in source code
- Check browser console for errors (F12)
- Search Google with error message

---

## 🎉 You're Ready!

Your React portfolio is ready to go live!

```
npm run dev          ← Start building now
npm run build        ← Deploy when ready
```

**Good luck! 🚀**

---

**Quick Command Reference:**

```bash
npm install          # First time setup
npm run dev          # Development mode
npm run build        # Production build
npm run preview      # Test build locally
npm run lint         # Check code quality
npm run deploy       # Build & prepare for deploy
```

**Share your portfolio:**
- Twitter/X: #ReactPortfolio #WebDeveloper
- LinkedIn: Share your achievement
- GitHub: Showcase your code

---

📖 **Full docs available in:**
- README.md  
- DEVELOPMENT.md
- DEPLOYMENT.md
- WORKFLOW.md

🚀 **Let's go live!**
