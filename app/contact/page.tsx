"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { LoadingButton } from "@/components/loading-button"
import { handleContactFormSubmission } from "@/app/actions/contact-form-actions"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-xl text-red-100 max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">For general inquiries:</p>
                  <p className="text-blue-600">info@eduwarnnepal.org</p>
                  <p className="text-gray-600 mt-2 mb-2">For support:</p>
                  <p className="text-blue-600">support@eduwarnnepal.org</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2">Main Office:</p>
                  <p className="text-red-600">+977 1 4123456</p>
                  <p className="text-gray-600 mt-2 mb-2">Support Hotline:</p>
                  <p className="text-red-600">+977 1 4123457</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Visit Us</h3>
                  <p className="text-gray-600 mb-2">Our Office:</p>
                  <p className="text-gray-600">
                    Kumaripati, Lalitpur
                    <br />
                    Bagmati Province
                    <br />
                    Nepal
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-bold mb-2">Office Hours</h3>
                  <p className="text-gray-600 mb-2">Monday - Friday:</p>
                  <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600 mt-2 mb-2">Saturday:</p>
                  <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                  <p className="text-gray-600 mt-2 mb-2">Sunday:</p>
                  <p className="text-gray-600">Closed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Send Us a Message</h2>

              {isSubmitted ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <ContactForm />
              )}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Find Us</h2>
            <div className="h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Interactive Map Would Be Embedded Here</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Frequently Asked Questions</h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Is EduWarn Nepal completely free?</h3>
                  <p className="text-gray-600">
                    Yes, all our core educational content is completely free. We believe in making quality education
                    accessible to everyone.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How can I contribute to EduWarn Nepal?</h3>
                  <p className="text-gray-600">
                    You can contribute by volunteering as a content creator, translator, or mentor. You can also support
                    us through donations or by spreading the word about our platform.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Do you offer certificates for completed courses?</h3>
                  <p className="text-gray-600">
                    Yes, we offer digital certificates for most of our courses upon successful completion of all
                    requirements and assessments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can I access the content offline?</h3>
                  <p className="text-gray-600">
                    Many of our resources are downloadable for offline use. We're also working on a mobile app that will
                    enhance offline capabilities.
                  </p>
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

// Update contact form with LoadingButton
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Your Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Your Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Select value={formData.subject} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Inquiry</SelectItem>
            <SelectItem value="support">Technical Support</SelectItem>
            <SelectItem value="feedback">Feedback</SelectItem>
            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Your Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          rows={6}
          required
        />
      </div>

      <LoadingButton
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700"
        action={handleContactFormSubmission}
        loadingText="Sending..."
        successText="Message Sent!"
      >
        Send Message
      </LoadingButton>
    </form>
  )
}
