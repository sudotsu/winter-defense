# Midwest Roots Winter Defense Site

A high-conversion landing page for winter tree service campaigns in Omaha.

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## EmailJS Setup (Form Submissions)

The contact form currently logs to console. To receive real submissions:

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (300 emails/month)
3. Verify your email

### Step 2: Set Up Email Service

1. Go to Email Services
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your email account
5. Copy the **Service ID**

### Step 3: Create Email Template

1. Go to Email Templates
2. Click "Create New Template"
3. Use this template:

**Subject:** New Risk Audit Request - Winter Defense

**Body:**
```
New risk audit request from Winter Defense site:

Property Address: {{property_address}}
Phone Number: {{phone_number}}
Submission Time: {{submission_time}}

---
This is an automated message from omahatreecare.com
```

4. Save and copy the **Template ID**

### Step 4: Get Public Key

1. Go to Account > General
2. Copy your **Public Key**

### Step 5: Update App.jsx

In `src/App.jsx`, find these lines (around line 53):

```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

Replace with your actual values:

```javascript
const serviceId = 'service_abc123';  // Your Service ID
const templateId = 'template_xyz789';  // Your Template ID
const publicKey = 'abcdefgh12345678';  // Your Public Key
```

Save the file and restart your dev server. Test the form!

## Deploying to Vercel

### Option 1: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **midwest-roots-winter** (or whatever you want)
- Directory? Press Enter (use current directory)
- Override settings? **N**

Your site will be live at a vercel.app URL!

### Option 2: Using Vercel Website

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New Project"
4. Import the project from your GitHub repo
5. Vercel auto-detects Vite settings - just click Deploy!

## Connecting omahatreecare.com

### In Your Domain Registrar (WordPress.com)

1. Log into your WordPress.com account
2. Go to Domains > Manage Domains
3. Click on **omahatreecare.com**
4. Click "DNS Records" or "Name Servers"

### Option A: Using Vercel Nameservers (Easier)

In Vercel:
1. Go to your project > Settings > Domains
2. Add **omahatreecare.com**
3. Vercel will give you nameservers like:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com

In WordPress.com:
1. Update nameservers to Vercel's nameservers
2. Wait 24-48 hours for propagation

### Option B: Using CNAME Records (Faster)

In Vercel:
1. Go to Settings > Domains
2. Add **omahatreecare.com**
3. Vercel shows you the CNAME target (like `cname.vercel-dns.com`)

In WordPress.com:
1. Add a CNAME record:
   - Name: `@` (or leave blank)
   - Points to: `cname.vercel-dns.com` (use actual value from Vercel)
2. Add another CNAME for www:
   - Name: `www`
   - Points to: `cname.vercel-dns.com`

Changes propagate in 1-4 hours.

## Content You Need to Replace

### Priority 1: Contact Info
- [ ] Phone number: Search for `(402) 555-0123` and replace everywhere
- [ ] Service areas in footer (confirm cities)

### Priority 2: Images
1. **Hero Background** (Line ~185): Replace snow/tree image
2. **Andrew's Photo** (Line ~310): Replace with your photo in safety gear

To replace images:
1. Upload your images to the `public` folder
2. Reference them like: `src="/your-image.jpg"`
3. Or use an image host and reference the full URL

### Priority 3: About Section Content
- [ ] Update the story to match your actual origin story
- [ ] Adjust the quote if needed

### Priority 4: Blog Articles
The 3 blog article placeholders link to `#`. You can:
1. Create actual blog posts (WordPress or Medium)
2. Update the href to point to your main site's blog
3. Remove the section entirely if not needed

## Performance Optimization

This site is already optimized with:
- Lazy-loaded images
- Minimal JavaScript
- Tailwind CSS (purged in production)
- Google Fonts preloaded

Expected Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## SEO Keywords Implemented

These keywords are in H1/H2 tags for Omaha local SEO:
- "winter structural pruning"
- "Omaha" (multiple mentions)
- "hazardous tree assessment"
- "storm damage prevention"

## Support

Questions? Issues? Contact: andrew@midwestrootstreeservice.com

## License

Proprietary - Midwest Roots Tree Services
