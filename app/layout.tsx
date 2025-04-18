import type { ReactNode } from "react"
import ClientRootLayout from "./page"

export const metadata = {
  title: "EduWarn Nepal",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}


import './globals.css'