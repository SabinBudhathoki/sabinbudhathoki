import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ResourcesLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <section className="bg-red-600 text-white py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Skeleton className="h-10 w-[300px] mx-auto bg-red-500" />
            <Skeleton className="h-6 w-[500px] mx-auto mt-4 bg-red-500" />
            <div className="mt-8 max-w-md mx-auto relative">
              <Skeleton className="h-12 w-full bg-red-500" />
            </div>
          </div>
        </section>

        {/* Resources Navigation Skeleton */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="w-full">
              <Skeleton className="h-10 w-[400px] mb-6 bg-gray-200" />

              <div className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <Skeleton key={i} className="h-[200px] w-full bg-gray-200" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources Skeleton */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <Skeleton className="h-8 w-[250px] mb-8 bg-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <Skeleton key={i} className="h-[200px] w-full bg-gray-200" />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Skeleton */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Skeleton className="h-8 w-[400px] mx-auto mb-4 bg-gray-200" />
            <Skeleton className="h-6 w-[600px] mx-auto mb-8 bg-gray-200" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-10 w-[200px] mx-auto sm:mx-0 bg-gray-200" />
              <Skeleton className="h-10 w-[200px] mx-auto sm:mx-0 bg-gray-200" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
