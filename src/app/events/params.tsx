// Define TypeScript interface for event categories
interface EventCategory {
    id: string;
    title: string;
    description: string;
    image: string;
  }
  
  // Fetch data on the server
  async function getData(): Promise<EventCategory[]> {
    const res = await import('../../../public/data/data.json');
    return res.events_categories;
  }