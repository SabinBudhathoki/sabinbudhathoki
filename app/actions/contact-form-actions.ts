"use server"

import { submitContactForm } from "@/app/actions/contact-actions"

export async function handleContactFormSubmission(formData: FormData) {
  await submitContactForm(formData)
  // Simulate form submission delay
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return { success: true, message: "Form submitted successfully!" }
}
