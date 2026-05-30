# ✅ Deployment Checklist

Complete checklist untuk memastikan portfolio siap untuk go live.

## 📋 Pre-Development

- [ ] Node.js v16+ installed
- [ ] npm v8+ installed
- [ ] Git configured
- [ ] GitHub account ready
- [ ] Code editor (VS Code) installed

## 🔧 Setup Phase

```bash
cd "web porto"
```

- [ ] Run `npm install` successfully
- [ ] No installation errors or warnings
- [ ] `npm run dev` starts without errors
- [ ] Browser opens to localhost:3000

## 👨‍💻 Development Phase

- [ ] Update portfolio data in `src/data/portfolioData.ts`
- [ ] Add personal photos to `public/`
- [ ] Test all sections on mobile device
- [ ] Test all interactive elements (modals, links, etc)
- [ ] Verify all social media links correct
- [ ] Check email link works
- [ ] All animations smooth on different devices
- [ ] No console errors in DevTools

## 🧪 Testing Phase

```bash
npm run lint
npx tsc --noEmit
```

- [ ] ESLint passes (no warnings/errors)
- [ ] TypeScript compiles (no type errors)
- [ ] No unused imports
- [ ] All links are currently valid
- [ ] Links open in new tabs (external)
- [ ] No broken image references
- [ ] Responsive on all screen sizes:
  - [ ] Mobile (375px)
  - [ ] Tablet (768px)
  - [ ] Desktop (1920px)

## 🏗️ Build Phase

```bash
npm run build
npm run preview
```

- [ ] Build completes successfully
- [ ] No build errors
- [ ] `dist/` folder created
- [ ] All files in `dist/` readable
- [ ] Preview shows no errors
- [ ] All features work in preview
- [ ] Performance is acceptable

## 📊 Performance Checks

- [ ] Lighthouse score >= 90 (performance)
- [ ] Lighthouse score >= 90 (best practices)
- [ ] Load time < 3 seconds
- [ ] No unused CSS/JS
- [ ] Images optimized (< 100KB each)

## 🔒 Security Checks

- [ ] No sensitive data in code
- [ ] API keys in `.env` not in `.git`
- [ ] External links are trusted
- [ ] No mixed content (HTTPS links only)
- [ ] Content Security Policy headers set

## 📝 Git Setup

```bash
git init
git add .
git commit -m "Initial commit"
```

- [ ] Git repository initialized
- [ ] `.gitignore` properly configured
- [ ] All necessary files committed
- [ ] `node_modules/` NOT committed
- [ ] Build artifacts NOT committed

## 🔗 GitHub Setup

- [ ] GitHub account ready
- [ ] New repository created
- [ ] Remote added:
  ```bash
  git remote add origin https://github.com/USERNAME/REPO.git
  git branch -M main
  git push -u origin main
  ```
- [ ] Code pushed to main branch
- [ ] All commits are readable

## 🌐 Netlify Deployment

### Option 1: Drag & Drop (Instant)

- [ ] Build completed locally
- [ ] `dist/` folder ready
- [ ] Go to https://netlify.com
- [ ] Drag `dist/` folder
- [ ] Site goes live (check URL)
- [ ] Test live site thoroughly

### Option 2: GitHub Integration (CD/CD)

- [ ] Code on GitHub
- [ ] Logged into Netlify
- [ ] Connected GitHub account
- [ ] Selected repository
- [ ] Build settings configured:
  - [ ] Build command: `npm run build`
  - [ ] Publish directory: `dist`
- [ ] Deploy triggered automatically
- [ ] Deployment successful
- [ ] Site accessible at auto URL:
  - [ ] Check: https://[random-name].netlify.app

## 🎯 Custom Domain (Optional)

- [ ] Domain name registered
- [ ] Domain registrar access ready
- [ ] Netlify domain settings opened
- [ ] Custom domain added to Netlify
- [ ] Nameservers updated at registrar
- [ ] DNS propagation complete (check: https://dnschecker.org)
- [ ] HTTPS/SSL certificate auto-generated
- [ ] Site accessible at custom domain

## ✨ Post-Deployment Verification

- [ ] Site loads in Chrome/Firefox/Safari
- [ ] Site works on mobile browsers
- [ ] All navigation links work
- [ ] All external links work
- [ ] Modals open/close correctly
- [ ] Animations play smoothly
- [ ] No 404 errors
- [ ] No console errors
- [ ] Contact information correct
- [ ] Social media links correct
- [ ] Images load properly

## 📈 Analytics Setup (Optional)

- [ ] Google Analytics account created
- [ ] Tracking code generated
- [ ] Tracking code added to `index.html`
- [ ] Test with GA Real-time
- [ ] Verify tracking works

## 📞 Contact & Communication

- [ ] Email address verified/working
- [ ] LinkedIn profile link correct
- [ ] Instagram profile link correct
- [ ] All contact methods tested
- [ ] Response mechanism set up (if needed)

## 🚀 Launch

- [ ] All checks passed ✅
- [ ] Team review (if applicable)
- [ ] Final approval received
- [ ] Site ready for public access
- [ ] Share with stakeholders
- [ ] Monitor for issues

## 📅 Post-Launch (Weekly)

- [ ] Check site still accessible
- [ ] Monitor website analytics
- [ ] Check for broken links
- [ ] Review console for errors
- [ ] Test responsive design
- [ ] Update content if needed

## 📅 Post-Launch (Monthly)

```bash
npm outdated
npm audit
npm update
```

- [ ] Check for dependency updates
- [ ] Run security audit
- [ ] Update minor versions
- [ ] Re-run tests after updates
- [ ] Deploy if no issues

## 🎉 Done!

```
✅ Your portfolio is live!
✅ Share with the world!
✅ Monitor and maintain!
✅ Keep content updated!
```

---

## 📞 Emergency Troubleshooting

### Site is down
1. Check Netlify dashboard for errors
2. Check GitHub for failed deployments
3. Review deployment logs
4. Roll back to previous version if needed

### Links are broken
1. Check `src/data/portfolioData.ts`
2. Test links locally
3. Redeploy

### Animations not working
1. Check browser console for errors
2. Verify Framer Motion loaded
3. Clear browser cache (Ctrl+Shift+Del)
4. Test in different browser

### Images not showing
1. Check image paths in code
2. Verify images exist in `public/`
3. Check image file sizes
4. Verify image formats (JPG, PNG, WebP)

---

**Last Updated:** May 25, 2026
**Status:** Ready for Deployment ✅
