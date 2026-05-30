# Dewi's Portfolio - Complete Setup & Workflow Guide 🚀

Panduan lengkap untuk mengadopsi React sebagai tech stack portfolio dan alur kerja hingga hosting.

## 📑 Daftar Isi

1. [Instalasi Awal](#-instalasi-awal)
2. [Struktur Proyek](#-struktur-proyek)
3. [Development Workflow](#-development-workflow)
4. [Deployment & Hosting](#-deployment--hosting)
5. [Post-Launch Maintenance](#-post-launch-maintenance)

---

## ✨ Instalasi Awal

### Step 1: Persiapan Environment

**Windows:**
```bash
# 1. Download Node.js dari https://nodejs.org/
# 2. Install LTS version (Long Term Support)
# 3. Verify installation
node --version    # Output: v18.x.x or later
npm --version     # Output: 8.x.x or later

# 4. Install Git dari https://git-scm.com/
git --version     # Output: git version 2.x.x or later
```

**macOS/Linux:**
```bash
# Via Homebrew
brew install node@18
brew install git

# Verify
node --version
npm --version
```

### Step 2: Persiapan Folder Project

```bash
# 1. Navigate to folder project
cd "web porto"

# 2. Initialize Git (jika belum)
git init
git config user.name "Your Name"
git config user.email "your@email.com"

# 3. Install dependencies
npm install

# 4. Verify installation
npm run dev
```

**Output yang diharapkan:**
```
  ➜  Local:   http://localhost:3000/
  ➜  press h + enter to show help
```

---

## 📁 Struktur Proyek

### Directory Layout

```
web porto/
├── 📁 public/                 # Static assets (images, etc)
├── 📁 src/
│   ├── 📁 components/         # React components
│   │   ├── GlobalStyles.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── OrganizationsSection.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── FullscreenModal.tsx
│   │   └── ScrollProgress.tsx
│   ├── 📁 data/               # Data assets
│   │   └── portfolioData.ts
│   ├── 📁 styles/             # Global styles
│   │   └── main.css
│   ├── App.tsx                # Main app component
│   └── main.tsx               # React entry point
├── 📄 index.html              # HTML entry point
├── 📄 package.json            # Dependencies & scripts
├── 📄 tsconfig.json           # TypeScript config
├── 📄 vite.config.ts          # Vite config
├── 📄 tailwind.config.js      # Tailwind config
├── 📄 postcss.config.js       # PostCSS config
├── 📄 .eslintrc.json          # ESLint config
├── 📄 .gitignore              # Git ignore rules
├── 📄 README.md               # Project documentation
├── 📄 DEVELOPMENT.md          # Development guide
└── 📄 DEPLOYMENT.md           # Deployment guide
```

---

## 💻 Development Workflow

### Phase 1: Local Development

**Command checklist:**

```bash
# 1. Start development server
npm run dev

# 2. Open browser
# Otomatis membuka http://localhost:3000
```

**Development Loop:**
1. Edit file di `src/`
2. Vite auto-refreshes browser (Hot Reload)
3. TypeScript shows errors in console
4. Tailwind CSS classes compiled in real-time

### Phase 2: Making Changes

**Update portfolio content:**

File: `src/data/portfolioData.ts`

```typescript
export const PORTFOLIO_DATA = {
  about: { /* ... */ },
  skills: { /* ... */ },
  education: [ /* ... */ ],
  experience: [ /* ... */ ],
  projects: [ /* ... */ ],
  achievements: [ /* ... */ ],
  organizations: [ /* ... */ ]
};
```

**Add new component:**

1. Create file: `src/components/NewSection.tsx`
2. Export component:
```typescript
export const NewSection: React.FC = () => {
  return <section>New section content</section>;
};
```
3. Import in `src/App.tsx`:
```typescript
import { NewSection } from '@components/NewSection';

export default function App() {
  return (
    <main>
      <NewSection />
    </main>
  );
}
```

### Phase 3: Testing Before Build

```bash
# 1. Check TypeScript errors
npx tsc --noEmit

# 2. Run linting
npm run lint

# 3. Test all features
# - Navigate to all sections
# - Click all interactive elements
# - Test on mobile/tablet/desktop
# - Check all external links

# 4. Test responsive design
# Press F12 → Responsive Design Mode (Ctrl+Shift+M)
```

### Phase 4: Production Build

```bash
# 1. Build for production
npm run build

# Output shows:
# ✓ 1234 modules transformed
# built in 45.23s
# dist/
#   ├── index.html
#   ├── assets/
#   │   ├── vendor.xxxxx.js
#   │   ├── main.xxxxx.js
#   │   └── style.xxxxx.css

# 2. Preview production build locally
npm run preview

# 3. Open http://localhost:4173
# Test all features again
```

---

## 🌐 Deployment & Hosting

### Quick Start: Netlify (Recommended)

**Via Drag & Drop (Fastest):**

```bash
# 1. Build locally
npm run build

# 2. Go to https://netlify.com

# 3. Drag and drop dist/ folder to Netlify

# 4. Your site is LIVE! 🎉
```

**Via GitHub (Recommended for version control):**

```bash
# 1. Initialize Git repository
git add .
git commit -m "Initial commit: React portfolio setup"

# 2. Create GitHub repository
# Go to https://github.com/new
# Create repo: "dewi-portfolio"
# (Do NOT initialize with README, .gitignore, license)

# 3. Push to GitHub
git remote add origin https://github.com/yourusername/dewi-portfolio.git
git branch -M main
git push -u origin main

# 4. Connect to Netlify
# - Go to https://netlify.com/signup
# - Click "New site from Git"
# - Select GitHub
# - Choose your repository
# - Build settings (auto-filled):
#   Build command: npm run build
#   Publish directory: dist
# - Click "Deploy site"

# 5. Wait for deployment (2-3 minutes)
# - Your site is available at: https://random-name.netlify.app
```

**Custom Domain:**

```
1. Go to Netlify dashboard
2. Domain settings → Add custom domain
3. Enter your domain (e.g., dewi-portfolio.com)
4. Update nameservers at domain registrar
5. Wait 24-48 hours for DNS propagation
6. SSL certificate auto-generated ✅
```

### Alternative Platforms

| Platform | Pros | Cons | Setup Time |
|----------|------|------|-----------|
| **Netlify** | Easy CI/CD, free tier, good support | Limited to static sites | 5 min |
| **Vercel** | Fast, optimized for React | Limited free tier | 5 min |
| **GitHub Pages** | Completely free | No custom domain (easy) | 10 min |
| **AWS S3** | Scalable, cheap | Requires AWS knowledge | 30 min |
| **Heroku (Paid)** | Easy deployment, good for backend | No free tier anymore | 15 min |

👉 **Untuk pemula: Gunakan Netlify**

---

## ✅ Post-Launch Maintenance

### Weekly Checklist

```bash
# 1. Check for updates
npm outdated

# 2. Update packages (jika ada minor updates)
npm update

# 3. Run linting
npm run lint

# 4. Test production build
npm run build
npm run preview

# 5. Manual testing
# - Check all links work
# - Test on mobile
# - Verify animations smooth
```

### Monthly Tasks

```bash
# 1. Check security vulnerabilities
npm audit

# 2. Fix vulnerabilities
npm audit fix

# 3. Update major dependencies (carefully)
npm install react@latest react-dom@latest

# 4. Test thoroughly after updates
npm run build
npm run preview
```

### Analytics & Monitoring

1. **Add Google Analytics:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create property for your domain
   - Copy tracking code
   - Add to `index.html`

2. **Monitor Performance:**
   - [PageSpeed Insights](https://pagespeed.web.dev)
   - [GTmetrix](https://gtmetrix.com)
   - [WebPageTest](https://webpagetest.org)

3. **Monitor Uptime:**
   - [UptimeRobot](https://uptimerobot.com) (free)
   - Get alerts if site goes down

---

## 🔄 Complete Development Cycle

```
1. LOCAL DEVELOPMENT
   npm run dev
   ↓
2. MAKE CHANGES
   Edit src/ files
   ↓
3. TEST LOCALLY
   npm run lint
   npx tsc --noEmit
   ↓
4. BUILD
   npm run build
   ↓
5. PREVIEW LOCALLY
   npm run preview
   ↓
6. COMMIT & PUSH
   git add .
   git commit -m "message"
   git push origin main
   ↓
7. AUTO-DEPLOY
   Netlify/Vercel deploys automatically
   ↓
8. VERIFY LIVE SITE
   Test on live domain
   ↓
9. MONITOR & MAINTAIN
   Weekly checks & updates
```

---

## 📱 Mobile-First Development

### Test Sizes

```
Mobile:   375px (iPhone SE)
          414px (iPhone 12)
          
Tablet:   768px (iPad)
          1024px (iPad Pro)
          
Desktop:  1920px (Full HD)
          2560px (4K)
```

### DevTools Testing

```
1. F12 to open DevTools
2. Ctrl+Shift+M (open responsive design mode)
3. Select device or custom size
4. Test all interactions
5. Check touch targets (min 48px)
```

---

## 🎨 Tech Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Language** | TypeScript | Type safety |
| **Framework** | React 18 | UI components |
| **Build** | Vite | Fast bundling |
| **Styling** | Tailwind CSS | Utility-first CSS |
| **Animations** | Framer Motion | Smooth animations |
| **Icons** | Lucide React | 300+ icons |
| **Linting** | ESLint | Code quality |
| **Hosting** | Netlify/Vercel | Deployment |

---

## 📞 Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run lint             # Check code quality
npm run build            # Build for production
npm run preview          # Preview production build
npm run serve            # Build + preview combined

# Git
git status               # Check changes
git add .                # Stage all changes
git commit -m "msg"      # Commit changes
git push origin main     # Push to GitHub
git log                  # View commits

# npm
npm install              # Install dependencies
npm update              # Update packages
npm outdated            # Check for updates
npm audit               # Security check
```

---

## 🚨 Troubleshooting

### Problem: npm install fails

```bash
# Solution 1: Clear cache
npm cache clean --force
npm install

# Solution 2: Delete lock file
rm package-lock.json
npm install
```

### Problem: Port 3000 already in use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Problem: Module not found error

```bash
# Solution: Reinstall dependencies
rm -rf node_modules
npm install
```

---

## 📚 Useful Resources

- [React Docs](https://react.dev)
- [TypeScript Guide](https://typescriptlang.org)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://framer.com/motion)
- [Vite Guide](https://vitejs.dev)
- [Netlify Docs](https://docs.netlify.com)

---

## 🎯 Next Steps

1. ✅ Run `npm install` - Install dependencies
2. ✅ Run `npm run dev` - Start development
3. ✅ Edit `src/data/portfolioData.ts` - Update content
4. ✅ Run `npm run build` - Build for production
5. ✅ Deploy to Netlify - Go live!

---

**Created on:** May 25, 2026
**Portfolio:** Dewi Puspita Sari
**Tech Stack:** React + TypeScript + Tailwind CSS + Vite
**Status:** Production Ready ✨

---

📖 **Panduan Lengkap:**
- [README.md](./README.md) - Project overview
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Development details
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
