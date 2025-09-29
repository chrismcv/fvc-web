import { getEvents, fallbackEvents, type NotionEvent } from "@/lib/notion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function formatTime(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  })
}

function isRecurringEvent(title: string): boolean {
  return title.toLowerCase().includes("sunday gathering") || title.toLowerCase().includes("midweek connect")
}

function EventCard({ event }: { event: NotionEvent }) {
  const isRecurring = isRecurringEvent(event.title)

  return (
    <Card className="hover:shadow-xl transition-all transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-2 border-light-gray/50 rounded-2xl overflow-hidden group">
      <CardContent className="p-0">
        {event.image && (
          <div className="h-48 bg-gradient-to-br from-warm-gray to-accent/10 overflow-hidden">
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-primary to-primary-dark w-10 h-10 rounded-xl flex items-center justify-center mr-3">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-body text-sm text-text-muted">{event.date ? formatDate(event.date) : "Date TBA"}</p>
                {event.date && <p className="font-body text-xs text-text-muted">{formatTime(event.date)}</p>}
              </div>
            </div>

            {isRecurring && (
              <span className="bg-secondary/20 text-secondary-dark px-3 py-1 rounded-full text-xs font-body font-medium">
                Weekly
              </span>
            )}
          </div>

          <h3 className="font-headline text-xl font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors">
            {event.title}
          </h3>

          <p className="font-body text-text-light leading-relaxed mb-4">{event.description}</p>

          <div className="flex items-center justify-between pt-4 border-t border-light-gray/30">
            <div className="flex items-center text-text-muted font-body text-sm">
              <MapPin className="w-4 h-4 mr-2 text-secondary" />
              <span>Faith Vineyard Church</span>
            </div>
            <div className="flex items-center text-text-muted font-body text-sm">
              <Users className="w-4 h-4 mr-2 text-accent" />
              <span>All welcome</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function NoEventsCard() {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-2 border-light-gray/50 rounded-2xl">
      <CardContent className="p-8 text-center">
        <div className="bg-gradient-to-br from-warm-gray to-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-headline text-xl font-bold text-primary mb-4">More Events Coming Soon!</h3>
        <p className="font-body text-text-light leading-relaxed mb-6">
          We're always planning new events and activities. In the meantime, join us for our regular Sunday gatherings
          and midweek connect groups.
        </p>
        <p className="font-body text-sm text-text-muted">
          Want to be the first to know about new events? Get in touch and we'll keep you updated!
        </p>
      </CardContent>
    </Card>
  )
}

export default async function EventsList() {
  let events: NotionEvent[] = []

  try {
    events = await getEvents()

    // If no events from Notion, use fallback events
    if (events.length === 0) {
      events = fallbackEvents
    }
  } catch (error) {
    console.error("Failed to load events:", error)
    events = fallbackEvents
  }

  if (events.length === 0) {
    return (
      <div className="max-w-md mx-auto">
        <NoEventsCard />
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
