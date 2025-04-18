import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  avatar: string
  rating: number
}

export default function TestimonialCard({ quote, name, role, avatar, rating }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex items-center space-x-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
        <blockquote className="text-gray-700 mb-6">"{quote}"</blockquote>
        <div className="flex items-center">
          <Image src={avatar || "/placeholder.svg"} alt={name} width={48} height={48} className="rounded-full mr-4" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
