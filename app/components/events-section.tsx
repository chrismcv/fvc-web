import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EventsSection() {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-text-primary mb-4">What's Happening</h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Join us for upcoming events and gatherings throughout the week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="border-2 border-secondary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold text-primary">Every Sunday</span>
              </div>
              <CardTitle className="text-2xl font-heading">Sunday Gatherings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-light mb-4">
                Join us every Sunday for worship, teaching, and fellowship. Coffee from 10:00 AM, service starts at
                10:15 AM.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/gatherings">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-secondary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <span className="text-sm font-semibold text-primary">Weekly</span>
              </div>
              <CardTitle className="text-2xl font-heading">Life Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-light mb-4">
                Connect with others in smaller groups throughout the week for deeper relationships and spiritual growth.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/life-groups">
                  Find a Group <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
