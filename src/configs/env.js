import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGO_URL;
export const SESSION_SECRET = process.env.SESSION_SECRET || "my secret";
