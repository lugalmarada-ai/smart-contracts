# OKMAYA REALMS - Image Optimization Guide

## 🖼️ Current Assets Status

### Logo (logo_real.png)
- **Current Size**: 226KB
- **Dimensions**: 400x400px (assumed)
- **Format**: PNG
- **Optimization Needed**: ✅ Yes

### Recommended Optimizations

#### 1. Compress Logo
```bash
# Using ImageMagick
convert logo_real.png -quality 85 -strip logo_real_optimized.png

# Using pngquant
pngquant --quality=65-80 logo_real.png -o logo_real_optimized.png

# Using online tools
# - TinyPNG (https://tinypng.com/)
# - Squoosh (https://squoosh.app/)
```

**Target**: Reduce from 226KB to ~50-80KB

#### 2. Create WebP Version
```bash
# Convert to WebP for modern browsers
cwebp -q 80 logo_real.png -o logo_real.webp
```

#### 3. Create Multiple Sizes
```bash
# Create responsive sizes
convert logo_real.png -resize 200x200 logo_200.png
convert logo_real.png -resize 400x400 logo_400.png
convert logo_real.png -resize 800x800 logo_800.png
```

#### 4. Update Next.js Image Component
```typescript
// In Hero.tsx, replace with:
<Image
  src="/logo_real.webp"
  alt="OKMAYA REALMS Logo"
  width={400}
  height={400}
  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 22vw"
  className="w-[50vw] sm:w-[40vw] lg:w-[22vw] h-auto"
  priority
/>
```

---

## 📦 Build Size Optimization

### Current Bundle
- **index.html**: 82KB
- **contracts.ts**: 51KB (ABIs)

### Recommendations

#### 1. Split Contract ABIs
```bash
# Create separate ABI files
mkdir -p src/abis/
# Move each ABI to its own JSON file
```

```typescript
// In contracts.ts, import instead of inline
import OKY_TOKEN_ABI from '@/abis/OKYToken.json';
import OKY_PRESALE_ABI from '@/abis/OKYPresale.json';
```

#### 2. Enable Code Splitting
```javascript
// next.config.js
module.exports = {
  output: 'export',
  images: { unoptimized: true },
  // Add experimental features if needed
  experimental: {
    optimizeCss: true,
  },
};
```

#### 3. Remove Unused Dependencies
```bash
npm run build -- --analyze
# Review bundle analyzer output
```

---

## ⚡ Performance Targets

- **Logo**: < 80KB (optimized PNG or WebP)
- **Total Page Size**: < 500KB initial load
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FCP (First Contentful Paint)**: < 1.8s
- **TTI (Time to Interactive)**: < 3.9s

---

## 🔧 Automation

### Add to package.json
```json
{
  "scripts": {
    "optimize:images": "node scripts/optimize-images.js",
    "build:production": "npm run optimize:images && npm run build"
  }
}
```

### Create scripts/optimize-images.js
```javascript
// Script to automatically optimize all images before build
// Uses sharp or imagemin packages
```
