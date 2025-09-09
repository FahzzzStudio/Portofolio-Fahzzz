"use client"

import { useState, useEffect } from "react"

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          setTimeout(() => onComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-500 ${isComplete ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="text-center">
        {/* Logo/Name */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary animate-pulse-glow-text mb-2">Fahzzz</h1>
          <p className="text-muted-foreground text-lg">Portfolio Loading...</p>
        </div>

        {/* Loading Animation */}
        <div className="relative w-64 h-2 bg-border rounded-full overflow-hidden mb-4">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ease-out animate-pulse-glow"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <div className="text-sm text-muted-foreground font-mono">{progress}%</div>

        {/* Animated Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
