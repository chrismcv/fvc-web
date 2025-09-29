import type { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, CreditCard, Building, Smartphone, Gift, Users, Globe, Shield, HelpCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Give — Faith Vineyard Church",
  description:
    "Support the mission and ministry of Faith Vineyard Church in Comber through generous giving. Multiple ways to give securely online or in person.",
  keywords: "giving, donations, tithe, offering, support, faith vineyard, comber church, online giving",
}

export default function GivePage() {
  const givingOptions = [
    {
      title: "Online Giving",
      description: "Quick, secure, and convenient giving through our online platform",
      icon: CreditCard,
      color: "from-primary to-primary-dark",
      features: [
        "One-time or recurring gifts",
        "Secure payment processing",
        "Instant confirmation",
        "Tax-efficient giving options",
      ],
      buttonText: "Give Online",
      buttonLink: "#online-giving",
    },
    {
      title: "Bank Transfer",
      description: "Set up a standing order or make a one-time bank transfer",
      icon: Building,
      color: "from-secondary to-secondary-dark",
      features: [
        "Direct from your bank account",
        "No processing fees",
        "Easy to set up recurring gifts",
        "Bank-level security",
      ],
      buttonText: "Get Bank Details",
      buttonLink: "#bank-details",
    },
    {
      title: "Sunday Offering",
      description: "Give during our Sunday gatherings through cash or card",
      icon: Gift,
      color: "from-accent to-accent-dark",
      features: [
        "Cash or contactless card",
        "Part of worship experience",
        "Anonymous giving",
        "No online setup needed",
      ],
      buttonText: "Visit on Sunday",
      buttonLink: "/gatherings",
    },
  ]

  const impactAreas = [
    {
      title: "Local Community",
      description: "Supporting families and individuals in Comber and surrounding areas",
      icon: Users,
      examples: ["Food support programs", "Community events", "Pastoral care", "Local partnerships"],
    },
    {
      title: "Church Ministry",
      description: "Enabling our gatherings, groups, and spiritual growth opportunities",
      icon: Heart,
      examples: ["Sunday gatherings", "Life Groups", "Youth ministry", "Alpha courses"],
    },
    {
      title: "Global Mission",
      description: "Supporting mission work and church planting through Vineyard Churches",
      icon: Globe,
      examples: ["Vineyard church plants", "Mission partnerships", "Training leaders", "Global outreach"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-warm-gray to-primary/10 py-16 lg:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid gap-8">
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
            At the vineyard we give as an act of worship, not out of obligation or guilt, but as an overflow of our hearts.
          </h1>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8"></div>
          <p className="font-body text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
           In giving we say thank you for all that God has done for us, we practice generosity and we partner with God in all that He is doing in and through our community, supporting programmes and projects both here in Belfast and across the globe. The most effective way to give is to set up a regular donation through your own bank or securely through our online giving below. You can also give a one off gift in the same manner.


          </p>
          <p className="font-body text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
          As a recently established church, our planting church, Belfast City Vineyard is managing our giving at the moment. Belfast City Vineyard is registered charity we are able to claim tax back from the government through the gift aid scheme, adding a further 25p to every £1 given. If you are a UK tax payer please consider maximising your donation in this way. If you have any questions about giving or finances at Faith Vineyard Church please feel free to contact us on
          </p>

                    <p className="font-body text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
If you would like to donate now, please click this link to our planting church, Belfast City Vineyard, and select "Faith Vineyard Church" from the "Fund" dropdown menu. If you have any questions, please reach out via the contact page.

<p className="text-xl text-center mt-10">
<a className="bg-primary text-white rounded-full p-6" href="https://bcv.churchsuite.com/donate">Donate Now</a>
   </p>       
        </div>
      </section>

  

     
     

    </main>
  )
}
