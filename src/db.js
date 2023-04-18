import { connect } from "mongoose";
import { MONGODB_URI } from "./configs/env.js";

export const connectDB = async () => {
  try {
    await connect(MONGODB_URI);
    console.log("<-- Mongo DB Connected -->");
  } catch (error) {
    console.error(error);
  }
};
