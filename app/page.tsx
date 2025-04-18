// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'EduWarn Nepal',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpM1VE8dxOqEE9ZAqR4jzlYLJLo0oVN4xFUfLRm_xMkf1wOlgfdS5Pqp3hPT4S9qf-_9L6G3AVBN_h6_4iLifuL6yp4NKKPudcB-E0oSGZrrSNpQtXA2yQ2r6UUDTFdq7CLReK7E6hgAQ6rSYzm4PRMXETt5HMQjsjl9n45vxvzVmvqQtDNpc1Yc2Pf6I/s320/IMG_20241102_115221.jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
