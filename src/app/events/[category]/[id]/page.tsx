import Image from "next/image";
import Link from "next/link";

// Generate static paths for each event
export async function generateStaticParams() {
  const { allEvents } = await import("../../../../../public/data/data.json");

  return allEvents.map((eventId) => ({
    id: eventId.id,
    city: eventId.city.toLowerCase()
  }));
}

// Dynamic page for event
export default async function SingleEvent({ params }: { params: { city: string, id: string } }) {
  const { allEvents } = await import("../../../../../public/data/data.json");

  // Filter events based on id
  const singleEvent = allEvents.find((event) => event.id === params.id);

  if (!singleEvent) {
    return <h1>Event Not Found</h1>;
  }

  return (
    <div>
      <h1>{singleEvent.title}</h1>
      <div>
        <Image src={singleEvent.image} alt={singleEvent.title} width={200} height={200} />

        <p>{singleEvent.description}</p>
      </div>
    </div>
  )

}