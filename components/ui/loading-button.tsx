"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import type { ButtonProps } from "@/components/ui/button"
import { useState } from "react"

interface LoadingButtonProps extends ButtonProps {
  action: () => Promise<any>
  loadingText?: string
  successText?: string
  children: React.ReactNode
}

export function LoadingButton({
  action,
  loadingText = "Loading...",
  successText = "Success!",
  children,
  ...props
}: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleClick = async () => {
    try {
      setIsLoading(true)
      await action()
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 2000)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={isLoading} {...props}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isSuccess ? successText : isLoading ? loadingText : children}
    </Button>
  )
}
