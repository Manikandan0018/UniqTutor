import mongoose from "mongoose";
import Counter from "./Counter.js";

const liveSessionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  type: { type: String, enum: ["admin", "student"], required: true },
  unique_id: { type: String, required: true, unique: true },
  userurl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

liveSessionSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { name: "live_sessions" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.id = counter.seq;
  }
  next();
});

export default mongoose.model("LiveSession", liveSessionSchema);
