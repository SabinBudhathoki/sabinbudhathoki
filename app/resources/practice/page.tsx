import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, Brain, Code, FileText } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PracticePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Practice Exercises</h1>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Reinforce your learning with interactive problems, quizzes, and exercises.
            </p>
          </div>
        </section>

        {/* Practice Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-8 flex flex-wrap justify-center">
                <TabsTrigger value="all">All Exercises</TabsTrigger>
                <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
                <TabsTrigger value="physics">Physics</TabsTrigger>
                <TabsTrigger value="computer-science">Computer Science</TabsTrigger>
                <TabsTrigger value="logic">Logic</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Mathematics Practice */}
                  <Card className="hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calculator className="h-6 w-6 text-blue-600 mr-2" />
                          <CardTitle>Mathematics</CardTitle>
                        </div>
                        <Badge>120 Exercises</Badge>
                      </div>
                      <CardDescription>Practice problems in algebra, calculus, and more</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Algebra Practice Set</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            30 problems covering equations, functions, and more
                          </p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Calculus Problems</h3>
                          <p className="text-sm text-gray-600 mb-2">Derivatives, integrals, and applications</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Statistics Quiz</h3>
                          <p className="text-sm text-gray-600 mb-2">Test your knowledge of statistical concepts</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <Link
                          href="/resources/practice/mathematics"
                          className="text-blue-600 hover:underline text-sm flex justify-end"
                        >
                          View all Mathematics exercises →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Physics Practice */}
                  <Card className="hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <BookOpen className="h-6 w-6 text-red-600 mr-2" />
                          <CardTitle>Physics</CardTitle>
                        </div>
                        <Badge>85 Exercises</Badge>
                      </div>
                      <CardDescription>Practice problems in mechanics, electricity, and more</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Mechanics Problem Set</h3>
                          <p className="text-sm text-gray-600 mb-2">Force, motion, energy, and momentum problems</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Electricity & Magnetism</h3>
                          <p className="text-sm text-gray-600 mb-2">Circuits, fields, and electromagnetic waves</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Thermodynamics Quiz</h3>
                          <p className="text-sm text-gray-600 mb-2">Heat, energy, and thermodynamic processes</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <Link
                          href="/resources/practice/physics"
                          className="text-blue-600 hover:underline text-sm flex justify-end"
                        >
                          View all Physics exercises →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Computer Science Practice */}
                  <Card className="hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Code className="h-6 w-6 text-green-600 mr-2" />
                          <CardTitle>Computer Science</CardTitle>
                        </div>
                        <Badge>95 Exercises</Badge>
                      </div>
                      <CardDescription>Coding challenges, algorithms, and data structures</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Programming Basics</h3>
                          <p className="text-sm text-gray-600 mb-2">Variables, loops, conditionals, and functions</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Data Structures</h3>
                          <p className="text-sm text-gray-600 mb-2">Arrays, linked lists, trees, and graphs</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Algorithm Challenges</h3>
                          <p className="text-sm text-gray-600 mb-2">Sorting, searching, and optimization problems</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <Link
                          href="/resources/practice/computer-science"
                          className="text-blue-600 hover:underline text-sm flex justify-end"
                        >
                          View all Computer Science exercises →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Logic Practice */}
                  <Card className="hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Brain className="h-6 w-6 text-purple-600 mr-2" />
                          <CardTitle>Logic</CardTitle>
                        </div>
                        <Badge>60 Exercises</Badge>
                      </div>
                      <CardDescription>Critical thinking, puzzles, and logical reasoning</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Critical Thinking Exercises</h3>
                          <p className="text-sm text-gray-600 mb-2">Analyze arguments and identify fallacies</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Logic Puzzles</h3>
                          <p className="text-sm text-gray-600 mb-2">Brain teasers and logical reasoning challenges</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-md">
                          <h3 className="font-medium mb-1">Formal Logic Problems</h3>
                          <p className="text-sm text-gray-600 mb-2">Symbolic logic and truth tables</p>
                          <Button size="sm" className="w-full">
                            Start Practice
                          </Button>
                        </div>

                        <Link
                          href="/resources/practice/logic"
                          className="text-blue-600 hover:underline text-sm flex justify-end"
                        >
                          View all Logic exercises →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Other tabs would show filtered content */}
            </Tabs>
          </div>
        </section>

        {/* Featured Practice Sets */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Featured Practice Sets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-blue-600 mr-2" />
                    <CardTitle>Exam Preparation: Mathematics</CardTitle>
                  </div>
                  <CardDescription>Comprehensive practice for upcoming exams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    This practice set covers all the essential topics that typically appear in mathematics exams,
                    including algebra, calculus, geometry, and statistics.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>50 questions</span>
                    <span>3 hours estimated time</span>
                    <span>Intermediate level</span>
                  </div>
                  <Button className="w-full">Start Practice Set</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex items-center">
                    <FileText className="h-6 w-6 text-red-600 mr-2" />
                    <CardTitle>Coding Interview Preparation</CardTitle>
                  </div>
                  <CardDescription>Practice common coding interview questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    This practice set includes common coding interview questions from top tech companies, covering data
                    structures, algorithms, and problem-solving techniques.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>30 challenges</span>
                    <span>4 hours estimated time</span>
                    <span>Intermediate to Advanced</span>
                  </div>
                  <Button className="w-full">Start Practice Set</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Practice Tips */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">Tips for Effective Practice</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Consistent Practice</h3>
                  <p className="text-gray-600">
                    Regular, spaced practice is more effective than cramming. Set aside time each day for practice
                    exercises to build and maintain your skills.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Active Learning</h3>
                  <p className="text-gray-600">
                    Don't just read solutions. Try to solve problems on your own first, then review the solution to
                    understand different approaches.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Review Mistakes</h3>
                  <p className="text-gray-600">
                    Keep track of problems you get wrong and review them regularly. Understanding your mistakes is key
                    to improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose from hundreds of practice exercises across different subjects and difficulty levels.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Practicing Now
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
