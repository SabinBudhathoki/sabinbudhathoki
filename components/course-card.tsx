"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Star, Clock, Loader2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface CourseCardProps {
  title: string
  description: string
  image: string
  category: string
  level: string
  lessons: number
  rating: number
  onEnroll?: () => Promise<any>
  href?: string
}

export default function CourseCard({
  title,
  description,
  image,
  category,
  level,
  lessons,
  rating,
  onEnroll,
  href,
}: CourseCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isEnrolled, setIsEnrolled] = useState(false)

  const handleEnroll = async () => {
    if (!onEnroll) return

    setIsLoading(true)
    try {
      await onEnroll()
      setIsEnrolled(true)
      setTimeout(() => {
        window.location.href = href || `/courses/${category.toLowerCase()}`
      }, 1000)
    } catch (error) {
      console.error("Enrollment error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-[160px] object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-blue-600">{category}</Badge>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="text-xs font-normal">
            {level}
          </Badge>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-yellow-500 mr-1" />
            <span className="text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <BookOpen className="h-4 w-4 mr-1" />
          <span className="mr-4">{lessons} lessons</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>Self-paced</span>
        </div>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        {href ? (
          <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
            <Link href={href}>View Course</Link>
          </Button>
        ) : (
          <Button
            className="w-full bg-red-600 hover:bg-red-700"
            onClick={handleEnroll}
            disabled={isLoading || isEnrolled}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enrolling...
              </>
            ) : isEnrolled ? (
              "Enrolled!"
            ) : (
              "Enroll Now"
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
