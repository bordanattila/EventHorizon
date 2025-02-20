import Image from "next/image";
import Link from "next/link";

// Generate static paths for each category
export async function generateStaticParams() {
  const { events_categories } = await import("../../../../public/data/data.json");

  return events_categories.map((category) => ({
    params: { category: category.id },
  }));
}

// Dynamic page for events by category
export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { allEvents } = await import("../../../../public/data/data.json");

  // const categoryParams = params;
  const category = params?.category?.toLowerCase();
  const event_city = category.charAt(0).toUpperCase() + category.slice(1);

  if (!category) {
    return (
      <h1>Error: Category not found</h1>
    )
  }

  // Filter events based on the selected category (city)
  const eventsInCategory = allEvents.filter((event) => event.city.toLowerCase() === category.toLowerCase());

  return (
    <div>
      <h1 className='locations'>Events in {event_city}</h1>
      <div className="home_body">
        {eventsInCategory.length > 0 ? (
          eventsInCategory.map((event, index) => (
            <Link
              key={event.id}
              href={`/events/${event.city.toLowerCase()}/${event.id}`}
              className={`card ${index % 2 === 1 ? 'card-reverse' : ''}`}
            >
              <div
                className="image"
                style={{ width: '50%', aspectRatio: '16/9', position: 'relative' }}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  sizes='(max-width: 768px) 50dvw, 100%'
                  style={{ objectFit: 'cover' }}
                  fill
                  priority
                />
              </div>
                <div className="content">
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                </div>
            </Link>
          ))
        ) : (
          <p>No events found in {event_city}</p>
        )}
      </div>
    </div>
  );
}
