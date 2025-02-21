import Image from "next/image";
import { notFound } from "next/navigation";
import { Event } from "../../../../types/event";
import EmailRegistrationForm from "../../../../components/email-registration";
// import type { PageProps } from "@/app/app.d";

// Type for the page props
// type SegmentParams = {
//     category: string;
//     id: string;
// }

// type Props = {
//   params: Promise<SegmentParams>;
//   // searchParams?: { [key: string]: string | string[] | undefined }
//   searchParams?: Promise<any>;
// }
// interface PageProps {
//   params: Promise<SegmentParams>;
// }

// Generate static paths for each category
export async function generateStaticParams() {
  // const { allEvents } = await import("../../../../../public/data/data.json") as { allEvents: Event[] };
  const { events_categories } = await import("../../../../../public/data/data.json");
  // return allEvents.map((event) => ({
  //   category: event.city.toLowerCase(),
  //   id: event.id
  // }));
  return Promise.resolve(events_categories.map((category) => ({
    params: { category: category.id },
  })));
}

export default async function SingleEvent({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category, id } = await params;
  // const searchParamsValue = await searchParams;
  
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
