import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"
import EventsList from "../components/events-list"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Heart, Coffee } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Events — Faith Vineyard Church",
  description:
    "Upcoming events at Faith Vineyard Church in Comber. Join us for Sunday gatherings, community events, Alpha courses, and family activities.",
  keywords:
    "events, faith vineyard church, comber, community events, sunday gathering, alpha course, family activities",
}

export default function EventsPage() {
  const eventTypes = [
    {
      icon: Calendar,
      title: "Sunday Gatherings",
      description: "Weekly worship and community",
      color: "from-primary to-primary-dark",
    },
    {
      icon: Coffee,
      title: "Community Events",
      description: "Open to everyone in Comber",
      color: "from-secondary to-secondary-dark",
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Deeper connections and growth",
      color: "from-accent to-accent-dark",
    },
    {
      icon: Heart,
      title: "Family Activities",
      description: "Fun for all ages",
      color: "from-secondary-dark to-primary",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-warm-gray to-accent-light/20 py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-8">
            What's Happening
          </h1>

          <p className="font-body text-xl text-text-light max-w-3xl mx-auto leading-relaxed mb-8">
            There's always something happening at Faith Vineyard! From Sunday gatherings to community events, we'd love
            to see you at any of our upcoming activities in Comber.
          </p>

          <div className="w-16 h-1 bg-accent rounded-full mx-auto"></div>
        </div>
      </section>

      {/* Event Types Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">Types of Events</h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
            <p className="font-body text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
              We host a variety of events designed to build community, explore faith, and have fun together in Comber.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((type, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all transform hover:-translate-y-1 bg-white border-2 border-light-gray/50 rounded-2xl group"
              >
                <CardContent className="p-6">
                  <div
                    className={`bg-gradient-to-br ${type.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary mb-2">{type.title}</h3>
                  <p className="font-body text-sm text-text-light">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-warm-gray">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">Upcoming Events</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
            <p className="font-body text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
              Mark your calendar and join us for these upcoming events in Comber. Everyone is welcome!
            </p>
          </div>

          <EventsList />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-light-gray/50 rounded-3xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="bg-gradient-to-br from-secondary to-secondary-dark w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" fill="currentColor" />
              </div>

              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6">Want to Stay Updated?</h3>
              <p className="font-body text-lg text-text-light leading-relaxed mb-8 max-w-2xl mx-auto">
                The best way to stay informed about our events in Comber is to join our community. We'll make sure you
                never miss out on what's happening!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-4 rounded-full"
                >
                  <Link href="/contact">Get Event Updates</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-body font-medium border-2 border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 rounded-full bg-transparent"
                >
                  <Link href="/gatherings">Join Our Gatherings</Link>
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
