// Generate static paths for each event
export async function generateStaticParams() {
    const { allEvents } = await import("../../../../../public/data/data.json");
  
    return allEvents.map((eventId) => ({
      id: eventId.id,
      city: eventId.city.toLowerCase()
    }));
  }