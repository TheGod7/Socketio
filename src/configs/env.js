import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGO_URL;
export const SESSION_SECRET = process.env.SESSION_SECRET || "my secret";
export const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
export const ALGOLIA_APPLICATION = process.env.ALGOLIA_APPLICATION;
export const ALGOLIA_INDEX = process.env.ALGOLIA_INDEX;
