"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageToggle() {
  const [currentLanguage, setCurrentLanguage] = useState("English")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setCurrentLanguage("English")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCurrentLanguage("नेपाली")}>नेपाली (Nepali)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
