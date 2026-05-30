# Deployment & Hosting Guide

Complete guide for deploying your portfolio to production hosting platforms.

## 📋 Pre-Deployment Checklist

```bash
# 1. Run linting
npm run lint

# 2. Check for TypeScript errors
npx tsc --noEmit

# 3. Build for production
npm run build

# 4. Preview build locally
npm run preview

# 5. Test all links and interactions
# - Visit http://localhost:5000
# - Check all navigation links
# - Test modal interactions
# - Verify responsive design
```

## 🚀 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

#### Setup via GitHub

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/dewi-portfolio.git
git push -u origin main
```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

#### Setup via Drag & Drop

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Your site goes live instantly!

#### Custom Domain (Netlify)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS setup instructions
5. Wait for SSL certificate (auto-generated)

---

### Option 2: Vercel

#### Via GitHub

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Framework: React
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click "Deploy"

#### Via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

#### Custom Domain (Vercel)

1. Settings → Domains
2. Add your domain
3. Follow nameserver instructions
4. Done!

---

### Option 3: GitHub Pages (Free, No Custom Domain)

1. **Update vite.config.ts**
```typescript
export default defineConfig({
  base: '/dewi-portfolio/', // Your repo name
  // ... other config
})
```

2. **Create GitHub Actions workflow** (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - run: npm install
      - run: npm run build
      
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. **Enable GitHub Pages**
   - Repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages

---

### Option 4: AWS S3 + CloudFront

#### Step 1: Create S3 Bucket

```bash
# Install AWS CLI
pip install awscli-v2

# Configure credentials
aws configure

# Create bucket
aws s3 mb s3://dewi-portfolio-2026 --region us-east-1
```

#### Step 2: Configure Bucket for Web Hosting

```bash
# Upload build files
aws s3 sync dist/ s3://dewi-portfolio-2026/

# Make files public
aws s3api put-bucket-acl --bucket dewi-portfolio-2026 --acl public-read

# Set bucket policy (public-read-policy.json)
cat > public-read-policy.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::dewi-portfolio-2026/*"
    }
  ]
}
EOF

aws s3api put-bucket-policy --bucket dewi-portfolio-2026 --policy file://public-read-policy.json
```

#### Step 3: Enable Static Website Hosting

In AWS Console:
1. S3 → Buckets → Your bucket
2. Properties tab
3. Static website hosting → Edit
4. Enable
5. Index document: `index.html`
6. Error document: `index.html`
7. Save

#### Step 4: CloudFront Distribution (Optional)

```bash
# AWS Console:
# 1. CloudFront → Create distribution
# 2. Origin domain: Your S3 bucket endpoint
# 3. Origin access identity: Create
# 4. Viewer protocol: Redirect HTTP to HTTPS
# 5. Create distribution
```

---

### Option 5: Heroku (Free tier no longer available)

For alternative free hosting, use **Render** or **Railway**:

#### Render
1. Go to [render.com](https://render.com)
2. New → Static Site
3. Connect GitHub
4. Build: `npm run build`
5. Publish: `dist`
6. Deploy!

#### Railway
1. Go to [railway.app](https://railway.app)
2. New project → GitHub repo
3. Add `package.json`
4. Deploy!

---

### Option 6: Custom VPS (DigitalOcean, Linode)

#### Setup Ubuntu Server

```bash
# SSH into server
ssh root@your-server-ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install Nginx
apt install -y nginx

# Clone repository
cd /var/www
git clone your-repo-url
cd repo-name

# Install dependencies
npm install

# Build
npm run build

# Setup Nginx
sudo nano /etc/nginx/sites-available/default
```

#### Nginx Configuration

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    server_name dewi-portfolio.com www.dewi-portfolio.com;
    
    location / {
        root /var/www/repo-name/dist;
        index index.html;
        try_files $uri /index.html;
    }
}
```

```bash
# Setup SSL with Let's Encrypt
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com

# Restart Nginx
systemctl restart nginx
```

---

## 🔄 Continuous Deployment (CD)

### Auto-Deploy on Git Push

#### Netlify

1. Settings → Build & deploy
2. Deploy contexts: Always use latest
3. Auto-publish on main branch push

#### Vercel

1. Automatic on every push
2. Preview deployments for pull requests
3. Revert to previous deployment anytime

#### GitHub Actions Example

```yaml
# Auto-deploy to Netlify on push
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install && npm run build
      - uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './dist'
          production-branch: main
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 📊 Post-Deployment Verification

```bash
# Check site is accessible
curl -I https://your-domain.com

# Test performance
curl -w "@curl-format.txt" -o /dev/null -s https://your-domain.com

# Check SSL certificate
openssl s_client -connect your-domain.com:443

# Check all routes work
# - Home (/)
# - About (#about)
# - Projects (#projects)
# - All links

# Test responsive design
# - Mobile (375px)
# - Tablet (768px)
# - Desktop (1920px)
```

---

## 🔐 Security Best Practices

1. **Enable HTTPS**
   - All modern hosting provides free SSL/TLS

2. **Security Headers**
```nginx
# In Nginx config
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

3. **Environment Variables**
   - Keep sensitive data in `.env` file
   - Add to `.gitignore`
   - Set in deployment platform

---

## 🎯 Performance Optimization

### Before Deploying

```bash
# Check bundle size
npm run build
ls -lh dist/

# Analyze bundle
npm install --save-dev rollup-plugin-visualizer
npm run build
```

### Optimize Images

```bash
# Compress images
npm install -g imagemin-cli
imagemin public/** --out-dir=public

# Convert to WebP
npx cwebp image.jpg -o image.webp
```

### Monitor Performance

- [PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://webpagetest.org)

---

## 📞 Support & Troubleshooting

### Common Issues

**404 errors after build:**
- Ensure `index.html` is in root of publish directory
- Check SPA routing configuration

**CORS errors:**
- Hosting should serve from same origin
- Add CORS headers if needed

**Build fails:**
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📈 Monitoring & Analytics

Add Google Analytics:

```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🎉 Summary

**Easiest:** Netlify or Vercel (recommended for beginners)

**Free tier:** GitHub Pages (without custom domain)

**Advanced:** AWS + CloudFront or VPS

**Recommended hosting for this project:** **Netlify** ⭐

---

For development guidance, see [DEVELOPMENT.md](./DEVELOPMENT.md)
