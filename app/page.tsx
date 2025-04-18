"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Heart, Target, BookOpen, Globe, Facebook, Phone } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { images } from "@/lib/images"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">About EduWarn Nepal</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're on a mission to provide free, quality education to everyone in Nepal and beyond.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At EduWarn Nepal, we believe that quality education should be accessible to everyone, regardless of
                  their financial situation or geographic location. Our mission is to break down barriers to education
                  and empower individuals through knowledge.
                </p>
                <p className="text-gray-600 mb-4">
                  We focus on providing comprehensive, engaging, and practical educational content in Science, Computer
                  Science, Technology, Mathematics, and Logic - fields that are crucial for personal and professional
                  development in today's world.
                </p>
                <p className="text-gray-600">
                  Our motto, "Learn, Grow, Decide," reflects our commitment to not only providing information but also
                  fostering critical thinking and decision-making skills that will serve our users throughout their
                  lives.
                </p>
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
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality Education</h3>
                  <p className="text-gray-600">
                    We are committed to providing high-quality educational content that meets international standards
                    while being relevant to local contexts.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Accessibility</h3>
                  <p className="text-gray-600">
                    We believe education should be accessible to everyone, regardless of financial status, location, or
                    background.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                  <p className="text-gray-600">
                    We create content that respects and celebrates diversity, ensuring our platform is welcoming to all.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously explore new teaching methods and technologies to enhance the learning experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-600">
                    We foster a supportive learning community where students can collaborate, share ideas, and grow
                    together.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in everything we do, from content creation to platform development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Meet Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="overflow-hidden hover:shadow-md transition-all">
                <Image
                  src={images.founders.sabin || "/placeholder.svg"}
                  alt="Sabin Budhathoki"
                  width={300}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">Sabin Budhathoki</h3>
                  <p className="text-blue-600 text-sm mb-3">Founder</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Educational visionary with a passion for making quality education accessible to all.
                  </p>
                  <div className="flex space-x-3">
                    <Link
                      href="https://www.facebook.com/share/158rCUDWBS/"
                      target="_blank"
                      className="flex items-center text-sm text-blue-600 hover:underline"
                    >
                      <Facebook className="h-4 w-4 mr-1" />
                      Facebook
                    </Link>
                    <Link
                      href="https://wa.me/9840034153"
                      target="_blank"
                      className="flex items-center text-sm text-green-600 hover:underline"
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      WhatsApp
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-all">
                <Image
                  src={images.founders.samir || "/placeholder.svg"}
                  alt="Samir Ghimire"
                  width={300}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">Samir Ghimire</h3>
                  <p className="text-blue-600 text-sm mb-3">Co-Founder</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Technology expert focused on creating innovative learning solutions for students.
                  </p>
                  <div className="flex space-x-3">
                    <Link
                      href="https://www.facebook.com/share/15tMWsuH76/"
                      target="_blank"
                      className="flex items-center text-sm text-blue-600 hover:underline"
                    >
                      <Facebook className="h-4 w-4 mr-1" />
                      Facebook
                    </Link>
                    <Link
                      href="https://wa.me/9840034153"
                      target="_blank"
                      className="flex items-center text-sm text-green-600 hover:underline"
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      WhatsApp
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Impact</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <p className="text-blue-100">Active Students</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-blue-100">Free Courses</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-blue-100">Districts Reached</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-blue-100">Student Satisfaction</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                We're proud of the impact we've made, but our journey is just beginning. With your support, we can reach
                even more students and communities.
              </p>
              <Button
                className="bg-white text-blue-700 hover:bg-gray-100"
                onClick={() => {
                  window.location.href = "/contact"
                }}
              >
                Support Our Mission
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Mission</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a student, educator, or supporter, there are many ways to get involved with EduWarn Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => {
                  window.location.href = "/contact"
                }}
              >
                Become a Volunteer
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  window.location.href = "/contact"
                }}
              >
                Partner With Us
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  window.location.href = "/contact"
                }}
              >
                Make a Donation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
