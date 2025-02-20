interface Event {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
}

export async function generateStaticParams() {
  const { allEvents } = await import("../../../../../public/data/data.json") as { allEvents: Event[] };
  
  return allEvents.map((event) => ({
    category: event.city.toLowerCase(),
    id: event.id
  }));
}