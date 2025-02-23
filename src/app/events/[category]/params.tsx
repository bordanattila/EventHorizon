import { connectToDatabase } from "../../../lib/mongodb";
import Event from "../../../models/Event";

interface SingleEvent {
    id: string;
    title : string;
    city: string;
    description: string;
    image: string;
}

async function getEventDetails() {
    await connectToDatabase();
    const eventsAtLocation = await Event.find({}, { _id: 0, __v: 0 }).lean();
    const formattedEvents: SingleEvent[] = eventsAtLocation.map 
    ((event) => ({
        id: event.id,
        title: event.title,
        city: event.city,
        description: event.description,
        image: event.image
    }))
    return { cityEvents: formattedEvents };
}

export default getEventDetails;