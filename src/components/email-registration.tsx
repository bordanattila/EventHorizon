"use client"

import { useRef, useState } from 'react';

interface EmailRegistrationFormProps {
  eventId: string;
}

export default function EmailRegistrationForm({ eventId }: EmailRegistrationFormProps) {
  const [error, setError] = useState<string | null>(null);
  const inputEmail = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = inputEmail.current?.value.trim();

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
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      alert(data.message);
      // Optionally clear the input after successful submission
      if (inputEmail.current) {
        inputEmail.current.value = '';
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="email_registration">
      <label htmlFor="email">Get Registered for this event!</label>
      <input
        ref={inputEmail}
        type="email"
        id="email"
        placeholder="Please enter your email"
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}