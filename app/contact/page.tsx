import { Mail, MapPin } from "lucide-react"
import ContactForm from "../components/contact-form"

export const metadata = {
  title: "Contact Us - Faith Vineyard Church",
  description: "Get in touch with Faith Vineyard Church in Comber. We'd love to hear from you!",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="font-body text-xl text-white/80 max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have questions, want to visit, or just want to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <p className="font-body text-lg text-text-light mb-8">
                  Feel free to reach out to us through any of the following methods:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-secondary/20">
                  <div className="w-12 h-12 bg-accent-green rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-primary mb-2">Email Us</h3>
                    <a
                      href="mailto:hello@faithvineyard.com"
                      className="font-body text-lg text-text-light hover:text-primary transition-colors"
                    >
                      hello@faithvineyard.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border-2 border-secondary/20">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-primary mb-2">Visit Us</h3>
                    <p className="font-body text-lg text-text-light mb-2">
                      <a
                        href="https://www.ardsandnorthdown.gov.uk/article/2210/Comber-Community-Centre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark underline"
                      >
                        Comber Community Centre
                      </a>
                      <br />
                      Comber, Northern Ireland
                    </p>
                    <p className="font-body text-base text-text-muted">
                      Sundays at 10:15 AM
                      <br />
                      Coffee from 10:00 AM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 rounded-2xl p-6 border-2 border-accent/20">
                <h3 className="font-headline text-xl font-bold text-primary mb-3">New to Faith Vineyard?</h3>
                <p className="font-body text-text-light">
                  If you're planning to visit us for the first time, we'd love to know! Drop us an email and let us know
                  you're coming. We'll make sure someone is ready to welcome you and answer any questions you might
                  have.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-secondary/20">
                <h2 className="font-headline text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
