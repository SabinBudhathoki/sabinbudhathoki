import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AdminGuide from "@/app/admin/guide"

export default function AdminGuidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <AdminGuide />
      </main>

      <Footer />
    </div>
  )
}
