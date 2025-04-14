import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, BookOpen, Clock, CheckCircle, Lock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getSubjectData } from "@/lib/lesson-data"
import { LoadingButton } from "@/components/ui/loading-button"
import { enrollCourse } from "@/lib/actions"
import DebugInfo from "@/components/debug-info"

interface SubjectPageProps {
  params: {
    subject: string
  }
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subject } = params
  const subjectData = await getSubjectData(subject)

  // Debug information
  const debugData = {
    requestedSubject: subject,
    subjectFound: !!subjectData,
  }

  if (!subjectData) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Subject not found</h1>
            <p className="mb-6">The subject you're looking for doesn't exist or has been moved.</p>
            <p className="text-sm text-gray-500 mb-4">Requested: {subject}</p>
            <Button asChild>
              <Link href="/courses">Back to Courses</Link>
            </Button>
          </div>
        </main>
        <Footer />
        <DebugInfo data={debugData} />
      </div>
    )
  }

  const { title, description, image, modules, progress } = subjectData

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Subject Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/courses" className="inline-flex items-center text-blue-100 hover:text-white mb-4">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Courses
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                <p className="text-xl text-blue-100 mb-6">{description}</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    <span>{modules.reduce((acc, module) => acc + module.lessons.length, 0)} Lessons</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Self-paced</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <LoadingButton
                    size="lg"
                    className="bg-red-600 hover:bg-red-700"
                    action={async () => {
                      "use server"
                      await enrollCourse(subject)
                    }}
                    loadingText="Enrolling..."
                    successText="Enrolled!"
                  >
                    Start Learning
                  </LoadingButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="#syllabus">View Syllabus</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src={image || "/placeholder.svg?height=300&width=400"}
                  alt={title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Progress Section */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <h2 className="text-2xl font-bold">Your Progress</h2>
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium">
                  {progress.completed} / {progress.total} lessons completed
                </span>
                <Badge className="bg-green-600">{Math.round((progress.completed / progress.total) * 100)}%</Badge>
              </div>
            </div>
            <Progress value={(progress.completed / progress.total) * 100} className="h-2" />
          </div>
        </section>

        {/* Course Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Course Content</h2>

            <Tabs defaultValue="modules" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="modules">Modules</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>

              <TabsContent value="modules" className="mt-0">
                <div className="space-y-6">
                  {modules.map((module, moduleIndex) => (
                    <Card key={moduleIndex}>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl flex justify-between items-center">
                          <span>{module.title}</span>
                          <Badge variant="outline">{module.lessons.length} lessons</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <Link
                              key={lessonIndex}
                              href={`/courses/${subject}/${lesson.slug}`}
                              className={`flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors ${lesson.completed ? "border-l-4 border-green-500 pl-2" : ""}`}
                            >
                              <div className="flex items-center">
                                {lesson.completed ? (
                                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                ) : lesson.locked ? (
                                  <Lock className="h-5 w-5 text-gray-400 mr-3" />
                                ) : (
                                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3"></div>
                                )}
                                <div>
                                  <p className={`font-medium ${lesson.locked ? "text-gray-400" : ""}`}>
                                    {lesson.title}
                                  </p>
                                  <p className="text-sm text-gray-500">{lesson.duration} min</p>
                                </div>
                              </div>
                              {lesson.locked ? (
                                <Badge variant="outline" className="text-gray-400">
                                  Locked
                                </Badge>
                              ) : (
                                <Button size="sm" variant="ghost">
                                  Start
                                </Button>
                              )}
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="resources" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-md">
                        <h3 className="font-bold mb-2 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                          Complete Course Notes
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Comprehensive notes covering all topics in the course.
                        </p>
                        <Button size="sm" className="w-full">
                          Download PDF
                        </Button>
                      </div>

                      <div className="p-4 border rounded-md">
                        <h3 className="font-bold mb-2 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                          Practice Problems
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">Additional practice problems with solutions.</p>
                        <Button size="sm" className="w-full">
                          Download PDF
                        </Button>
                      </div>

                      <div className="p-4 border rounded-md">
                        <h3 className="font-bold mb-2 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                          Formula Sheet
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Quick reference guide for all formulas used in the course.
                        </p>
                        <Button size="sm" className="w-full">
                          Download PDF
                        </Button>
                      </div>

                      <div className="p-4 border rounded-md">
                        <h3 className="font-bold mb-2 flex items-center">
                          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                          Recommended Reading
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Additional books and articles to deepen your understanding.
                        </p>
                        <Button size="sm" className="w-full">
                          View List
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussion" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <h3 className="font-medium text-lg mb-2">Join the course discussion</h3>
                      <p className="text-gray-500 mb-4">
                        Ask questions, share insights, and connect with other students
                      </p>
                      <Button>Go to Discussion Forum</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Instructor Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Instructor"
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dr. Rajesh Sharma</h3>
                    <p className="text-blue-600 mb-4">Professor of Mathematics, Tribhuvan University</p>
                    <p className="text-gray-600 mb-4">
                      Dr. Sharma has over 15 years of experience teaching mathematics at university level. He
                      specializes in calculus, differential equations, and mathematical modeling with applications in
                      physics and engineering.
                    </p>
                    <Button variant="outline">View Profile</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Courses */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Related Courses</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Advanced Calculus",
                  description: "Explore multivariable calculus, vector calculus, and advanced integration techniques.",
                  image: "/placeholder.svg?height=200&width=300",
                  lessons: 18,
                },
                {
                  title: "Linear Algebra",
                  description: "Learn about vector spaces, linear transformations, matrices, and their applications.",
                  image: "/placeholder.svg?height=200&width=300",
                  lessons: 16,
                },
                {
                  title: "Differential Equations",
                  description: "Study ordinary and partial differential equations and their applications in science.",
                  image: "/placeholder.svg?height=200&width=300",
                  lessons: 20,
                },
              ].map((course, index) => (
                <Card key={index} className="overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-[160px] object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <BookOpen className="h-4 w-4 mr-1" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <Button className="w-full">Explore Course</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <DebugInfo
        data={{
          requestedSubject: subject,
          subjectFound: true,
          subjectData: {
            title,
            description,
            moduleCount: modules.length,
            lessonCount: modules.reduce((acc, module) => acc + module.lessons.length, 0),
            progress,
          },
        }}
      />
    </div>
  )
}
