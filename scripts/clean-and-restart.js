import { execSync } from "child_process"
import fs from "fs"

console.log("🧹 Cleaning Next.js project...")

// Remove old config files
const configFiles = ["next.config.ts", "next.config.js"]
configFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file)
    console.log(`✅ Removed ${file}`)
  }
})

// Clear Next.js cache
try {
  execSync("npx next clean", { stdio: "inherit" })
  console.log("✅ Cleared Next.js cache")
} catch (error) {
  console.log("⚠️ Could not clear cache, continuing...")
}

// Remove node_modules and reinstall
if (fs.existsSync("node_modules")) {
  console.log("🗑️ Removing node_modules...")
  execSync("rmdir /s /q node_modules", { stdio: "inherit", shell: true })
}

if (fs.existsSync("package-lock.json")) {
  fs.unlinkSync("package-lock.json")
  console.log("✅ Removed package-lock.json")
}

console.log("📦 Installing dependencies...")
execSync("npm install", { stdio: "inherit" })

console.log("🚀 Starting development server...")
execSync("npm run dev", { stdio: "inherit" })
