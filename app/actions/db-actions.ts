"use server"

import { seedDatabase } from "@/lib/seed-db"

export async function seedDatabaseAction() {
  try {
    const result = await seedDatabase()
    return { success: true, message: "Database seeded successfully" }
  } catch (error) {
    console.error("Error seeding database:", error)
    return { success: false, message: "Error seeding database" }
  }
}
