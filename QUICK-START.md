# Quick Start Guide

## Step 1: Download & Extract

You should have already extracted this folder. If you see this file, you're good!

## Step 2: Open Terminal

**Mac:**
1. Open Terminal app (in Applications/Utilities)
2. Type: `cd ` (with a space)
3. Drag the `winter-defense` folder into Terminal
4. Press Enter

**Windows:**
1. Open Command Prompt or PowerShell
2. Type: `cd ` (with a space)
3. Type the path to the winter-defense folder
4. Press Enter

## Step 3: Install Dependencies

```bash
npm install
```

This takes 2-3 minutes. You'll see a progress bar.

**If you get "npm not found":**
- Install Node.js from: https://nodejs.org
- Download the LTS version
- Restart your terminal after installing

## Step 4: Start Development Server

```bash
npm run dev
```

You'll see something like:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 5: View the Site

1. Open your browser
2. Go to: http://localhost:5173
3. You should see your Winter Defense site!

## What to Do Next

1. **Read DEPLOYMENT-CHECKLIST.md** - this tells you exactly what to update
2. **Read EMAILJS-SETUP.md** - this shows you how to make the form work
3. **Update the content** - replace phone numbers, images, etc.
4. **Test everything** - make sure it all works before deploying

## Common Issues

**Port already in use:**
```bash
# Kill the process
lsof -ti:5173 | xargs kill -9

# Try again
npm run dev
```

**Module not found:**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

**Code changes not showing:**
- Save the file
- Browser should auto-refresh
- If not, refresh manually (Cmd+R or Ctrl+R)

## Making Changes

1. Open `src/App.jsx` in your code editor (VS Code recommended)
2. Make changes
3. Save the file
4. Browser auto-refreshes - see your changes instantly!

## Ready to Deploy?

Once you've:
- Updated all content
- Set up EmailJS
- Tested everything locally

Follow the instructions in **DEPLOYMENT-CHECKLIST.md**

## Need Help?

1. Check the README.md file
2. Check the specific guide files (EMAILJS-SETUP.md, etc.)
3. Search for the error message on Google
4. Ask in Claude.ai with the error message

You've got this! 🌲
