import Image from "next/image";
// import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

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

  const idParams = await params;
  const eventId = idParams?.id;

  // Filter events based on id
  const singleEvent = allEvents.find((event) => event.id === eventId);

  if (!singleEvent) {
    return <h1>Event Not Found</h1>;
  }

  const inputEmail = useRef<HTMLInputElement>(null);
  // const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = inputEmail.current?.value;
    
    if (!email) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, eventId })
      })
      if(!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (error: any) {
        setError(`Error: ${error.message}`)
    }
  }


   return (
    <div className="event_single_page">
      <h1>{singleEvent.title}</h1>
      <div>
        <Image src={singleEvent.image} alt={singleEvent.title} width={200} height={200} />
        <p>{singleEvent.description}</p>
        <form onSubmit={handleSubmit} className="email_registration">
        <label> Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>
      <p>{message}</p>
      </div>
    </div>
  )

}