import path from 'path';
import fs from 'fs';

// Constants
const DATA_DIR = 'data';
const DATA_FILE = 'data.json';

// Types
interface Event {
    id: string;
    emails_registered: string[];
  }
  
  interface Data {
    events_categories: any;
    allEvents: Event[];
  }

// Helper functions
function buildPath(): string {
  return path.join(process.cwd(), DATA_DIR, DATA_FILE);
}

function extractData(filePath: string): Data {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error: any) {
    throw new Error(`Failed to read data from file: ${error.message}`);
  }
}

function validateEmail(email: string): void {
  if (!email || !email.includes('@')) {
    throw new Error('Invalid email address');
  }
}

function registerEmail(allEvents: Event[], eventId: string, email: string): Event[] {
  const event = allEvents.find((ev) => ev.id === eventId);
  if (!event) {
    throw new Error(`Event with ID ${eventId} not found`);
  }

  if (event.emails_registered.includes(email)) {
    throw new Error('This email has already been registered');
  }

  return allEvents.map((ev) => {
    if (ev.id === eventId) {
      return {
        ...ev,
        emails_registered: [...ev.emails_registered, email],
      };
    }
    return ev;
  });
}

// Main handler function
export default function handler(req: any, res: any): void {
  const { method } = req;

  if (method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const filePath = buildPath();
  let data;

  try {
    data = extractData(filePath);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }

  if (!data.allEvents) {
    return res.status(404).json({ message: 'Events data not found' });
  }

  const { email, eventId } = req.body;

  try {
    validateEmail(email);
    const newAllEvents = registerEmail(data.allEvents, eventId, email);
    // You might want to save the updated data to the file here
    return res.status(201).json({ message: 'Email registered successfully' });
  } catch (error: any) {
    return res.status(422).json({ message: error.message });
  }
}