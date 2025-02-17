import Link from 'next/link';
import Image from 'next/image';

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

export default async function Events() {
  const data = await getData();
  return (
    <div>
      <h1>Events</h1>
      <div className='events_page'>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} className='card'>
            <h2>{ev.title}</h2>
            <Image src={ev.image} alt="image" width={200} height={200} />
          </Link>
        ))}
      </div>
    </div>
  );
}