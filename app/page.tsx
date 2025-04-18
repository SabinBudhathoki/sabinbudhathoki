import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, CheckCircle, ChevronRight } from "lucide-react"
import { images } from "@/lib/images"
import YouTubePreview from "@/components/youtube-preview"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                  Free Education for Everyone
                </h1>
                <p className="text-xl text-red-100 mb-8">
                  EduWarn Nepal provides free, quality education in Science, Computer Science, Technology, Mathematics,
                  and Logic.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-red-50" asChild>
                    <Link href="/courses">Explore Courses</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src={images.hero.home || "/placeholder.svg?height=400&width=600"}
                  alt="Students learning"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Subjects */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Subjects</h2>
              <Link href="/courses" className="text-blue-600 hover:text-blue-800 flex items-center">
                View all subjects <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Physics",
                  description: "Understand the fundamental laws that govern the universe",
                  image: images.subjects.physics,
                  slug: "physics",
                  color: "red",
                },
                {
                  title: "Mathematics",
                  description: "Explore the world of numbers, patterns, and mathematical concepts",
                  image: images.subjects.mathematics,
                  slug: "mathematics",
                  color: "blue",
                },
                {
                  title: "Computer Science",
                  description: "Learn programming, algorithms, and computational thinking",
                  image: images.subjects.computerScience,
                  slug: "computer-science",
                  color: "green",
                },
              ].map((subject, index) => (
                <Link key={index} href={`/courses/${subject.slug}`} className="group">
                  <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
                    <div className="relative">
                      <Image
                        src={subject.image || "/placeholder.svg?height=200&width=300"}
                        alt={subject.title}
                        width={300}
                        height={200}
                        className="w-full h-[160px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-${subject.color}-900/80 to-transparent`}
                      ></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-bold text-white">{subject.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <p className="text-gray-600 mb-4">{subject.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge className={`bg-${subject.color}-100 text-${subject.color}-800`}>Free</Badge>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose EduWarn Nepal?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to providing high-quality, accessible education to everyone in Nepal and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Free Access</h3>
                  <p className="text-gray-600">
                    All our educational content is completely free, making quality education accessible to everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Quality Content</h3>
                  <p className="text-gray-600">
                    Our content is created by experienced educators and subject matter experts.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Comprehensive Subjects</h3>
                  <p className="text-gray-600">We cover a wide range of subjects from basic to advanced levels.</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Interactive Learning</h3>
                  <p className="text-gray-600">Engage with interactive lessons, quizzes, and practice exercises.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Videos */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <YouTubePreview channelId="@eduwarnnepal" maxVideos={3} />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of students who are already benefiting from our free educational resources.
            </p>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
