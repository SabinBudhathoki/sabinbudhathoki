import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Video, ImageIcon, BookOpen } from "lucide-react"

export default function AdminGuide() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Admin Guide: Managing Content</h1>
      <p className="text-lg text-gray-600">
        This guide will help you understand how to add, edit, and manage content on the EduWarn Nepal platform.
      </p>

      <Tabs defaultValue="lessons">
        <TabsList className="mb-6">
          <TabsTrigger value="lessons">Managing Lessons</TabsTrigger>
          <TabsTrigger value="blog">Managing Blog</TabsTrigger>
          <TabsTrigger value="media">Managing Media</TabsTrigger>
        </TabsList>

        <TabsContent value="lessons" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Adding New Lessons
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To add a new lesson to the platform:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Navigate to the Admin Dashboard and select the "Content" tab</li>
                <li>In the "Manage Lessons" section, fill out the "Add New Lesson" form</li>
                <li>Enter a descriptive title for your lesson</li>
                <li>Select the appropriate subject and difficulty level</li>
                <li>
                  Add your lesson content in the content editor. You can use HTML formatting for:
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      Headings: <code>&lt;h2&gt;, &lt;h3&gt;</code>
                    </li>
                    <li>
                      Paragraphs: <code>&lt;p&gt;</code>
                    </li>
                    <li>
                      Lists: <code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code>
                    </li>
                    <li>
                      Emphasis: <code>&lt;strong&gt;, &lt;em&gt;</code>
                    </li>
                    <li>
                      Images: <code>&lt;img src="..." alt="..."&gt;</code>
                    </li>
                  </ul>
                </li>
                <li>Add a YouTube video ID if you have a related video (optional)</li>
                <li>Click "Add Lesson" to publish your lesson</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 mr-2" />
                Adding Videos to Lessons
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To add YouTube videos to your lessons:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Find the YouTube video you want to include</li>
                <li>
                  Extract the video ID from the URL:
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      For example, in <code>https://www.youtube.com/watch?v=dQw4w9WgXcQ</code>
                    </li>
                    <li>
                      The video ID is <code>dQw4w9WgXcQ</code>
                    </li>
                  </ul>
                </li>
                <li>Enter this ID in the "YouTube Video ID" field when creating or editing a lesson</li>
                <li>The video will be embedded in the lesson page automatically</li>
              </ol>
              <p className="text-sm text-gray-500 mt-4">
                Note: Make sure you have permission to use the video content in your lessons.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Organizing Course Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To organize your lessons into a coherent course structure:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Create multiple lessons related to a specific subject</li>
                <li>Use consistent naming and difficulty progression</li>
                <li>Group related lessons under the same subject category</li>
                <li>Arrange lessons in a logical sequence from basic to advanced concepts</li>
                <li>Create prerequisite relationships between lessons where appropriate</li>
              </ol>
              <p className="text-sm text-gray-500 mt-4">
                A well-structured course helps students navigate through the material in a logical progression.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Managing Blog Posts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To add and manage blog posts:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Navigate to the Admin Dashboard and select the "Content" tab</li>
                <li>Switch to the "Manage Blog" tab</li>
                <li>Fill out the "Add New Blog Post" form with your title, category, and author information</li>
                <li>Write your blog content in the content editor, using HTML formatting as needed</li>
                <li>Click "Add Blog Post" to publish</li>
              </ol>
              <p className="mt-4">To edit or delete existing blog posts:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Scroll down to the "Existing Blog Posts" section</li>
                <li>Find the post you want to modify</li>
                <li>Click "Edit" to update the content or "Delete" to remove it</li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ImageIcon className="h-5 w-5 mr-2" />
                Managing Images and Media
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>To add images and other media to your content:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Prepare your images in an appropriate format (JPG, PNG) and size</li>
                <li>Upload your images to a hosting service or directly to the platform</li>
                <li>
                  Insert images into your content using HTML:
                  <pre className="bg-gray-100 p-2 rounded-md mt-2 text-sm">
                    &lt;img src="https://your-image-url.jpg" alt="Description of image" width="500" height="300"&gt;
                  </pre>
                </li>
                <li>For YouTube videos, use the video ID as described in the "Adding Videos to Lessons" section</li>
              </ol>
              <p className="text-sm text-gray-500 mt-4">Best practices for images:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                <li>Use descriptive file names</li>
                <li>Optimize images for web (compress to reduce file size)</li>
                <li>Always include alt text for accessibility</li>
                <li>Maintain consistent image dimensions throughout your content</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
