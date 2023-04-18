import { Schema, model } from "mongoose";

const NewsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

export default model("News", NewsSchema);
