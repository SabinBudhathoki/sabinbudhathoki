import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "EduWarn Nepal",
  description: "Free quality education in Science, Computer Science, Technology, Mathematics, and Logic",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'