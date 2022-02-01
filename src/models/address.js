import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["Home", "Partner", "Work"],
    },
    addressLine1: {
      type: String,
      required: true,
      trim: true,
    },
    addressLine2: {
      type: String,
      trim: true,
    },
    barangay: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
    id: false,
  }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;
