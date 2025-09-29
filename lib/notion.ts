import { Client } from "@notionhq/client"

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export interface NotionEvent {
  id: string
  title: string
  date: string
  description: string
  image?: string
}

export async function getEvents(): Promise<NotionEvent[]> {
  try {
    if (!process.env.NOTION_DATABASE_ID) {
      console.warn("NOTION_DATABASE_ID not configured")
      return []
    }

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: "Date",
        date: {
          on_or_after: new Date().toISOString().split("T")[0],
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "ascending",
        },
      ],
    })

    const events: NotionEvent[] = response.results.map((page: any) => {
      const properties = page.properties

      return {
        id: page.id,
        title: properties.Title?.title?.[0]?.plain_text || "Untitled Event",
        date: properties.Date?.date?.start || "",
        description: properties.Description?.rich_text?.[0]?.plain_text || "",
        image: properties.Image?.files?.[0]?.file?.url || properties.Image?.files?.[0]?.external?.url,
      }
    })

    return events
  } catch (error) {
    console.error("Error fetching events from Notion:", error)
    return []
  }
}

// Fallback events for when Notion is not configured or fails
export const fallbackEvents: NotionEvent[] = [
  {
    id: "1",
    title: "Sunday Gathering",
    date: "2024-03-17",
    description:
      "Join us for worship, teaching, and community every Sunday at 10:30 AM. Coffee and fellowship from 10:00 AM.",
  },
  {
    id: "2",
    title: "Community Coffee Morning",
    date: "2024-03-20",
    description:
      "Open to everyone in Comber! Free coffee, homemade treats, and friendly conversation. A great way to meet your neighbors.",
  },
  {
    id: "3",
    title: "Alpha Course Begins",
    date: "2024-03-25",
    description:
      "Exploring faith, meaning, and life together. Great food, open discussion, and no pressure. Perfect for anyone with questions about Christianity.",
  },
  {
    id: "4",
    title: "Family Fun Day",
    date: "2024-03-30",
    description:
      "Games, activities, and picnic fun for all ages at Castle Gardens. Bring the whole family for an afternoon of community and laughter.",
  },
]
