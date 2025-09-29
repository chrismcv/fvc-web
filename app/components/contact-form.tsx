"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-2 border-secondary/20 rounded-2xl">
        <CardContent className="p-8 text-center">
          <div className="bg-gradient-to-br from-secondary to-secondary-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-headline text-2xl font-bold text-primary mb-4">Message Sent!</h3>
          <p className="font-body text-text-light leading-relaxed mb-6">
            Thank you for getting in touch! We've received your message and will respond as soon as possible, usually
            within 24 hours.
          </p>
          <Button
            onClick={() => setSubmitStatus("idle")}
            variant="outline"
            className="font-body font-medium border-2 border-secondary text-secondary hover:bg-secondary/10 px-6 py-3 rounded-full"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white border-2 border-light-gray/50 rounded-2xl">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block font-body font-medium text-primary mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 font-body text-text-primary bg-warm-gray/30 border-2 border-light-gray/50 rounded-xl focus:outline-none focus:border-accent focus:bg-white transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block font-body font-medium text-primary mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 font-body text-text-primary bg-warm-gray/30 border-2 border-light-gray/50 rounded-xl focus:outline-none focus:border-accent focus:bg-white transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block font-body font-medium text-primary mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 font-body text-text-primary bg-warm-gray/30 border-2 border-light-gray/50 rounded-xl focus:outline-none focus:border-accent focus:bg-white transition-all resize-vertical"
              placeholder="Tell us how we can help, ask a question, or just say hello..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Sending Message...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </div>
              )}
            </Button>
          </div>

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
              <p className="font-body text-red-700">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </p>
            </div>
          )}
        </form>

        {/* Privacy Note */}
        <div className="mt-6 pt-6 border-t border-light-gray/30">
          <p className="font-body text-sm text-text-muted leading-relaxed">
            <strong>Privacy:</strong> Your information is kept confidential and will only be used to respond to your
            message. We never share your details with third parties.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
