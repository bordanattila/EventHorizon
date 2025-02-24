import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Define interface for the cached connection
interface CachedConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Declare global type for mongoose
declare global {
  let mongoose: { conn: null | typeof mongoose; promise: null | Promise<typeof mongoose> };
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const cached: CachedConnection = (global as { mongoose?: CachedConnection }).mongoose || { 
  conn: null, 
  promise: null 
};

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      dbName: "event-app",
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}
