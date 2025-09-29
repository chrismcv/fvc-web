import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, ExternalLink, BookOpen, Play } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us — Faith Vineyard Church",
  description:
    "Learn about Faith Vineyard Church in Comber - our story, vision, values, and Vineyard UK affiliation. A welcoming church family rooted in community.",
  keywords: "about, faith vineyard, comber church, vineyard uk, church plant, community, vision, values",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-background py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            About Us
          </h1>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8"></div>
          <p className="font-body text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            We're Faith Vineyard Church - a new church family in Comber, excited to be part of what God is doing in this
            community. Our story is still being written, and we'd love for you to be part of it.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">Our Story</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8"></div>
            <p className="font-headline text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
              Hello! Faith Vineyard is a new church in Comber, County Down! We love this part of the world and we are so
              excited to be on this adventure!
            </p>
          </div>



          {/* Trevor and Katie's Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-6">Trevor & Katie Wilson</h3>

              <div className="space-y-6 font-body text-lg text-text-light leading-relaxed">
                <p>
                  Trevor and Katie Wilson were part of Belfast City Vineyard Church for many years, where they were both
                  part of the leadership team and Katie was Children's Pastor. They always had a dream in their hearts
                  to church plant and a couple of years ago they felt God was calling them to somewhere new.
                </p>

                <p>
                  Through a number of dreams and prophetic words it became clear that God was speaking about planting a
                  new Vineyard church in Comber. They gathered a team, who began to meet and pray in 2024 and in Autumn
                  2025, Faith Vineyard Church began!
                </p>

                <p>
                  We believe God has something amazing for the Comber area and we just can't wait to be part of what He
                  is doing there. We want to be a relaxed, friendly place where everyone from the youngest to the oldest
                  gets to play! We want to be a church family that actually feels like family. We long to see faith grow
                  amongst the people here and we would love you to be part of our story!
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/katie-and-trevor.jpeg"
                  alt="Family of Faith - people gathering together"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">Our Vision</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8"></div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-light-gray/50 rounded-2xl p-8 lg:p-12">
            <p className="font-body text-lg text-text-light leading-relaxed">
              Faith Vineyard Church exists to be a worshipping community in Comber / Ards that welcomes people in and
              introduces them to life-changing faith in Jesus. We want to see the people of this area encounter God in a
              way that is transformational in hearts, homes and throughout the community.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section id="vision" className="py-16 lg:py-24 bg-gradient-to-b from-background to-warm-gray">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="space-y-24">
            {/* Family of Faith */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6">Family of Faith</h3>
                <p className="font-body text-lg text-text-light leading-relaxed">
                  To help us live a life of faith we want to prioritise spending time with God and finding people to
                  come alongside and walk through life with. We are a multigenerational family where everybody gets to
                  play. We want to do life together in a way that allows us all to grow in faith as we centre our lives
                  around what Jesus has done for us. Faith Vineyard is a place where we want to grow in faith as we meet
                  together, have fun together, pray for and speak life over each other. We prioritise being in God's
                  presence and word together. We want to be a place where people can be truly themselves whatever the
                  season and discover what they are made for. We want to love God in a way that makes an impact as we
                  meet people in the everyday activities of life, serving in a way that makes God visible and inviting
                  new friends to gather round the table as part of our family of faith.
                </p>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/worship.jpeg"
                    alt="Family of Faith - people gathering together"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Living by Faith */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6">Living by Faith</h3>
                <div className="mb-6 p-4 bg-warm-gray/30 rounded-xl">
                  <p className="font-headline text-text-light italic">
                    "For we live by faith, not by sight." - 2 Corinthians 5:7
                  </p>
                </div>
                <p className="font-body text-lg text-text-light leading-relaxed">
                  We want to be a community who look at people, places and situations through eyes of faith. We believe
                  that he has planted us here in Comber for a purpose. As we worship here we believe that the atmosphere
                  in this place will change. God has something amazing for this area and we want to step into that with
                  courage. We want to be a family of faith who see things from a Kingdom perspective and in turn prays
                  that into reality where he has placed us. We want to look past how things might seem to appear and
                  instead look toward where God is leading. We want to see with eyes of faith declaring His truth and
                  inviting the kingdom to come because we have a heavenly hope and we are convinced of what is true.
                </p>
              </div>

              <div className="relative lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/fvc-image-1.jpg"
                    alt="Living by Faith - praying hands"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Rooted in Faith */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6">Rooted in Faith</h3>
                <p className="font-body text-lg text-text-light leading-relaxed">
                  We know that faith transforms us. When we are spiritually rooted in Christ, we become firmly grounded
                  in our faith. We want to be a church where through discipleship and friendship, our faith is formed
                  and rooted deeply. We need the power of God to be active in our lives, keeping us grounded in the
                  truth and reminding us of our true identity. We want each person to know what it is to cultivate a
                  vibrant and intimate relationship with Him, through personal connection with God, spending time in
                  prayer, studying His Word, and seeking His presence and the power of the Holy Spirit in all aspects of
                  our lives.
                </p>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/kids.jpeg"
                    alt="Rooted in Faith - deep roots"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Vineyard Affiliation Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-warm-gray via-background to-accent-light/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">Part of Something Bigger</h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-2 border-light-gray/50 rounded-2xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-primary mb-4">Vineyard UK & Ireland</h3>
                  <p className="font-body text-text-light leading-relaxed mb-6">
                    We're proud to be part of the Vineyard family of churches across the UK and Ireland. This means
                    we're connected to a movement of churches that share our values of authentic worship, genuine
                    community, and caring for those in need.
                  </p>
                  <p className="font-body text-text-light leading-relaxed mb-6">
                    Being part of Vineyard gives us support, resources, and friendship with other churches who are on
                    the same journey of following Jesus in down-to-earth, practical ways.
                  </p>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary-dark text-white font-body font-medium px-6 py-3 rounded-full"
                  >
                    <Link href="https://www.vineyardchurches.org.uk" target="_blank" rel="noopener noreferrer">
                      Learn More About Vineyard UK
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-light-gray/50">
                  <h4 className="font-headline text-lg font-bold text-primary mb-4">Vineyard Values</h4>
                  <ul className="space-y-3 font-body text-text-light">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Worship that's both intimate and powerful</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Caring for the poor and marginalized</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Equipping everyone to serve and lead</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary-dark rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Planting new churches in communities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statement of Faith Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-6">What We Believe</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8"></div>
            <p className="font-body text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
              Our beliefs are rooted in the Bible and expressed through the historic Christian faith. We keep it simple
              and focus on what matters most.
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-2 border-light-gray/50 rounded-2xl">
            <CardContent className="p-8 lg:p-12">


              <div className="text-center">
                <p className="font-body text-text-light leading-relaxed mb-6">
                  For our full statement of faith, we align with the beliefs of Vineyard Churches UK & Ireland, which
                  are grounded in historic Christian orthodoxy and expressed in practical, everyday faith.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="font-body font-medium border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-full bg-transparent"
                >
                  <Link
                    href="https://www.vineyardchurches.org.uk/about/what-we-believe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Our Full Statement of Faith
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>




    </main>
  )
}
