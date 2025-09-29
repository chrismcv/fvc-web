import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, Coffee, Calendar, Home, Clock, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Life Groups — Faith Vineyard Church",
  description:
    "Join a Life Group at Faith Vineyard Church in Comber. Small groups meeting in homes for Bible study, fellowship, and community.",
  keywords: "life groups, small groups, bible study, community, fellowship, comber church, connect groups",
}

export default function LifeGroupsPage() {
  const groupTypes = [
    {
      title: "Mixed Groups",
      description: "Groups for couples and singles of all ages",
      icon: Users,
      color: "from-primary to-primary-dark",
      details: [
        "Bible study and discussion",
        "Prayer and mutual support",
        "Social activities and meals",
        "Welcoming to newcomers",
      ],
    },
    {
      title: "Men's Groups",
      description: "Groups specifically for men to connect and grow",
      icon: Heart,
      color: "from-secondary to-secondary-dark",
      details: [
        "Honest conversations",
        "Practical faith discussions",
        "Accountability and support",
        "Regular social activities",
      ],
    },
    {
      title: "Women's Groups",
      description: "Groups for women to build friendships and faith",
      icon: Coffee,
      color: "from-accent to-accent-dark",
      details: ["Deep friendships", "Life stage discussions", "Prayer and encouragement", "Creative activities"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-warm-gray to-secondary/10 py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            Life Groups
          </h1>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8"></div>
          <p className="font-body text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Life Groups are the heart of our community. Small groups of 8-12 people meeting in homes across Comber and
            the surrounding area for friendship, Bible study, and mutual support.
          </p>
        </div>
      </section>

      {/* What Are Life Groups */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">What Are Life Groups?</h2>
              <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>

              <div className="space-y-6 font-body text-text-light leading-relaxed">
                <p>
                  Life Groups are where real community happens. They're small groups of people who meet regularly in
                  homes to study the Bible, pray together, share life, and support one another through all of life's ups
                  and downs.
                </p>

                <p>
                  Whether you're new to faith or have been following Jesus for years, Life Groups provide a safe space
                  to ask questions, grow in understanding, and build genuine friendships that last.
                </p>

                <p>
                  Most groups meet fortnightly in the evening, usually including a meal or refreshments. Each group has
                  its own personality, but all are committed to being welcoming, authentic, and supportive.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white font-body font-medium px-8 py-4 rounded-full"
                >
                  Find a Group
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-warm-gray/30 to-accent/10 border-2 border-light-gray/50 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl mb-6 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=300&width=400&text=Life+Group+Meeting"
                      alt="Life Group meeting in a home setting"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <blockquote className="font-body text-text-light italic text-center">
                    "Life Group has become like family to us. It's where we've found our closest friends and grown so
                    much in our faith together."
                  </blockquote>
                  <p className="font-body text-sm text-text-muted text-center mt-4">— Sarah & Mark, Comber</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Groups */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-warm-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">Types of Groups</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
            <p className="font-body text-lg text-text-light max-w-3xl mx-auto leading-relaxed">
              We have different types of Life Groups to suit different seasons of life and preferences. All are
              welcoming and focused on growing together in faith and friendship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupTypes.map((group, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all transform hover:-translate-y-2 bg-white border-2 border-light-gray/50 rounded-2xl group"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-br ${group.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                    >
                      <group.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold text-primary">{group.title}</h3>
                    </div>
                  </div>

                  <p className="font-body text-text-light leading-relaxed mb-6">{group.description}</p>

                  <ul className="space-y-3">
                    {group.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start font-body text-sm text-text-light">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">What to Expect</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-light-gray/50 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="font-headline text-xl font-bold text-primary mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-secondary" />
                  Typical Evening
                </h3>
                <ul className="space-y-3 font-body text-text-light">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>7:00 PM - Arrive, catch up over tea/coffee</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>7:30 PM - Bible study and discussion</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>8:30 PM - Prayer time</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-dark rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>9:00 PM - Social time and home</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-2 border-light-gray/50 rounded-2xl">
              <CardContent className="p-8">
                <h3 className="font-headline text-xl font-bold text-primary mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-3 text-secondary" />
                  Group Culture
                </h3>
                <ul className="space-y-3 font-body text-text-light">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Relaxed and informal atmosphere</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Questions and doubts welcome</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Confidential and supportive</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-dark rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>No pressure to participate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Groups */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-warm-gray via-background to-accent/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">Current Groups</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-6"></div>
            <p className="font-body text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
              Here are some of our current Life Groups. New groups start regularly, so if none of these suit your
              schedule, please get in touch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-light-gray/50 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-primary to-primary-dark w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-primary">Comber Mixed Group</h3>
                    <p className="font-body text-sm text-text-muted">All ages welcome</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center font-body text-text-light">
                    <Calendar className="w-4 h-4 mr-3 text-secondary" />
                    <span>Every other Tuesday, 7:30 PM</span>
                  </div>
                  <div className="flex items-center font-body text-text-light">
                    <MapPin className="w-4 h-4 mr-3 text-secondary" />
                    <span>Comber location</span>
                  </div>
                  <div className="flex items-center font-body text-text-light">
                    <Users className="w-4 h-4 mr-3 text-secondary" />
                    <span>8 members, room for more</span>
                  </div>
                </div>

                <p className="font-body text-sm text-text-light mb-4">
                  A friendly mixed group studying through the book of Acts. Great for newcomers to faith or the area.
                </p>

                <Button
                  variant="outline"
                  className="font-body font-medium border-2 border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-full bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-light-gray/50 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-secondary to-secondary-dark w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Coffee className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-primary">Newtownards Group</h3>
                    <p className="font-body text-sm text-text-muted">Young families focus</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center font-body text-text-light">
                    <Calendar className="w-4 h-4 mr-3 text-secondary" />
                    <span>Every other Thursday, 8:00 PM</span>
                  </div>
                  <div className="flex items-center font-body text-text-light">
                    <MapPin className="w-4 h-4 mr-3 text-secondary" />
                    <span>Newtownards area</span>
                  </div>
                  <div className="flex items-center font-body text-text-light">
                    <Users className="w-4 h-4 mr-3 text-secondary" />
                    <span>6 members, room for more</span>
                  </div>
                </div>

                <p className="font-body text-sm text-text-light mb-4">
                  Perfect for young families. Childcare often available, and we understand the challenges of parenting!
                </p>

                <Button
                  variant="outline"
                  className="font-body font-medium border-2 border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-full bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="font-body text-text-light mb-6">
              Don't see a group that fits your schedule or location? We're always looking to start new groups!
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary-dark text-white font-body font-medium px-8 py-4 rounded-full"
            >
              Start a New Group
            </Button>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-6">Ready to Join a Life Group?</h2>
          <p className="font-body text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Taking the step to join a Life Group is one of the best decisions you can make for your faith and
            friendships. We'd love to help you find the right group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-body font-medium text-lg px-8 py-4 rounded-full"
            >
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Get Connected
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-body font-medium text-lg px-8 py-4 rounded-full border-2 border-white bg-white/20 text-white hover:bg-white hover:text-primary transition-all"
            >
              <Link href="/gatherings">Visit on Sunday</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
