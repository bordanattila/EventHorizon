import Image from "next/image";
import Link from "next/link";
import EventsAtLocation from './params';
import { notFound } from "next/navigation"
import { PageProps } from "@/app/app";

// Dynamic page for events by category
export default async function SingleCategory({ params }: PageProps<{ category: string }>) {
  const resolvedParams = await params;
  const { category } = resolvedParams;
  const {cityEvents} = await EventsAtLocation();
  if (!category || Array.isArray(category)) {
    return notFound();
  }
  const normalizedCategory = category.toLowerCase();
 
  // Filter events based on the selected category (city)
  const eventsAtLocation = cityEvents.filter((event) => event.city.toLowerCase() === normalizedCategory);

  if (eventsAtLocation.length === 0) {
    return notFound(); // Returns a 404 if no events exist for the city
  }

  return (
    <div>
      <h1 className='locations'>Events in {category}</h1>
      <div className="home_body">
        {eventsAtLocation.length > 0 ? (
          eventsAtLocation.map((event, index) => (
            <Link
              key={event.id}
              href={`/events/${event.city.toLowerCase()}/${event.id}`}
              className={`card ${index % 2 === 1 ? 'card-reverse' : ''}`}
            >
              <div
                className="image"
                style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}
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
          <p>No events found in {category}</p>
        )}
      </div>
    </div>
  );
}
