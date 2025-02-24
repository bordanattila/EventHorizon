import { connectToDatabase } from "../../../../lib/mongodb";
import Event from "../../../../models/Event";

export interface SingleEvent {
    id: string;
    title : string;
    city: string;
    description: string;
    image: string;
}

export interface EventDetails {
    cityEvents: SingleEvent[];
}

async function getEventDetails(location: string): Promise<EventDetails> {
    
    try {
        await connectToDatabase();
        
        let query = {};
        if (location !== "all") {
            // Convert the location parameter to lowercase for case-insensitive comparison
            const locationRegex = new RegExp(`^${location}$`, 'i');
            query = { city: locationRegex };
        }
        
        const selectedEvents = await Event.find(query, { _id: 0, __v: 0 }).lean();        
             
        const formattedEvents: SingleEvent[] = selectedEvents.map(({ id, title, city, description, image }) => ({
            id,
            title,
            city,
            description,
            image
        }));
        
        return { cityEvents: formattedEvents };
    } catch (error) {
        console.error("Error in getEventDetails:", error);
        return { cityEvents: [] };
    }
}

export default getEventDetails;