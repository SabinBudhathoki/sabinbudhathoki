"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Plus, Edit, Trash2, Video } from "lucide-react"
import { addLesson, addBlogPost } from "@/lib/actions"

export default function ContentManager() {
  const [activeTab, setActiveTab] = useState("lessons")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  // Lesson form state
  const [lessonForm, setLessonForm] = useState({
    title: "",
    subject: "",
    level: "",
    content: "",
    videoUrl: "",
  })

  // Blog form state
  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  })

  // Mock data for existing lessons
  const [lessons] = useState([
    { id: "1", title: "Introduction to Calculus", subject: "Mathematics", level: "Intermediate" },
    { id: "2", title: "Newton's Laws of Motion", subject: "Physics", level: "Beginner" },
    { id: "3", title: "Introduction to Programming", subject: "Computer Science", level: "Beginner" },
  ])

  // Mock data for existing blog posts
  const [blogPosts] = useState([
    { id: "1", title: "Tips for Effective Studying", author: "Sabin Budhathoki", category: "Study Tips" },
    { id: "2", title: "The Future of Education in Nepal", author: "Samir Ghimire", category: "Education" },
  ])

  const handleLessonSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData()
      Object.entries(lessonForm).forEach(([key, value]) => {
        formData.append(key, value)
      })

      const result = await addLesson(formData)

      if (result.success) {
        setMessage({ type: "success", text: result.message })
        // Reset form
        setLessonForm({
          title: "",
          subject: "",
          level: "",
          content: "",
          videoUrl: "",
        })
      } else {
        setMessage({ type: "error", text: result.error || "Failed to add lesson" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred" })
    } finally {
      setIsLoading(false)
    }
  }

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData()
      Object.entries(blogForm).forEach(([key, value]) => {
        formData.append(key, value)
      })

      const result = await addBlogPost(formData)

      if (result.success) {
        setMessage({ type: "success", text: result.message })
        // Reset form
        setBlogForm({
          title: "",
          content: "",
          author: "",
          category: "",
        })
      } else {
        setMessage({ type: "error", text: result.error || "Failed to add blog post" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="lessons" onValueChange={setActiveTab} value={activeTab}>
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
          <TabsTrigger value="lessons">Manage Lessons</TabsTrigger>
          <TabsTrigger value="blog">Manage Blog</TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Add New Lesson
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLessonSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      Lesson Title
                    </label>
                    <Input
                      id="title"
                      value={lessonForm.title}
                      onChange={(e) => setLessonForm({ ...lessonForm, title: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Select
                      value={lessonForm.subject}
                      onValueChange={(value) => setLessonForm({ ...lessonForm, subject: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="logic">Logic</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="level" className="text-sm font-medium">
                      Level
                    </label>
                    <Select
                      value={lessonForm.level}
                      onValueChange={(value) => setLessonForm({ ...lessonForm, level: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="videoUrl" className="text-sm font-medium">
                      YouTube Video ID
                    </label>
                    <div className="flex gap-2">
                      <Input
                        id="videoUrl"
                        value={lessonForm.videoUrl}
                        onChange={(e) => setLessonForm({ ...lessonForm, videoUrl: e.target.value })}
                        placeholder="e.g. dQw4w9WgXcQ"
                      />
                      <Button type="button" variant="outline" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Enter the YouTube video ID (e.g., dQw4w9WgXcQ from https://www.youtube.com/watch?v=dQw4w9WgXcQ)
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="content" className="text-sm font-medium">
                    Lesson Content
                  </label>
                  <Textarea
                    id="content"
                    value={lessonForm.content}
                    onChange={(e) => setLessonForm({ ...lessonForm, content: e.target.value })}
                    rows={10}
                    placeholder="Enter the lesson content here. You can use HTML for formatting."
                    required
                  />
                  <p className="text-xs text-gray-500">
                    You can use HTML tags for formatting (e.g., &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, etc.)
                  </p>
                </div>

                {message && (
                  <div
                    className={`p-3 rounded-md ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                  >
                    {message.text}
                  </div>
                )}

                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Add Lesson"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Lessons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-gray-500">
                        {lesson.subject} • {lesson.level}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Add New Blog Post
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBlogSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="blog-title" className="text-sm font-medium">
                      Blog Title
                    </label>
                    <Input
                      id="blog-title"
                      value={blogForm.title}
                      onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                    <Select
                      value={blogForm.category}
                      onValueChange={(value) => setBlogForm({ ...blogForm, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="study-tips">Study Tips</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="career">Career Guidance</SelectItem>
                        <SelectItem value="news">News & Updates</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="author" className="text-sm font-medium">
                    Author
                  </label>
                  <Input
                    id="author"
                    value={blogForm.author}
                    onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="blog-content" className="text-sm font-medium">
                    Blog Content
                  </label>
                  <Textarea
                    id="blog-content"
                    value={blogForm.content}
                    onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                    rows={10}
                    placeholder="Enter the blog content here. You can use HTML for formatting."
                    required
                  />
                  <p className="text-xs text-gray-500">
                    You can use HTML tags for formatting (e.g., &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, etc.)
                  </p>
                </div>

                {message && (
                  <div
                    className={`p-3 rounded-md ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                  >
                    {message.text}
                  </div>
                )}

                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Add Blog Post"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-md">
                    <div>
                      <h3 className="font-medium">{post.title}</h3>
                      <p className="text-sm text-gray-500">
                        By {post.author} • {post.category}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
