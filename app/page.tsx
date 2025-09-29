import Hero from "./components/hero"
import AboutSection from "./components/about-section"
import EventsSection from "./components/events-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
    </main>
  )
}
