import { Button } from "@/components/ui/button"
import { Clock, MapPin, Coffee, Users, Music, Heart } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Sunday Gatherings - Faith Vineyard Church",
  description: "Join us for our Sunday gatherings at 10:15 AM in Comber. Everyone is welcome!",
}

export default function GatheringsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Sunday Gatherings</h1>
            <p className="font-body text-xl text-white/90 max-w-2xl mx-auto">
              Join us every Sunday as we worship together, learn from God's Word, and grow in community.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-secondary/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-accent-green rounded-2xl flex items-center justify-center mr-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="font-headline text-2xl font-bold text-primary">Service Times</h2>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-body text-lg text-text-light">
                  <strong className="text-primary">10:00 AM</strong> - Coffee and fellowship
                </p>
                <p className="font-body text-lg text-text-light">
                  <strong className="text-primary">10:15 AM</strong> - Service begins
                </p>
                <p className="font-body text-base text-text-muted italic">Services typically run until 11:30 AM</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-secondary/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mr-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="font-headline text-2xl font-bold text-primary">Location</h2>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-body text-lg text-text-light">
                  <a
                    href="https://www.ardsandnorthdown.gov.uk/article/2210/Comber-Community-Centre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark underline font-semibold"
                  >
                    Comber Community Centre
                  </a>
                </p>
                <p className="font-body text-base text-text-light">Comber, Northern Ireland</p>
                <p className="font-body text-base text-text-muted italic">Free parking available</p>
              </div>
            </div>
          </div>

        
        
        </div>
      </section>
    </div>
  )
}
