import Image from "next/image";
import { notFound } from "next/navigation";
import { Event } from "../../../../types/event";
import EmailRegistrationForm from "../../../../components/email-registration";

// Type for the page props
interface Props {
  params: {
    category: string;
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}


// Generate static paths for each category
export async function generateStaticParams() {
  const { allEvents } = await import("../../../../../public/data/data.json") as { allEvents: Event[] };

  return allEvents.map((event) => ({
    category: event.city.toLowerCase(),
    id: event.id
  }));
}

export default async function SingleEvent({ params }: Props) {
  const { category, id } = await params;
  const { allEvents } = await import("../../../../../public/data/data.json") as { allEvents: Event[] };

  const event = allEvents.find(
    (event) => event.id === id && event.city.toLowerCase() === category.toLowerCase()
  );

  if (!event) {
    notFound();
  }

  return (
    <div>
      <div className="content locations">
        <h1>{event.title}</h1>
      </div>
      <div className='single_event_page'>
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
        <div className="content locations">
          <p>{event.description}</p>
        </div>
        <div className="registration">
          <EmailRegistrationForm eventId={event.id} />
        </div>
      </div>
    </div>
  )

}
