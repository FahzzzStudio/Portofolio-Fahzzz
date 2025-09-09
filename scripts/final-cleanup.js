import { rmSync, existsSync } from "fs"

console.log("🧹 Starting complete cleanup...")

// Remove all cache directories
const cacheDirs = [".next", "node_modules", ".turbo"]
cacheDirs.forEach((dir) => {
  if (existsSync(dir)) {
    console.log(`Removing ${dir}...`)
    rmSync(dir, { recursive: true, force: true })
  }
})

// Remove lock files
const lockFiles = ["package-lock.json", "yarn.lock", "pnpm-lock.yaml"]
lockFiles.forEach((file) => {
  if (existsSync(file)) {
    console.log(`Removing ${file}...`)
    rmSync(file, { force: true })
  }
})

// Remove any remaining config files that might cause issues
const configFiles = ["next.config.ts"]
configFiles.forEach((file) => {
  if (existsSync(file)) {
    console.log(`Removing ${file}...`)
    rmSync(file, { force: true })
  }
})

console.log("✅ Cleanup complete! Now run:")
console.log("1. npm install")
console.log("2. npm run dev")
