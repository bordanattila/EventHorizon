import Image from "next/image";
import { notFound } from "next/navigation";
import { Event } from "../../../../types/event";
import EmailRegistrationForm from "../../../../components/email-registration";

// Type for the page props
interface PageProps {
  params: {
    category: string;
    id: string;
  };
}

// Generate static paths for each category
export async function generateStaticParams() {
  const { allEvents } = await import("../../../../../public/data/data.json") as { allEvents: Event[] };

  return allEvents.map((event) => ({
    category: event.city.toLowerCase(),
    id: event.id
  }));
}

export default async function SingleEvent(props: PageProps) {
  const { category, id } = props.params;
  
  try{
    const { allEvents } = await import("../../../../../public/data/data.json") as { allEvents: Event[] };
    const foundEvent = allEvents.find(
      (ev) => ev.id === id && ev.city.toLowerCase() === category.toLowerCase()
    );
    if (!foundEvent) {
      notFound();
    }
  


  return (
    <div>
      <div className="content locations">
        <h1>{foundEvent.title}</h1>
      </div>
      <div className='single_event_page'>
        <div
          className="image"
          style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}
        >
          <Image
            src={foundEvent.image}
            alt={foundEvent.title}
            sizes='(max-width: 768px) 50dvw, 100%'
            style={{ objectFit: 'cover' }}
            fill
            priority
          />
        </div>
        <div className="content locations">
          <p>{foundEvent.description}</p>
        </div>
        <div className="registration">
          <EmailRegistrationForm eventId={foundEvent.id} />
        </div>
      </div>
    </div>
  )
} catch (error) {
  console.error('Error loading event:', error);
  notFound();
}
}
