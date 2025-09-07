import mongoose, { Schema } from "mongoose";

const vehicleSchema = new Schema(
  {
    name: {
      type: String, // Vehicle ka naam (e.g., Activa, Pulsar, Royal Enfield)
      required: true,
    },
    type: {
      type: String,
      enum: ["bike", "scooter"],
      required: true,
    },
    model: {
      type: String, // model year / variant
    },
    registrationNumber: {
      type: String,
      required: true,
      unique: true, // har vehicle ka registration unique hoga
    },
    perDayRent: {
      type: Number, // kitna rent hai per day
      required: true,
    },
    available: {
      type: Boolean, // abhi rent par available hai ya nahi
      default: true,
    },
    image: {
      type: String, // vehicle ki photo (URL)
    },
  },
  { timestamps: true }
);

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
