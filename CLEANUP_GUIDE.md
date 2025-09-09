# Manual Cleanup Guide

Your project has **webpack cache corruption**. Follow these steps to fix it:

## Step 1: Stop Next.js Development Server
Press `Ctrl + C` in your terminal to stop the development server.

## Step 2: Delete Corrupted Cache (Manual)
Delete these folders/files if they exist:
\`\`\`bash
# Delete these folders
.next/
node_modules/
package-lock.json

# Or use these commands:
rmdir /s /q .next
rmdir /s /q node_modules
del package-lock.json
\`\`\`

## Step 3: Clean Install Dependencies
\`\`\`bash
npm install
\`\`\`

## Step 4: Start Development Server
\`\`\`bash
npm run dev
\`\`\`

## Why This Happened
- Webpack cache got corrupted with old font references
- The current code is actually correct (uses Inter font)
- Cache was storing old "Geist" font errors

## Expected Result
After cleanup, you should see:
- ✅ No "Unknown font Geist" errors
- ✅ No "missing key prop" warnings
- ✅ Clean development server startup
- ✅ Working portfolio website

If problems persist, try running the cleanup script: `node scripts/complete-cleanup.js`
