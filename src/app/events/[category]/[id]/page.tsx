import Image from "next/image";
import { notFound } from "next/navigation";
import EmailRegistrationForm from "../../../../components/email-registration";
import getEventDetails from '../params';

export default async function SingleEvent({ params }: { params: { category: string, id: string } }) {
  try {
    if (!params?.id || !params?.category) {
      throw new Error("Missing params");
    }

    const { cityEvents } = await getEventDetails();
    const selectedEvent = cityEvents.find((event) => event.id === params.id)

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
            className="image"
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
  } catch (error) {
    console.error("Error loading event:", error);
    notFound();
  }
}
