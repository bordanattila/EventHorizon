"use client"

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";

interface Event {
  id: string;
  city: string;
  title: string;
  image: string;
  description: string;
}

// Dynamic page for event
export default function SingleEvent() {
  // Unwrap params 
  const params = useParams(); 
  const city = params?.category as string | undefined;
  const id = params?.id as string | undefined;
  console.log(city, id);
  console.log("Params:", params);

  const [event, setEvent] = useState<Event | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputEmail = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!city || !id) return;

    async function fetchEvent() {
      try {
        const { allEvents } = await import("../../../../../public/data/data.json");
        console.log(allEvents)
        console.log(city, id);
        const singleEvent = allEvents.find(
          (event) => event.id === id && event.city?.toLowerCase() === city?.toLowerCase()
        );
        console.log("singleEvent:", singleEvent);
        if (!singleEvent) throw new Error("Event not found");

        setEvent(singleEvent);
      } catch (error: any) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }

    fetchEvent();
  }, [id, city]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get the email value from the input field
    const email = inputEmail.current?.value.trim();

     // Validate the email
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
        body: JSON.stringify({ email, eventId: id })
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      const data = await response.json();
      alert(data.message);
    } catch (error: any) {
      setError(`Error: ${error.message}`)
    }
  }

  if (error) return <p>Error: {error}</p>;
  if (!event) return <p>Loading...</p>;

  return (
    <div className="event_single_page">
      <h1>{event.title}</h1>
      <div>
        <Image src={event.image} alt={event.title} width={200} height={200} />
        <p>{event.description}</p>
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
      </div>
    </div>
  )

}
