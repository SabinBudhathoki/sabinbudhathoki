import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Video, BookOpen, Search } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-red-600 text-white py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Learning Resources</h1>
            <p className="mt-4 text-xl text-red-100 max-w-3xl mx-auto">
              Access a wide range of free educational materials to support your learning journey.
            </p>
            <div className="mt-8 max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search for resources..."
                className="pl-10 w-full bg-white text-gray-900"
              />
            </div>
          </div>
        </section>

        {/* Resources Navigation */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-4 md:w-fit">
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="ebooks">E-Books</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle>E-Books & PDFs</CardTitle>
                      <CardDescription>Downloadable textbooks, guides, and reference materials</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Access our collection of high-quality e-books and PDF resources covering all subject areas.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Browse E-Books</Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-red-50 border-red-200">
                    <CardHeader>
                      <Video className="h-8 w-8 text-red-600 mb-2" />
                      <CardTitle>Video Tutorials</CardTitle>
                      <CardDescription>Visual learning materials and recorded lectures</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Watch expert-led video tutorials that break down complex concepts into easy-to-understand
                        lessons.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-red-600 hover:bg-red-700">Watch Videos</Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <FileText className="h-8 w-8 text-green-600 mb-2" />
                      <CardTitle>Practice Exercises</CardTitle>
                      <CardDescription>Interactive problems and solutions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Reinforce your learning with our collection of practice exercises, quizzes, and interactive
                        problems.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Start Practicing</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="ebooks" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* E-Book Items */}
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src={`/placeholder.svg?height=200&width=300`}
                          alt="E-Book Cover"
                          width={300}
                          height={200}
                          className="w-full h-[160px] object-cover"
                        />
                        <Badge className="absolute top-3 left-3 bg-blue-600">
                          {["Science", "Computer Science", "Mathematics"][item % 3]}
                        </Badge>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">
                          {
                            [
                              "Comprehensive Physics Guide",
                              "Introduction to Programming",
                              "Advanced Calculus",
                              "Chemistry Handbook",
                              "Web Development Basics",
                              "Statistics for Beginners",
                            ][item % 6]
                          }
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-gray-600 line-clamp-2">
                          A comprehensive guide covering all the essential concepts and applications.
                        </p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <span>PDF • 125 pages</span>
                          <span className="mx-2">•</span>
                          <span>Beginner</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full flex items-center gap-2">
                          <Download className="h-4 w-4" />
                          Download PDF
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <Button variant="outline" className="mx-auto">
                    Load More E-Books
                  </Button>
                </div>
              </TabsContent>

              {/* Other tabs would have similar content */}
            </Tabs>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Featured Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="flex flex-col md:flex-row overflow-hidden">
                <Image
                  src="/placeholder.svg?height=240&width=240"
                  alt="Featured Resource"
                  width={240}
                  height={240}
                  className="w-full md:w-[240px] h-[200px] md:h-full object-cover"
                />
                <div className="flex flex-col p-6">
                  <Badge className="w-fit mb-2 bg-blue-600">Computer Science</Badge>
                  <h3 className="text-xl font-bold mb-2">Complete Guide to Python Programming</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    A comprehensive resource for beginners and intermediate learners to master Python programming.
                  </p>
                  <Button className="w-fit flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Now
                  </Button>
                </div>
              </Card>

              <Card className="flex flex-col md:flex-row overflow-hidden">
                <Image
                  src="/placeholder.svg?height=240&width=240"
                  alt="Featured Resource"
                  width={240}
                  height={240}
                  className="w-full md:w-[240px] h-[200px] md:h-full object-cover"
                />
                <div className="flex flex-col p-6">
                  <Badge className="w-fit mb-2 bg-red-600">Mathematics</Badge>
                  <h3 className="text-xl font-bold mb-2">Mathematics Problem-Solving Techniques</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Learn effective strategies for solving complex mathematical problems across various domains.
                  </p>
                  <Button className="w-fit flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is constantly adding new resources. Let us know what you need, and we'll try to provide it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700">Request a Resource</Button>
              <Button variant="outline">Contact Support</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
