"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would navigate to search results
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <Input
        type="text"
        placeholder="Szukaj przepisów, np. kotlet schabowy..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-4 pr-12 py-6 rounded-full border-green-200 focus:border-green-500 focus:ring-green-500"
      />
      <Button type="submit" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full">
        <Search className="h-5 w-5" />
        <span className="sr-only">Szukaj</span>
      </Button>
    </form>
  )
}
