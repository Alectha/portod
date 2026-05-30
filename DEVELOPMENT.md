# Development Workflow Guide

Complete guide for developing and maintaining the Dewi's Portfolio application.

## 🔄 Development Workflow

### 1. Initial Setup

```bash
# Install Node.js from https://nodejs.org/
# Verify installation
node --version  # >= 16.0.0
npm --version   # >= 8.0.0

# Navigate to project
cd "web porto"

# Install dependencies
npm install
```

### 2. Starting Development

```bash
npm run dev
```

This starts the Vite dev server with:
- Hot Module Replacement (HMR)
- Automatic browser opening
- Fast refresh on file changes
- SourceMaps for debugging

### 3. Code Organization

#### Component Structure
```
src/components/
├── Section components    # HeroSection, AboutSection, etc.
├── Shared components    # SectionHeading, FullscreenModal
├── Utility components   # ScrollProgress, GlobalStyles
└── Navigation           # Navigation component
```

#### Best Practices

1. **One component per file**
   ```typescript
   // src/components/MyComponent.tsx
   import React from 'react';
   
   interface Props {
     title: string;
     children?: React.ReactNode;
   }
   
   export const MyComponent: React.FC<Props> = ({ title, children }) => {
     return <div>{title}{children}</div>;
   };
   ```

2. **Use TypeScript interfaces**
   - Define props interface for each component
   - Use union types for variants
   - Leverage type inference

3. **Import path aliases**
   ```typescript
   // ✅ Good
   import { PORTFOLIO_DATA } from '@data/portfolioData';
   import { SectionHeading } from '@components/SectionHeading';
   
   // ❌ Avoid
   import { PORTFOLIO_DATA } from '../../../data/portfolioData';
   ```

### 4. Styling with Tailwind CSS

#### Adding Styles

```typescript
// Use Tailwind classes
<div className="flex items-center justify-center gap-4 p-6 rounded-lg bg-gray-50">
  <h2 className="text-2xl font-bold font-heading">Title</h2>
</div>
```

#### Custom Styles

For styles that can't be achieved with Tailwind, add to `src/styles/main.css`:

```css
.custom-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}
```

### 5. Animation with Framer Motion

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}        // Starting state
  animate={{ opacity: 1, y: 0 }}         // End state
  exit={{ opacity: 0, y: -20 }}          // Exit state
  transition={{ duration: 0.3 }}          // Timing
  whileHover={{ scale: 1.05 }}           // Hover effect
>
  Content
</motion.div>
```

### 6. Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-section

# Make changes
git add .
git commit -m "feat: Add new portfolio section"

# Push to remote
git push origin feature/new-section

# Create pull request (on GitHub)
```

**Commit message format:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Styling changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvement

### 7. Testing Changes

```bash
# Check for TypeScript errors
npx tsc --noEmit

# Run linting
npm run lint

# Preview production build
npm run preview
```

### 8. Production Build

```bash
npm run build
```

This:
1. Runs TypeScript compiler
2. Bundles code with Vite
3. Minifies assets
4. Outputs to `dist/` folder
5. Generates sourcemaps (optional)

## 🔍 Debugging

### Browser DevTools

```typescript
// Add console logs
console.log('Debug info:', data);

// Use debugger
debugger; // Execution pauses here in dev tools

// Error handling
try {
  // risky operation
} catch (error) {
  console.error('Error:', error);
}
```

### React DevTools Extension

1. Install React DevTools browser extension
2. Use to inspect component tree
3. Track props and state changes
4. Profile performance

### VS Code Debugging

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverride": {
        "webpack:///src/*": "${webspaceRoot}/*"
      }
    }
  ]
}
```

## 📱 Testing Responsiveness

1. **Browser DevTools**
   - Press `F12` or `Ctrl+Shift+I`
   - Click device toolbar icon
   - Test different screen sizes

2. **Breakpoints**
   - `sm`: 640px
   - `md`: 768px
   - `lg`: 1024px
   - `xl`: 1280px

3. **Test devices**
   - Mobile (375px, 414px)
   - Tablet (768px, 1024px)
   - Desktop (1920px, 2560px)

## 🎨 Color Palette

```javascript
// tailwind.config.js
colors: {
  indigo: {
    500: '#6366f1',
    600: '#4f46e5',
  },
  purple: {
    500: '#a855f7',
  },
  pink: {
    500: '#ec4899',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    // ... etc
  }
}
```

## 📊 Performance Optimization

### Bundle Analysis

```bash
# Install analyzer
npm install --save-dev rollup-plugin-visualizer

# Generate report
npm run build -- --visualizer
```

### Code Splitting

Vite automatically splits vendor code:
```typescript
// dist/vendor.js - React, React-DOM
// dist/framer.js - Framer Motion
// dist/icons.js - Lucide React
// dist/main.js - App code
```

### Image Optimization

```typescript
// Use modern formats
<img src="image.webp" alt="description" />

// Use srcset for responsive images
<img 
  src="image-small.webp"
  srcSet="image-large.webp 1920w"
  alt="description"
/>
```

## 🚨 Common Issues

### Issue: Port 3000 already in use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### Issue: Module not found

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: TypeScript errors

```bash
# Check for errors
npx tsc --noEmit

# Check tsconfig.json configuration
```

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Follow code style
4. Commit with descriptive messages
5. Push to branch
6. Create pull request

---

For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
