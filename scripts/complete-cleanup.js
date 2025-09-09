import { execSync } from "child_process"
import { rmSync, existsSync } from "fs"

console.log("🧹 Starting complete cleanup...")

try {
  // Stop any running Next.js processes
  console.log("⏹️ Stopping Next.js processes...")
  try {
    execSync("taskkill /f /im node.exe", { stdio: "ignore" })
  } catch (e) {
    // Ignore if no processes found
  }

  // Remove corrupted cache directories
  const cachePaths = [".next", "node_modules/.cache", ".next/cache", ".next/cache/webpack"]

  cachePaths.forEach((path) => {
    if (existsSync(path)) {
      console.log(`🗑️ Removing ${path}...`)
      rmSync(path, { recursive: true, force: true })
    }
  })

  // Remove node_modules and package-lock
  if (existsSync("node_modules")) {
    console.log("🗑️ Removing node_modules...")
    rmSync("node_modules", { recursive: true, force: true })
  }

  if (existsSync("package-lock.json")) {
    console.log("🗑️ Removing package-lock.json...")
    rmSync("package-lock.json", { force: true })
  }

  console.log("✅ Cleanup complete!")
  console.log("📦 Now run: npm install && npm run dev")
} catch (error) {
  console.error("❌ Cleanup failed:", error.message)
}
