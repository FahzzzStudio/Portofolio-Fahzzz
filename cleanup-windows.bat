@echo off
echo Starting Windows cleanup...

echo Stopping any running Next.js processes...
taskkill /f /im node.exe 2>nul

echo Removing .next directory...
if exist .next rmdir /s /q .next

echo Removing node_modules (this may take a while)...
if exist node_modules rmdir /s /q node_modules

echo Removing package-lock.json...
if exist package-lock.json del package-lock.json

echo Cleanup complete!
echo Now run: npm install
pause
