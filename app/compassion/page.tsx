import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Hand as Hands, Users, Phone, Mail, ShoppingBasket, Home, MessageCircle, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Compassion & Care — Faith Vineyard Church",
  description:
    "Community support, food assistance, pastoral care, and prayer ministry at Faith Vineyard Church in Comber. We're here to help with compassion and care.",
  keywords: "community support, food bank, pastoral care, prayer ministry, help, assistance, comber community",
}

export default function CompassionPage() {
  const supportServices = [
    {
      title: "Food Support",
      icon: ShoppingBasket,
      color: "from-secondary to-secondary-dark",
      description: "Practical help when you need it most",
      details: [
        "Emergency food parcels available",
        "No questions asked, no forms to fill",
        "Fresh produce when available",
        "Dietary requirements accommodated",
        "Delivered with dignity and respect",
      ],
    },
    {
      title: "Pastoral Care",
      icon: Heart,
      color: "from-primary to-primary-dark",
      description: "Someone to walk alongside you",
      details: [
        "Confidential listening and support",
        "Hospital and home visits",
        "Bereavement care and comfort",
        "Life transition support",
        "No pressure, just presence",
      ],
    },
    {
      title: "Prayer Ministry",
      icon: Hands,
      color: "from-accent to-accent-dark",
      description: "Bringing your concerns to God",
      details: [
        "Prayer for any situation or need",
        "Completely confidential",
        "Available in person or by request",
        "No judgment, just compassion",
        "Ongoing prayer support available",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-warm-gray py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-16 w-24 h-24 bg-secondary/8 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/8 rounded-full blur-xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" fill="currentColor" />
            </div>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-8">
            Compassion & Care
          </h1>

          <p className="font-body text-xl text-text-light max-w-3xl mx-auto leading-relaxed mb-8">
            Everyone goes through difficult times. Whether you're facing a crisis, need someone to talk to, or could use
            some practical support, we're here for you - no strings attached.
          </p>

          <div className="w-16 h-1 bg-accent rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-8">We're Here to Help</h2>

            <div className="max-w-3xl mx-auto">
              <p className="font-body text-lg text-text-light leading-relaxed mb-8">
                At Faith Vineyard Church, we believe in showing God's love through practical action and genuine care.
                Whether you're part of our church family or not, if you need support, we want to help.
              </p>

              <Card className="bg-gradient-to-br from-warm-gray/50 to-white border border-light-gray/30 rounded-2xl">
                <CardContent className="p-8">
                  <p className="font-body text-text-light leading-relaxed italic">
                    "We don't help because we have to - we help because we care. There's no judgment here, no
                    conditions, and no expectations. Sometimes we all need a helping hand, and we're honored to be that
                    for our community."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-gradient-to-b from-background to-warm-gray">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">How We Can Support You</h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
            <p className="font-body text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
              We offer several ways to provide support, always with dignity, respect, and complete confidentiality.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {supportServices.map((service, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-light-gray/30 rounded-2xl hover:shadow-lg transition-all"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-headline text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="font-body text-text-light mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 text-left">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-secondary/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="font-body text-sm text-text-light">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Partnerships */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">Community Partnerships</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8"></div>
            <p className="font-body text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              We work alongside other organizations in Comber and the wider Ards area to ensure no one falls through the
              cracks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-warm-gray/30 to-white border border-light-gray/30 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-secondary to-secondary-dark w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-primary">Local Connections</h3>
                </div>

                <p className="font-body text-text-light leading-relaxed mb-4">
                  We partner with local organizations, schools, and community groups to identify needs and coordinate
                  support across Comber and surrounding areas.
                </p>

                <ul className="space-y-2 font-body text-sm text-text-light">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Comber community organizations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Local schools and youth services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Ards and North Down Council initiatives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-white border border-light-gray/30 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-primary">Referral Network</h3>
                </div>

                <p className="font-body text-text-light leading-relaxed mb-4">
                  Sometimes the best help we can offer is connecting you with the right specialist support. We maintain
                  relationships with professional services and can help you access the right resources.
                </p>

                <ul className="space-y-2 font-body text-sm text-text-light">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Mental health and counseling services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Citizens Advice and benefits support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Housing and debt advice services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Get Support */}
      <section className="py-20 bg-gradient-to-br from-warm-gray via-background to-secondary/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">Getting Support</h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
            <p className="font-body text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
              Reaching out for help can feel difficult, but we've tried to make it as simple and comfortable as
              possible.
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border border-light-gray/30 rounded-2xl mb-12">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-6">Get in Touch</h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center font-body text-text-light">
                      <Phone className="w-5 h-5 mr-4 text-secondary" />
                      <div>
                        <p className="font-medium">Call us</p>
                        <p className="text-sm text-text-muted">+44 28 9187 0000</p>
                      </div>
                    </div>

                    <div className="flex items-center font-body text-text-light">
                      <Mail className="w-5 h-5 mr-4 text-secondary" />
                      <div>
                        <p className="font-medium">Email us</p>
                        <p className="text-sm text-text-muted">care@faithvineyard.church</p>
                      </div>
                    </div>

                    <div className="flex items-center font-body text-text-light">
                      <MessageCircle className="w-5 h-5 mr-4 text-secondary" />
                      <div>
                        <p className="font-medium">Visit us</p>
                        <p className="text-sm text-text-muted">Sunday mornings or by arrangement</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-secondary hover:bg-secondary-dark text-white font-body font-medium px-8 py-4 rounded-full w-full md:w-auto"
                  >
                    <Link href="/contact">Contact Us for Support</Link>
                  </Button>
                </div>

                <div className="bg-warm-gray/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-primary mr-3" />
                    <h4 className="font-headline text-lg font-bold text-primary">Your Privacy Matters</h4>
                  </div>

                  <div className="space-y-3 font-body text-sm text-text-light">
                    <p>• All conversations are completely confidential</p>
                    <p>• We never share your information without permission</p>
                    <p>• No judgment, no conditions, no strings attached</p>
                    <p>• You can remain anonymous if you prefer</p>
                    <p>• Support is available regardless of faith or background</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Card className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-light-gray/30 rounded-2xl inline-block">
              <CardContent className="p-6">
                <p className="font-body text-text-light leading-relaxed italic max-w-md">
                  <strong>Remember:</strong> Asking for help is a sign of strength, not weakness. We're honored to walk
                  alongside you during difficult times.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/90 backdrop-blur-sm border-2 border-primary/20 rounded-2xl">
            <CardContent className="p-8 text-center">
              <div className="bg-gradient-to-br from-primary to-primary-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-headline text-2xl font-bold text-primary mb-4">Need Immediate Help?</h3>
              <p className="font-body text-text-light leading-relaxed mb-6 max-w-2xl mx-auto">
                If you're in crisis or need urgent support, please don't hesitate to reach out. We have people available
                to help, and we can connect you with emergency services if needed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-4 rounded-full"
                >
                  Call Now: +44 28 9187 0000
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-body font-medium border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 rounded-full bg-transparent"
                >
                  <Link href="/contact">Send Message</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
