"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  try {
    await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>",
      to: "even.berhane2018@gmail.com",
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })
    return { success: true }
  } catch (error) {
    return { success: false, error: "Failed to send email" }
  }
}

