import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, BookOpen, Video, Download, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LessonContent from "@/components/lesson-content"
import VideoSection from "@/components/video-section"
import { getLessonData, getSubjectData } from "@/lib/lesson-data"
import DebugInfo from "@/components/debug-info"

interface LessonPageProps {
  params: {
    subject: string
    lesson: string
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { subject, lesson } = params
  const subjectData = await getSubjectData(subject)
  const lessonData = await getLessonData(subject, lesson)

  // Debug information
  const debugData = {
    requestedSubject: subject,
    requestedLesson: lesson,
    subjectFound: !!subjectData,
    lessonFound: !!lessonData,
  }

  if (!subjectData) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Subject not found</h1>
            <p className="mb-2">The subject you're looking for doesn't exist or has been moved.</p>
            <p className="mb-6 text-gray-500">
              Requested: {subject}/{lesson}
            </p>
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

  if (!lessonData) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
            <p className="mb-2">The lesson you're looking for doesn't exist or has been moved.</p>
            <p className="mb-6 text-gray-500">
              Requested: {subject}/{lesson}
            </p>
            <Button asChild>
              <Link href={`/courses/${subject}`}>
                Back to{" "}
                {subject
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
        <DebugInfo data={debugData} />
      </div>
    )
  }

  const { title, description, category, level, content, videos, resources } = lessonData

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Lesson Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <Link
                  href={`/courses/${subject}`}
                  className="inline-flex items-center text-blue-100 hover:text-white mb-2"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Back to{" "}
                  {subject
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Link>
                <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge className="bg-white/20">{category}</Badge>
                  <Badge className="bg-white/20">{level}</Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-white border-white hover:bg-white/10">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Mark as Complete
                </Button>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Next Lesson
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="notes" className="w-full">
                  <TabsList className="mb-6">
                    <TabsTrigger value="notes" className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Notes
                    </TabsTrigger>
                    <TabsTrigger value="videos" className="flex items-center">
                      <Video className="h-4 w-4 mr-2" />
                      Videos
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="notes" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <LessonContent content={content} />
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="videos" className="mt-0">
                    <Card>
                      <CardContent className="p-6">
                        <VideoSection videos={videos} />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Resources</h3>
                    <div className="space-y-3">
                      {resources &&
                        resources.map((resource, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Download className="h-4 w-4 mr-2 text-blue-600" />
                              <span>{resource.title}</span>
                            </div>
                            <Button size="sm" variant="outline">
                              Download
                            </Button>
                          </div>
                        ))}
                    </div>

                    <div className="border-t my-6"></div>

                    <h3 className="font-bold text-lg mb-4">Related Lessons</h3>
                    <div className="space-y-3">
                      <Link href="#" className="block hover:bg-gray-50 p-2 rounded-md">
                        <p className="font-medium">Introduction to Derivatives</p>
                        <p className="text-sm text-gray-500">Calculus</p>
                      </Link>
                      <Link href="#" className="block hover:bg-gray-50 p-2 rounded-md">
                        <p className="font-medium">Applications of Integrals</p>
                        <p className="text-sm text-gray-500">Calculus</p>
                      </Link>
                      <Link href="#" className="block hover:bg-gray-50 p-2 rounded-md">
                        <p className="font-medium">Differential Equations</p>
                        <p className="text-sm text-gray-500">Calculus</p>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Discussion Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Discussion</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <h3 className="font-medium text-lg mb-2">Join the conversation</h3>
                  <p className="text-gray-500 mb-4">Ask questions and discuss this lesson with other students</p>
                  <Button>Start Discussion</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/3 bg-blue-100 flex items-center justify-center p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="font-bold text-lg mb-2">Next: Applications of Derivatives</h3>
                  <p className="text-gray-600 mb-4">Learn how derivatives are used to solve real-world problems.</p>
                  <Button>Continue to Next Lesson</Button>
                </div>
              </Card>

              <Card className="flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/3 bg-red-100 flex items-center justify-center p-6">
                  <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="font-bold text-lg mb-2">Practice Quiz</h3>
                  <p className="text-gray-600 mb-4">Test your understanding of the concepts covered in this lesson.</p>
                  <Button variant="outline">Take Quiz</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <DebugInfo
        data={{
          requestedSubject: subject,
          requestedLesson: lesson,
          subjectFound: true,
          lessonFound: true,
          lessonData: {
            title,
            description,
            category,
            level,
            videoCount: videos?.length || 0,
            resourceCount: resources?.length || 0,
          },
        }}
      />
    </div>
  )
}
