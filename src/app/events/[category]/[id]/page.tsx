// "use client"

import Image from "next/image";
// import { useParams } from "next/navigation";
// import React, { useRef, useState, useEffect } from "react";
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

// Dynamic page for event
// export default function SingleEvent({ params }: Props) {
  // Unwrap params 
  // const params = useParams();
  // const city = params?.category as string | undefined;
  // const id = params?.id as string | undefined;

  // const [event, setEvent] = useState<Event | null>(null);
  // const [error, setError] = useState<string | null>(null);
  // const inputEmail = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (!city || !id) return;

  //   async function fetchEvent() {
  //     try {
  //       const { allEvents } = await import("../../../../../public/data/data.json");
  //       const singleEvent = allEvents.find(
  //         (event) => event.id === id && event.city?.toLowerCase() === city?.toLowerCase()
  //       );
  //       if (!singleEvent) throw new Error("Event not found");

  //       setEvent(singleEvent);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         setError(error.message);
  //       } else {
  //         setError("An unknown error occurred");
  //       }
  //     }
  //   }

  //   fetchEvent();
  // }, [id, city]);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Get the email value from the input field
  //   const email = inputEmail.current?.value.trim();

  //   // Validate the email
  //   if (!email) {
  //     setError("Please enter a valid email address");
  //     return;
  //   }

  //   try {
  //     const response = await fetch('/api/email-registration', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, eventId: id })
  //     })
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.status}`)
  //     }
  //     const data = await response.json();
  //     alert(data.message);
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       setError(`Error: ${error.message}`)
  //     }
  //   }
  // }

  // if (error) return <p>Error: {error}</p>;
  // if (!event) return <p>Loading...</p>;

  export default async function SingleEvent({ params, searchParams }: Props) {
    const { category, id } = params;
    
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
        style={{ width: '50%', aspectRatio: '16/9', position: 'relative' }}
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
        {/* <form onSubmit={handleSubmit} className="email_registration">
          <label> Get Registered for this event!</label>
          <input
            ref={inputEmail}
            type="email"
            id="email"
            placeholder="Please enter your email"
          />
          <button type="submit"> Submit</button>
        </form> */}
        <div>
        <EmailRegistrationForm eventId={event.id} />
        </div>
    </div>
    </div>
  )

}
