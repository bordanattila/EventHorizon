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

  const categoryParams = await params;
  const category = categoryParams?.category?.toLowerCase();

  if (!category) {
    return (
    <h1>Error: Category not found</h1>
    )
  }

  // Filter events based on the selected category (city)
  const eventsInCategory = allEvents.filter((event) => event.city.toLowerCase() === category.toLowerCase());

  return (
    <div className="cat_events">
      <h1>Events in {category}</h1>
      <div className="content">
        {eventsInCategory.length > 0 ? (
          eventsInCategory.map((event) => (
            <Link key={event.id} href={`/events/${event.city.toLowerCase()}/${event.id}`} className="card">
              <div>
                <Image src={event.image} alt={event.title} width={200} height={200} />
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <p>{event.city}</p>
                <p>{event.id}</p>
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
