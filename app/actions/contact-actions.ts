"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  if (!name || !email || !message) {
    return { error: "Please fill in all fields" }
  }

  // In a real application, you would store the message in a database and/or send an email
  return { success: true, message: "Message sent successfully!" }
}
