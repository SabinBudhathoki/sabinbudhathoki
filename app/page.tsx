"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Globe, MessageSquare, Award, Download, Lightbulb, Briefcase, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import CourseCard from "@/components/course-card"
import YouTubePreview from "@/components/youtube-preview"
import { images } from "@/lib/images"
import { enrollCourse } from "@/lib/actions"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge className="bg-white text-blue-700 hover:bg-white/90">Learn, Grow, Decide</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Free Quality Education for Everyone
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                Access high-quality education in Science, Computer Science, Technology, Mathematics, and Logic -
                completely free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={async () => {
                    window.location.href = "/courses"
                  }}
                >
                  Start Learning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  onClick={() => {
                    window.location.href = "/courses"
                  }}
                >
                  Explore Courses
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={images.hero.home || "/placeholder.svg"}
                alt="Students learning"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* YouTube Channel Preview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <YouTubePreview channelId="eduwarnnepal" />
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Popular Courses</h2>
            <Link href="/courses" className="text-blue-600 hover:text-blue-800 flex items-center">
              View all courses <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <Tabs defaultValue="science" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="science">Science</TabsTrigger>
              <TabsTrigger value="computer-science">Computer Science</TabsTrigger>
              <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="logic">Logic</TabsTrigger>
            </TabsList>

            <TabsContent value="science" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="Introduction to Physics"
                  description="Learn the fundamental principles of physics and how they apply to the world around us."
                  image={images.subjects.physics}
                  category="Science"
                  level="Beginner"
                  lessons={12}
                  rating={4.8}
                  onEnroll={() => enrollCourse("physics")}
                />
                <CourseCard
                  title="Chemistry Fundamentals"
                  description="Explore the building blocks of matter and chemical reactions through interactive lessons."
                  image={images.subjects.chemistry}
                  category="Science"
                  level="Beginner"
                  lessons={15}
                  rating={4.7}
                  onEnroll={() => enrollCourse("chemistry")}
                />
                <CourseCard
                  title="Biology and Life Sciences"
                  description="Discover the wonders of living organisms and the systems that make life possible."
                  image={images.subjects.biology}
                  category="Science"
                  level="Intermediate"
                  lessons={18}
                  rating={4.9}
                  onEnroll={() => enrollCourse("biology")}
                />
              </div>
            </TabsContent>

            <TabsContent value="computer-science" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="Programming Basics"
                  description="Start your coding journey with fundamental programming concepts and practices."
                  image={images.subjects.computerScience}
                  category="Computer Science"
                  level="Beginner"
                  lessons={20}
                  rating={4.9}
                  onEnroll={() => enrollCourse("programming-basics")}
                />
                <CourseCard
                  title="Web Development"
                  description="Learn to build responsive websites using HTML, CSS, and JavaScript."
                  image="https://images.unsplash.com/photo-1547658719-da2b51169166"
                  category="Computer Science"
                  level="Intermediate"
                  lessons={24}
                  rating={4.8}
                  onEnroll={() => enrollCourse("web-development")}
                />
                <CourseCard
                  title="Data Structures & Algorithms"
                  description="Master the core concepts of efficient data organization and problem-solving."
                  image="https://images.unsplash.com/photo-1580894742597-87bc8789db3d"
                  category="Computer Science"
                  level="Advanced"
                  lessons={16}
                  rating={4.7}
                  onEnroll={() => enrollCourse("data-structures")}
                />
              </div>
            </TabsContent>

            <TabsContent value="mathematics" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="Algebra Fundamentals"
                  description="Master algebraic equations and functions with practical examples."
                  image={images.subjects.mathematics}
                  category="Mathematics"
                  level="Beginner"
                  lessons={14}
                  rating={4.6}
                  onEnroll={() => enrollCourse("algebra")}
                />
                <CourseCard
                  title="Calculus I"
                  description="Learn derivatives, integrals and their applications in real-world scenarios."
                  image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
                  category="Mathematics"
                  level="Intermediate"
                  lessons={18}
                  rating={4.7}
                  onEnroll={() => enrollCourse("calculus")}
                />
                <CourseCard
                  title="Statistics and Probability"
                  description="Understand data analysis, probability distributions and statistical inference."
                  image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  category="Mathematics"
                  level="Intermediate"
                  lessons={16}
                  rating={4.8}
                  onEnroll={() => enrollCourse("statistics")}
                />
              </div>
            </TabsContent>

            <TabsContent value="technology" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="Artificial Intelligence Basics"
                  description="Understand the fundamentals of AI and machine learning technologies."
                  image="https://images.unsplash.com/photo-1677442135136-760c813a743d"
                  category="Technology"
                  level="Intermediate"
                  lessons={16}
                  rating={4.9}
                  onEnroll={() => enrollCourse("ai-basics")}
                />
                <CourseCard
                  title="Cybersecurity Fundamentals"
                  description="Learn essential security concepts to protect digital systems and data."
                  image="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
                  category="Technology"
                  level="Beginner"
                  lessons={14}
                  rating={4.7}
                  onEnroll={() => enrollCourse("cybersecurity")}
                />
                <CourseCard
                  title="Blockchain Technology"
                  description="Explore the principles behind blockchain and its applications."
                  image="https://images.unsplash.com/photo-1639762681057-408e52192e55"
                  category="Technology"
                  level="Intermediate"
                  lessons={12}
                  rating={4.6}
                  onEnroll={() => enrollCourse("blockchain")}
                />
              </div>
            </TabsContent>

            <TabsContent value="logic" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <CourseCard
                  title="Critical Thinking"
                  description="Develop skills to analyze arguments and make sound logical decisions."
                  image={images.subjects.logic}
                  category="Logic"
                  level="Beginner"
                  lessons={10}
                  rating={4.8}
                  onEnroll={() => enrollCourse("critical-thinking")}
                />
                <CourseCard
                  title="Formal Logic"
                  description="Study the principles of valid inference and formal logical systems."
                  image="https://images.unsplash.com/photo-1633613286991-611fe299c4be"
                  category="Logic"
                  level="Intermediate"
                  lessons={12}
                  rating={4.6}
                  onEnroll={() => enrollCourse("formal-logic")}
                />
                <CourseCard
                  title="Problem Solving Techniques"
                  description="Master methodical approaches to solving complex problems efficiently."
                  image="https://images.unsplash.com/photo-1580894732930-0babd100d356"
                  category="Logic"
                  level="Intermediate"
                  lessons={14}
                  rating={4.7}
                  onEnroll={() => enrollCourse("problem-solving")}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Motivational Quote Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Lightbulb className="h-12 w-12 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-medium italic max-w-4xl mx-auto">
            "Education is not the filling of a pail, but the lighting of a fire."
          </blockquote>
          <p className="mt-4 text-lg">- William Butler Yeats</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">What Our Students Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="EduWarn Nepal transformed my learning experience. The interactive courses and supportive community helped me excel in my studies."
              name="Ram Sharma"
              role="CS Student"
              avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
              rating={5}
            />

            <TestimonialCard
              quote="The multilingual support made it easy for me to learn complex topics in my native language. The quality of education is outstanding."
              name="Yamuna Shrestha"
              role="High School Student"
              avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              rating={5}
            />

            <TestimonialCard
              quote="As a teacher, I recommend EduWarn Nepal to all my students. The resources are comprehensive and the platform is very user-friendly."
              name="Sabin Budhathoki"
              role="Computer Science Teacher"
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Features Section (moved to the end as requested) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose EduWarn Nepal?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform offers a comprehensive learning experience with features designed to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-all">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Interactive Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Engage with interactive quizzes, simulations, and hands-on exercises that make learning fun and
                  effective.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Multilingual Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Learn in your preferred language with full support for both English and Nepali across all our courses.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Discussion Forums</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Connect with fellow learners, ask questions, and participate in discussions to enhance your
                  understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardHeader>
                <Award className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Gamification</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Earn badges, climb leaderboards, and track your progress to stay motivated throughout your learning
                  journey.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardHeader>
                <Download className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Downloadable Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access a wide range of downloadable PDFs, e-books, and study materials for offline learning.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-all">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Career Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Get personalized career advice, skill assessments, and guidance to help you make informed decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of students who are already benefiting from our free, quality education platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100"
              onClick={() => {
                window.location.href = "/register"
              }}
            >
              Create Free Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => {
                window.location.href = "/courses"
              }}
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
