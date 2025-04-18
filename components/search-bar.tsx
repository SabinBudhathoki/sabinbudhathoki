"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Search, X, BookOpen, FileText } from "lucide-react"
import Link from "next/link"
import { searchContent } from "@/lib/actions"

interface SearchResult {
  title: string
  type: string
  url: string
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleSearch = async () => {
    if (query.trim().length < 2) return

    setLoading(true)
    try {
      const response = await searchContent(query)
      if (response.success) {
        setResults(response.results)
      }
    } catch (error) {
      console.error("Search error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Focus input when search opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  return (
    <div ref={wrapperRef} className="relative">
      {isOpen ? (
        <div className="flex items-center">
          <Input
            ref={inputRef}
            type="search"
            placeholder="Search courses, lessons..."
            className="w-[200px] md:w-[300px]"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close search</span>
          </Button>
        </div>
      ) : (
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      )}

      {/* Search Results Dropdown */}
      {isOpen && query.length >= 2 && (
        <Card className="absolute right-0 top-full mt-2 w-[300px] md:w-[400px] z-50 max-h-[400px] overflow-auto">
          <div className="p-4">
            {loading ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-700"></div>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-3">
                <h3 className="font-medium text-sm text-gray-500">Search Results</h3>
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {result.type === "course" ? (
                      <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
                    ) : (
                      <FileText className="h-5 w-5 text-red-600 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">{result.title}</p>
                      <p className="text-xs text-gray-500 capitalize">{result.type}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500">No results found for "{query}"</p>
                <p className="text-sm text-gray-400 mt-1">Try different keywords</p>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  )
}
