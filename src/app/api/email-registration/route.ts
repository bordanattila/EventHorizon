import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Event from '@/models/Event';

// Utility function to validate email
function validateEmail(email: string): void {
  if (!email || !email.includes('@')) {
    throw new Error('Invalid email address');
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    
    const body = await req.json();
    const { email, eventId } = body;

    // Validate email
    validateEmail(email);

    // Find the event
    const event = await Event.findOne({ id: eventId });

    if (!event) {
      return NextResponse.json({ message: `Event not found` }, { status: 404 });
    }

    // Check if email is already registered
    if (event.emails_registered.includes(email)) {
      return NextResponse.json({ message: 'This email is already registered' }, { status: 422 });
    }

    // Add email to the registered list
    event.emails_registered.push(email);
    await event.save();

    return NextResponse.json({ message: 'Email registered successfully' }, { status: 201 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
