echo "Cleaning up project for Git Bash..."

# Remove .next directory
rm -rf .next

# Remove node_modules directory  
rm -rf node_modules

# Remove package-lock.json
rm -f package-lock.json

# Remove any remaining cache
rm -rf .npm

echo "Cleanup complete! Now run: npm install"
