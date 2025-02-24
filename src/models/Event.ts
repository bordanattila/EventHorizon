import mongoose, { Schema, Document } from 'mongoose';

interface IEvent extends Document {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
}

const EventSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  emails_registered: { type: [String], default: [], required: false },
});

const EventModel = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default EventModel;

// export default mongoose.models?.Event || mongoose.model<IEvent>('Event', EventSchema);

