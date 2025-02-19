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
// export async function handler(req: any, res: any) {
//     console.log("API route", req.method)
//     const { method } = req;

//     if (method !== 'POST') {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }

//     const filePath = buildPath();
//     console.log("File Path:", filePath);
//     let data;

//     try {
//         console.log("filepath" + filePath);
//         data = extractData(filePath);
//         console.log(data);
//     } catch (error: any) {
//         return res.status(500).json({ message: error.message });
//     }

//     if (!data.allEvents) {
//         console.log("No events found in data");
//         return res.status(404).json({ message: 'Events data not found' });
//     }

//     const { email, eventId } = req.body;
//     console.log("Received email:", email, "Event ID:", eventId);

//     try {
//         validateEmail(email);
//         const newAllEvents = registerEmail(data.allEvents, eventId, email);
//         console.log("Updated events:", newAllEvents);
//         return res.status(201).json({ message: 'Email registered successfully' });
//     } catch (error: any) {
//         return res.status(422).json({ message: error.message });
//     }
// }

export async function POST(req: Request) {
    console.log("API Route Hit! Method: POST"); // ✅ Debugging

    try {
        const filePath = buildPath();
        console.log("Resolved file path:", filePath);
        
        const data = await extractData(filePath); // ✅ Fix: Await the function

        if (!data.allEvents) {
            console.log("No events found in data");
            return new Response(JSON.stringify({ message: 'Events data not found' }), { status: 404 });
        }

        const body = await req.json();
        const { email, eventId } = body;

        console.log("Received email:", email, "Event ID:", eventId);

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
    } catch (error: any) {
        console.error("Validation error:", error.message);
        return new Response(JSON.stringify({ message: error.message }), { status: 422 });
    }
}