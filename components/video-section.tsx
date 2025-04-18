"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface VideoSectionProps {
  videos: {
    title: string
    description: string
    embedId: string
  }[]
}

export default function VideoSection({ videos }: VideoSectionProps) {
  const [activeVideo, setActiveVideo] = useState(0)

  return (
    <div className="space-y-6">
      <Tabs defaultValue="video" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="video">Video Lessons</TabsTrigger>
          <TabsTrigger value="list">All Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="video" className="mt-0">
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${videos[activeVideo].embedId}`}
                title={videos[activeVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[400px] rounded-lg"
              ></iframe>
            </div>
            <h3 className="text-xl font-bold">{videos[activeVideo].title}</h3>
            <p className="text-gray-600">{videos[activeVideo].description}</p>
          </div>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <div className="space-y-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  activeVideo === index ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                }`}
                onClick={() => setActiveVideo(index)}
              >
                <h3 className="font-medium">{video.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
