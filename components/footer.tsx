import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import { images } from "@/lib/images"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={images.logo || "/placeholder.svg"}
                alt="EduWarn Nepal Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="font-bold text-xl">EduWarn Nepal</span>
            </Link>
            <p className="text-gray-400">
              Providing free, quality education in Science, Computer Science, Technology, Mathematics, and Logic.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61575318204998&rdid=bvVf4W2orIJfp8Uq"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com/@BudhathokiMoon"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/eduwarn_nepal/" target="_blank" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com/@eduwarnnepal?si=KB2E_WHdjfrVqaSD"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/ebooks" className="text-gray-400 hover:text-white">
                  E-Books
                </Link>
              </li>
              <li>
                <Link href="/resources/videos" className="text-gray-400 hover:text-white">
                  Video Tutorials
                </Link>
              </li>
              <li>
                <Link href="/resources/practice" className="text-gray-400 hover:text-white">
                  Practice Exercises
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-400 hover:text-white">
                  Discussion Forum
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-400 hover:text-white">
                  Career Guidance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest courses and resources.</p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white focus:ring-blue-500"
              />
              <Button className="w-full bg-red-600 hover:bg-red-700">Subscribe</Button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              <Mail className="h-4 w-4 inline-block mr-2" />
              Contact us: info@eduwarnnepal.org
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} EduWarn Nepal. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
