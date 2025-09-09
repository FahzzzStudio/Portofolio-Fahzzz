"use client"
import { Badge } from "@/components/ui/badge"

interface PortfolioFilterProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function PortfolioFilter({ categories, activeFilter, onFilterChange }: PortfolioFilterProps) {
  return (
    <div className="flex justify-center gap-2 mb-8 flex-wrap">
      {categories.map((category) => (
        <Badge
          key={category}
          variant={activeFilter === category ? "default" : "outline"}
          className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
            activeFilter === category ? "bg-primary text-primary-foreground" : "hover:bg-primary/10 hover:text-primary"
          }`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  )
}
