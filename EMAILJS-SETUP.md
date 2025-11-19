# EmailJS Setup Guide for Midwest Roots Winter Defense

## Why EmailJS?

- Free tier: 300 emails/month (more than enough for a landing page)
- No backend required (perfect for static Vite sites)
- 2-minute setup
- Works with Gmail, Outlook, or any email

## Complete Setup (5 Minutes)

### Step 1: Create Account

1. Go to https://www.emailjs.com
2. Click "Sign Up" (top right)
3. Use your Midwest Roots email or personal email
4. Verify your email address

### Step 2: Add Email Service

1. Once logged in, click "Email Services" in left sidebar
2. Click "Add New Service"
3. Choose "Gmail" (recommended) or your email provider
4. Click "Connect Account" and authorize
5. **COPY THE SERVICE ID** - looks like `service_abc1234`

### Step 3: Create Email Template

1. Click "Email Templates" in left sidebar
2. Click "Create New Template"
3. Give it a name: "Winter Defense Risk Audit"
4. In the template editor, replace everything with:

**Subject:**
```
🌲 New Risk Audit Request - {{property_address}}
```

**Content:**
```
NEW WINTER DEFENSE LEAD
========================

Property Address: {{property_address}}
Phone Number: {{phone_number}}
Submitted: {{submission_time}}

========================
Action Required: Call within 24 hours
Auto-sent from omahatreecare.com
```

5. Click "Save"
6. **COPY THE TEMPLATE ID** - looks like `template_xyz7890`

### Step 4: Get Your Public Key

1. Click your profile picture (top right)
2. Click "Account"
3. Scroll to "General" section
4. **COPY THE PUBLIC KEY** - looks like `BxYz123AbC456`

### Step 5: Update the Code

Open `src/App.jsx` in your code editor.

Find these lines (around line 53):

```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

Replace with YOUR values:

```javascript
const serviceId = 'service_abc1234';      // Service ID from Step 2
const templateId = 'template_xyz7890';    // Template ID from Step 3
const publicKey = 'BxYz123AbC456';        // Public Key from Step 4
```

### Step 6: Test It

1. Save the file
2. If your dev server is running, it will auto-reload
3. Fill out the form on your site
4. Check your email - you should receive the submission!

## Common Issues

**Issue:** "EmailJS is not defined"
**Fix:** Make sure you installed dependencies: `npm install`

**Issue:** "Failed to send email"
**Fix:** Double-check your Service ID, Template ID, and Public Key are correct

**Issue:** Not receiving emails
**Fix:** 
1. Check your spam folder
2. Verify the email service is connected in EmailJS dashboard
3. Make sure you're using the correct email address

## Testing Before Going Live

1. Fill out the form with test data
2. Confirm you receive the email
3. Verify all data appears correctly in the email
4. Test from mobile device too

## After Launch

Monitor your EmailJS dashboard to see:
- How many submissions you're getting
- Delivery success rate
- If you're approaching your free tier limit (300/month)

If you exceed 300/month, upgrade to EmailJS Pro for $15/month.

## Alternative: Direct Email Link (Backup)

If you want a fallback option, you can also add a direct email link:

```html
<a href="mailto:andrew@midwestrootstreeservice.com?subject=Risk Audit Request&body=Property Address:%0D%0APhone Number:%0D%0A">
  Email Us Directly
</a>
```

But EmailJS is much better because:
- Professional looking
- Captures data automatically
- Tracks submissions
- No manual copy/paste

## Security Note

The Public Key is safe to expose in client-side code. It only allows SENDING emails, not reading them or accessing your account.

## Questions?

EmailJS docs: https://www.emailjs.com/docs/
