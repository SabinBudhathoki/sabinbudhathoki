import { images } from "@/lib/images"

/**
 * Helper function to get image URL for a subject
 * Converts kebab-case slugs to camelCase for accessing the images object
 */
export function getSubjectImageUrl(slug: string) {
  // Convert slug to camelCase for subjects like "computer-science"
  const key = slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())

  // Check if the subject image exists in the images.subjects object
  if (images.subjects && images.subjects[key as keyof typeof images.subjects]) {
    return images.subjects[key as keyof typeof images.subjects]
  }

  // Fallback to placeholder
  return "/placeholder.svg?height=200&width=300"
}
