import Image from "next/image";
import { notFound } from "next/navigation";
import EmailRegistrationForm from "../../../../components/email-registration";
import getEventDetails from './params';
import type { SingleEvent } from './params';
import type { PageProps } from "@/app/app";

type EventParams = {
  category: string;
  id: string;
};

export async function generateStaticParams() {
  try {
    const { cityEvents } = await getEventDetails("all");
    return cityEvents.map((event) => ({
      category: event.city.toLowerCase(),
      id: event.id.toString(),
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export default async function SingleEvent({ params }: PageProps<EventParams>) {
  const { category, id } = await params;

  if (!category || !id) {
    notFound();
  }
  const normalizedCategory = Array.isArray(category) ? category[0] : category;
  const cityName = normalizedCategory.charAt(0).toUpperCase() + normalizedCategory.slice(1);
  const { cityEvents } = await getEventDetails(cityName);
  const selectedEvent = cityEvents.find((event) => event.id === id);

  if (!selectedEvent) {
    notFound();
  }

  return (
    <div>
      <div className="content locations">
        <h1>{selectedEvent.title}</h1>
      </div>
      <div className='single_event_page'>
        <div
          className="image smallerImage"
          style={{ width: '100%', aspectRatio: '16/9', position: 'relative' }}
        >
          <Image
            src={selectedEvent.image}
            alt={selectedEvent.title}
            sizes='(max-width: 768px) 50dvw, 100%'
            style={{ objectFit: 'cover' }}
            fill
            priority
          />
        </div>
        <div className="content locations">
          <p>{selectedEvent.description}</p>
        </div>
        <div className="registration">
          <EmailRegistrationForm eventId={selectedEvent.id} />
        </div>
      </div>
    </div>
  )
}
