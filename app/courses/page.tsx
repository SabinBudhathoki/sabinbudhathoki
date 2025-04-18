import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ChevronRight, Search, Filter, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { images } from "@/lib/images"

export default function CoursesPage() {
  // Subject data
  const subjects = [
    {
      slug: "mathematics",
      title: "Mathematics",
      description: "Explore the world of numbers, patterns, and mathematical concepts",
      image: "/placeholder.svg?height=200&width=300",
      modules: 3,
      lessons: 12,
      color: "blue",
    },
    {
      slug: "physics",
      title: "Physics",
      description: "Understand the fundamental laws that govern the universe",
      image: "/placeholder.svg?height=200&width=300",
      modules: 2,
      lessons: 16,
      color: "red",
    },
    {
      slug: "computer-science",
      title: "Computer Science",
      description: "Learn programming, algorithms, and computational thinking",
      image: "/placeholder.svg?height=200&width=300",
      modules: 3,
      lessons: 12,
      color: "green",
    },
    {
      slug: "logic",
      title: "Logic",
      description: "Develop critical thinking and logical reasoning skills",
      image: "/placeholder.svg?height=200&width=300",
      modules: 2,
      lessons: 8,
      color: "purple",
    },
    {
      slug: "biology",
      title: "Biology",
      description: "Discover the science of life and living organisms",
      image: "/placeholder.svg?height=200&width=300",
      modules: 4,
      lessons: 20,
      color: "green",
    },
    {
      slug: "chemistry",
      title: "Chemistry",
      description: "Explore the composition, structure, and properties of matter",
      image: "/placeholder.svg?height=200&width=300",
      modules: 3,
      lessons: 15,
      color: "yellow",
    },
  ]

  // Helper function to get image URL for a subject
  const getSubjectImageUrl = (slug: string) => {
    // Convert slug to camelCase for subjects like "computer-science"
    const key = slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())

    // Check if the subject image exists in the images.subjects object
    if (images.subjects && images.subjects[key as keyof typeof images.subjects]) {
      return images.subjects[key as keyof typeof images.subjects]
    }

    // Fallback to placeholder
    return "/placeholder.svg?height=200&width=300"
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Interactive Learning Experience
            </h1>
            <p className="mt-4 text-xl text-blue-100 max-w3xl mx-auto">
              Explore our comprehensive courses with interactive lessons, video tutorials, and practice exercises.
            </p>
            <div className="mt-8 max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="search"
                placeholder="Search for courses or topics..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Subject Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl font-bold">Explore Subjects</h2>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline">Sort By</Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All Subjects</TabsTrigger>
                <TabsTrigger value="physics">Physics</TabsTrigger>
                <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
                <TabsTrigger value="computer-science">Computer Science</TabsTrigger>
                <TabsTrigger value="logic">Logic</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects.map((subject, index) => (
                    <Link key={index} href={`/courses/${subject.slug}`} className="group">
                      <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
                        <div className="relative">
                          <Image
                            src={getSubjectImageUrl(subject.slug) || "/placeholder.svg"}
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
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <BookOpen className="h-4 w-4 mr-1" />
                                {subject.lessons} lessons
                              </span>
                              <span>{subject.modules} modules</span>
                            </div>
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="physics" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects
                    .filter((subject) => subject.slug === "physics")
                    .map((subject, index) => (
                      <Link key={index} href={`/courses/${subject.slug}`} className="group">
                        <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
                          <div className="relative">
                            <Image
                              src={getSubjectImageUrl(subject.slug) || "/placeholder.svg"}
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
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <BookOpen className="h-4 w-4 mr-1" />
                                  {subject.lessons} lessons
                                </span>
                                <span>{subject.modules} modules</span>
                              </div>
                              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>

              {/* Other tabs would filter the subjects accordingly */}
            </Tabs>
          </div>
        </section>

        {/* Featured Lessons */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured Lessons</h2>
              <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                View all <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/courses/mathematics/derivatives">
                <Card className="overflow-hidden h-full hover:shadow-md transition-all">
                  <CardContent className="p-5">
                    <Badge className="mb-2 bg-blue-600">Mathematics</Badge>
                    <h3 className="font-bold text-lg mb-2">Derivatives and Differentiation</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Learn the fundamental concepts of derivatives and differentiation techniques.
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">25 min</span>
                      <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                        Interactive
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/courses/physics/newtons-laws">
                <Card className="overflow-hidden h-full hover:shadow-md transition-all">
                  <CardContent className="p-5">
                    <Badge className="mb-2 bg-red-600">Physics</Badge>
                    <h3 className="font-bold text-lg mb-2">Newton's Laws of Motion</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Understand the fundamental principles that govern the motion of objects.
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">30 min</span>
                      <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                        Interactive
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/courses/computer-science/intro-programming">
                <Card className="overflow-hidden h-full hover:shadow-md transition-all">
                  <CardContent className="p-5">
                    <Badge className="mb-2 bg-green-600">Computer Science</Badge>
                    <h3 className="font-bold text-lg mb-2">Introduction to Programming</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Learn the basics of programming concepts and computational thinking.
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">20 min</span>
                      <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                        Interactive
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/courses/logic/critical-thinking">
                <Card className="overflow-hidden h-full hover:shadow-md transition-all">
                  <CardContent className="p-5">
                    <Badge className="mb-2 bg-purple-600">Logic</Badge>
                    <h3 className="font-bold text-lg mb-2">Critical Thinking and Logical Reasoning</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Develop skills to analyze arguments and make sound logical decisions.
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">35 min</span>
                      <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                        Interactive
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Recommended Learning Paths</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="h-3 bg-blue-600"></div>
                <CardContent className="p-6">
                  <Badge className="mb-4">Beginner Friendly</Badge>
                  <h3 className="text-xl font-bold mb-2">Mathematics Fundamentals</h3>
                  <p className="text-gray-600 mb-4">
                    Master the essential concepts in algebra, geometry, and calculus with this structured learning path.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <span>5 courses</span>
                    <span>•</span>
                    <span>20 hours</span>
                    <span>•</span>
                    <span>Beginner to Intermediate</span>
                  </div>
                  <Button className="w-full">Start Learning Path</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-3 bg-green-600"></div>
                <CardContent className="p-6">
                  <Badge className="mb-4">Most Popular</Badge>
                  <h3 className="text-xl font-bold mb-2">Computer Programming Basics</h3>
                  <p className="text-gray-600 mb-4">
                    Learn the fundamentals of programming, algorithms, and problem-solving techniques.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <span>4 courses</span>
                    <span>•</span>
                    <span>16 hours</span>
                  </div>
                  <Button className="w-full">Start Learning Path</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
