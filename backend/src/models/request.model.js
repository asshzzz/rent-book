import mongoose, { Schema } from "mongoose";

const RequestSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // kis user ne request kiya
      required: true,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: "Vehicle", // kaunsa bike/scooter
      required: true,
    },
    durationDays: {
      type: Number, // kitne din ke liye rent
      required: true,
      min: 1,
    },
    pickupDate: {
      type: Date,
      required: true,
    },
    dropoffDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected", "completed"],
      default: "pending",
    },
    totalCost: {
      type: Number, // auto calculate bhi kar sakte ho based on per-day rate
    },
  },
  { timestamps: true }
);

export const RentRequest = mongoose.model(
  "RentRequest",
  RequestSchema
);
