"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, BookOpen, FileText, Users, Phone, LogIn } from "lucide-react"
import LanguageToggle from "@/components/language-toggle"
import SearchBar from "@/components/search-bar"
import { images } from "@/lib/images"
import { signIn } from "@/lib/actions"

export default function Navbar() {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await signIn(new FormData(e.target as HTMLFormElement))
      if (result.success) {
        setMessage({ type: "success", text: "Signed in successfully!" })
        setTimeout(() => {
          setIsSignInOpen(false)
          setMessage(null)
        }, 2000)
      } else {
        setMessage({ type: "error", text: result.error || "Sign in failed" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                  <Image
                    src={images.logo || "/placeholder.svg"}
                    alt="EduWarn Nepal Logo"
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                  <span>EduWarn Nepal</span>
                </Link>
                <div className="grid gap-4">
                  <Link href="/courses" className="flex items-center gap-2 text-lg font-medium">
                    <BookOpen className="h-5 w-5" />
                    Courses
                  </Link>
                  <Link href="/resources" className="flex items-center gap-2 text-lg font-medium">
                    <FileText className="h-5 w-5" />
                    Resources
                  </Link>
                  <Link href="/blog" className="flex items-center gap-2 text-lg font-medium">
                    <FileText className="h-5 w-5" />
                    Blog
                  </Link>
                  <Link href="/about" className="flex items-center gap-2 text-lg font-medium">
                    <Users className="h-5 w-5" />
                    About Us
                  </Link>
                  <Link href="/contact" className="flex items-center gap-2 text-lg font-medium">
                    <Phone className="h-5 w-5" />
                    Contact
                  </Link>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Button className="w-full" onClick={() => setIsSignInOpen(true)}>
                    Sign In
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setIsRegisterOpen(true)}>
                    Register
                  </Button>
                </div>
                <div className="mt-4">
                  <LanguageToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src={images.logo || "/placeholder.svg"}
              alt="EduWarn Nepal Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="font-bold text-xl hidden sm:inline-block">EduWarn Nepal</span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                  <Link
                    href="/courses/physics"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-gray-100"
                  >
                    <div className="font-medium">Physics</div>
                    <div className="text-sm text-gray-500">Mechanics, Optics, Electromagnetism</div>
                  </Link>
                  <Link
                    href="/courses/computer-science"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-gray-100"
                  >
                    <div className="font-medium">Computer Science</div>
                    <div className="text-sm text-gray-500">Programming, Web Dev, AI</div>
                  </Link>
                  <Link
                    href="/courses/technology"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-gray-100"
                  >
                    <div className="font-medium">Technology</div>
                    <div className="text-sm text-gray-500">Emerging Tech, Digital Skills</div>
                  </Link>
                  <Link
                    href="/courses/mathematics"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-gray-100"
                  >
                    <div className="font-medium">Mathematics</div>
                    <div className="text-sm text-gray-500">Algebra, Calculus, Statistics</div>
                  </Link>
                  <Link
                    href="/courses/logic"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-gray-100"
                  >
                    <div className="font-medium">Logic</div>
                    <div className="text-sm text-gray-500">Critical Thinking, Problem Solving</div>
                  </Link>
                  <Link
                    href="/courses"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-gray-100"
                  >
                    <div className="font-medium text-blue-600">View All Courses</div>
                    <div className="text-sm text-gray-500">Browse our complete catalog</div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <Link
                    href="/resources/ebooks"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-gray-100"
                  >
                    <div className="font-medium">E-Books</div>
                    <div className="text-sm text-gray-500">Downloadable textbooks and guides</div>
                  </Link>
                  <Link
                    href="/resources/videos"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-gray-100"
                  >
                    <div className="font-medium">Video Tutorials</div>
                    <div className="text-sm text-gray-500">Visual learning materials</div>
                  </Link>
                  <Link
                    href="/resources/practice"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-gray-100"
                  >
                    <div className="font-medium">Practice Exercises</div>
                    <div className="text-sm text-gray-500">Interactive problems and solutions</div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <SearchBar />

          <LanguageToggle />

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setIsSignInOpen(true)}>
              <LogIn className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => setIsRegisterOpen(true)}>
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Sign In</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsSignInOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <form onSubmit={handleSignIn}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-2 border rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full p-2 border rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {message && (
                  <p className={`text-sm ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
                    {message.text}
                  </p>
                )}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>

                <p className="text-sm text-center">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
                    onClick={() => {
                      setIsSignInOpen(false)
                      setIsRegisterOpen(true)
                    }}
                  >
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create Account</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsRegisterOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <form>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full p-2 border rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="register-email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-2 border rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="register-password" className="text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="register-password"
                    name="password"
                    type="password"
                    required
                    className="w-full p-2 border rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Register
                </Button>

                <p className="text-sm text-center">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
                    onClick={() => {
                      setIsRegisterOpen(false)
                      setIsSignInOpen(true)
                    }}
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}
