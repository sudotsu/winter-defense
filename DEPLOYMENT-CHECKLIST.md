# Deployment Checklist for Midwest Roots Winter Defense

## Before You Deploy (30 minutes)

### ✅ Phase 1: Content Updates (REQUIRED)

- [ ] **Update phone number** everywhere
  - Search for: `(402) 555-0123`
  - Replace with: Your actual number
  - Files to check: `src/App.jsx`

- [ ] **Replace hero image**
  - Current: Generic snowy trees
  - New: Your photo of winter trees/storm damage
  - Upload to: `/public/images/hero-winter.jpg`
  - Update line ~185 in `App.jsx`

- [ ] **Replace Andrew's photo**
  - Current: Stock photo
  - New: You in safety gear by a tree
  - Upload to: `/public/images/andrew.jpg`
  - Update line ~310 in `App.jsx`

- [ ] **Update about section story**
  - Line ~320 in `App.jsx`
  - Make it your real story
  - Keep it under 150 words

### ✅ Phase 2: EmailJS Setup (REQUIRED)

Follow `EMAILJS-SETUP.md` to:
- [ ] Create EmailJS account
- [ ] Connect email service
- [ ] Create template
- [ ] Update `src/App.jsx` with IDs
- [ ] Test form submission

### ✅ Phase 3: Test Locally

```bash
npm install
npm run dev
```

- [ ] Site loads correctly
- [ ] All links work
- [ ] Form submits successfully
- [ ] Check on mobile (Chrome DevTools)
- [ ] Test all menu items

### ✅ Phase 4: Deploy to Vercel

**Option A: Vercel CLI (faster)**
```bash
npm install -g vercel
vercel login
vercel
```

**Option B: Vercel Website**
1. Sign up at vercel.com
2. Import project from GitHub
3. Click Deploy

- [ ] Site deploys successfully
- [ ] Visit your-project.vercel.app
- [ ] Test form on live site
- [ ] Verify you receive email

### ✅ Phase 5: Connect Domain

In Vercel dashboard:
- [ ] Go to project Settings > Domains
- [ ] Add `omahatreecare.com`
- [ ] Add `www.omahatreecare.com`
- [ ] Follow DNS instructions

In WordPress.com domain settings:
- [ ] Update DNS records as shown in Vercel
- [ ] Wait 1-24 hours for propagation

### ✅ Phase 6: Final Checks

- [ ] Visit omahatreecare.com (after DNS propagates)
- [ ] Test form submission from live domain
- [ ] Check site on real mobile device
- [ ] Run Lighthouse test (aim for 90+ scores)
- [ ] Share URL with 2-3 friends for feedback

## Post-Launch (Ongoing)

### Week 1
- [ ] Monitor EmailJS dashboard daily
- [ ] Respond to all inquiries within 24 hours
- [ ] Note any bugs or issues

### Week 2
- [ ] Check Google Search Console
- [ ] Submit sitemap
- [ ] Verify site appears in Google searches

### Month 1
- [ ] Review conversion rate (visitors → form fills)
- [ ] A/B test different hero images if needed
- [ ] Add customer testimonials if you get them

## Quick Fixes for Common Issues

**Form not working:**
```bash
# Check EmailJS credentials in App.jsx
# Test locally first
npm run dev
```

**Images not loading:**
```bash
# Put images in /public folder
# Reference as: src="/image-name.jpg"
```

**Site not updating:**
```bash
# Clear Vercel cache
vercel --prod
```

**Domain not connecting:**
- Wait 24 hours minimum
- Check DNS propagation: https://dnschecker.org
- Verify DNS records match Vercel exactly

## Support Resources

- Vite Docs: https://vitejs.dev
- Vercel Docs: https://vercel.com/docs
- EmailJS Docs: https://www.emailjs.com/docs
- Tailwind Docs: https://tailwindcss.com

## Emergency Contact

If you get stuck: Post in Claude.ai with this project folder open!
