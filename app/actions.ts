"use server"

// Mock authentication action
export async function signIn(formData: FormData) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get("email")
  const password = formData.get("password")

  // Mock validation
  if (!email || !password) {
    return { error: "Please fill in all fields" }
  }

  return { success: true }
}

// Mock registration action
export async function register(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get("email")
  const password = formData.get("password")
  const name = formData.get("name")

  if (!email || !password || !name) {
    return { error: "Please fill in all fields" }
  }

  return { success: true }
}

// Mock course enrollment action
export async function enrollCourse(courseId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { success: true }
}

// Mock lesson completion action
export async function completeLesson(lessonId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { success: true }
}

// Mock contact form submission
export async function submitContactForm(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  if (!name || !email || !message) {
    return { error: "Please fill in all fields" }
  }

  return { success: true }
}
