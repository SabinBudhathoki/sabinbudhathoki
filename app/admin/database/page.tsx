"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { seedDatabaseAction } from "@/app/actions/db-actions"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DatabaseAdminPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleSeedDatabase = async () => {
    setLoading(true)
    try {
      const result = await seedDatabaseAction()
      setResult(result)
    } catch (error) {
      setResult({ success: false, message: "An error occurred" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Database Administration</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Seed Database</CardTitle>
              <CardDescription>
                Populate the database with initial course data. This will create subjects, modules, lessons, videos, and
                resources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-amber-600 mb-4">
                Warning: This will overwrite existing data with the same slugs/identifiers.
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSeedDatabase} disabled={loading} className="bg-blue-600 hover:bg-blue-700">
                {loading ? "Seeding Database..." : "Seed Database"}
              </Button>
            </CardFooter>
          </Card>

          {result && (
            <Card className={result.success ? "border-green-500" : "border-red-500"}>
              <CardHeader>
                <CardTitle className={result.success ? "text-green-600" : "text-red-600"}>
                  {result.success ? "Success" : "Error"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{result.message}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
