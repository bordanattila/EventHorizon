import Image from "next/image";
import Link from "next/link";

// Generate static paths for each category
export async function generateStaticParams() {
  const { events_categories } = await import("../../../../public/data/data.json");

  return events_categories.map((category) => ({
    category: category.id, 
  }));
}

// Dynamic page for events by category
export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { allEvents } = await import("../../../../public/data/data.json");

  // Filter events based on the selected category (city)
  const eventsInCategory = allEvents.filter((event) => event.city.toLowerCase() === params.category.toLowerCase());

  return (
    <div>
      <h1>Events in {params.category}</h1>
      <div>
        {eventsInCategory.length > 0 ? (
          eventsInCategory.map((event) => (
            <Link key={event.id} href={`/events/${event.city.toLowerCase()}/${event.id}`}>
              <div>
                <Image src={event.image} alt={event.title} width={200} height={200} />
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No events found in {params.category}</p>
        )}
      </div>
    </div>
  );
}
