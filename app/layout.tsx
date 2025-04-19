export const metadata = {
  title: 'EduWarn Nepal',
  icons: {
    icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVW37hBbqoE1LtDMaMmPrMfmbaz-GrRBSuH-QkE4gR6JxDathlCFmmR01rCc0T-yKh0B1m1AVohYPsBuXBxm1aExwCccteII5Tl4uHsApFWqS-xZnxnOf47fSFSxCp2jxpYT8w47p1aej7uHKr1ko3MK7kLVcDSoVomoV0s162EVQTch12GlIzLqAIY04/s320/IMG-20250418-WA0030.jpg', // Your image URL here
  },
    generator: 'v0.dev'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}


import './globals.css'