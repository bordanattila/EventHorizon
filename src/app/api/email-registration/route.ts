import path from 'path';
import fs from 'fs/promises';

// Constants
const DATA_DIR = 'public/data';
const DATA_FILE = 'data.json';

// Types
interface Event {
    id: string;
    emails_registered: string[];
}

interface Data {
    events_categories: string;
    allEvents: Event[];
}

// Helper functions
function buildPath(): string {
    const filePath = path.join(process.cwd(), DATA_DIR, DATA_FILE);
    console.log("Resolved file path:", filePath);
    return filePath;
}

async function extractData(filePath: string): Promise<Data> {
    try {
        const jsonData = await fs.readFile(filePath, 'utf8');
        return JSON.parse(jsonData);
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to read data from file: ${error.message}`);
        }
        throw new Error('Failed to read data from file: Unknown error occurred');
    }
}

function validateEmail(email: string): void {
    if (!email || !email.includes('@')) {
        throw new Error('Invalid email address');
    }
}

export async function POST(req: Request) {

    try {
        const filePath = buildPath();
        
        const data = await extractData(filePath); 

        if (!data.allEvents) {
            return new Response(JSON.stringify({ message: 'Events data not found' }), { status: 404 });
        }

        const body = await req.json();
        const { email, eventId } = body;

        validateEmail(email);

        const event = data.allEvents.find((ev) => ev.id === eventId);
        if (!event) {
            throw new Error(`Event with ID ${eventId} not found`);
        }

        if (event.emails_registered.includes(email)) {
            throw new Error('This email has already been registered');
        }

        event.emails_registered.push(email);

        // **Save the updated data**
        await fs.writeFile(buildPath(), JSON.stringify(data, null, 2));

        return new Response(JSON.stringify({ message: 'Email registered successfully' }), { status: 201 });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Validation error:", error.message);
            return new Response(JSON.stringify({ message: error.message }), { status: 422 });
        }
    }
}