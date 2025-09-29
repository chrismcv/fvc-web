import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative">
      {/* Full-width hero image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mt-[-200px] border-b-2 border-primary">
        <Image
          src="/images/community-hands.png"
          alt="Community gathering in circle with hands together"
          fill
          className="object-cover"
          priority
        />
        {/* Hero content overlay 
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light mb-6 leading-relaxed">
              A welcoming church family in the heart of Comber
            </p>
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join us for authentic worship, genuine community, and spiritual growth. Everyone belongs here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg shadow-lg"
              >
                <Link href="/gatherings">Join Us Sunday</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/95 hover:bg-white text-primary border-2 border-white font-semibold px-8 py-6 text-lg shadow-lg"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div> 
      </div> */}

      {/* Service info cards */}
      <div className="bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">Every Sunday</h3>
                <p className="text-text-light">Join us for weekly worship and fellowship</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">10:00 AM</h3>
                <p className="text-text-light">Coffee from 10:00 AM, Service starts at 10:15 AM</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">Comber</h3>
                <p className="text-text-light">
                  <a
                    href="https://www.ardsandnorthdown.gov.uk/article/2210/Comber-Community-Centre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    Comber Community Centre
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
