"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"
import Link from "next/link"

interface YouTubePreviewProps {
  channelId: string
  maxVideos?: number
}

interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
}

export default function YouTubePreview({ channelId, maxVideos = 3 }: YouTubePreviewProps) {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [loading, setLoading] = useState(true)

  // In a real application, you would fetch this data from the YouTube API
  // For this demo, we'll use mock data
  useEffect(() => {
    const mockVideos = [
      {
        id: "ODW6_swSO1Y",
        title: "Exam Tips and Tricks for Students",
        thumbnail: "https://img.youtube.com/vi/ODW6_swSO1Y/maxresdefault.jpg",
      },
      {
        id: "rAof9Ld5sOg",
        title: "Introduction to Derivatives",
        thumbnail: "https://img.youtube.com/vi/rAof9Ld5sOg/maxresdefault.jpg",
      },
      {
        id: "HcOCWnxMcZY",
        title: "Differentiation Rules Explained",
        thumbnail: "https://img.youtube.com/vi/HcOCWnxMcZY/maxresdefault.jpg",
      },
    ]

    setVideos(mockVideos.slice(0, maxVideos))
    setLoading(false)
  }, [maxVideos])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Latest Videos</h2>
        <Button variant="outline" size="sm" asChild>
          <Link
            href="https://youtube.com/@eduwarnnepal?si=KB2E_WHdjfrVqaSD"
            target="_blank"
            className="flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Visit Channel
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden hover:shadow-md transition-all">
            <div className="relative">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-[180px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  className="rounded-full bg-white/80 hover:bg-white text-red-600 h-12 w-12"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")}
                >
                  <Play className="h-6 w-6 fill-current" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium line-clamp-2">{video.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
