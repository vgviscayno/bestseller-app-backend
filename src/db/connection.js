import mongoose from "mongoose";

const uri = process.env.MONGODB_URL || "mongodb://localhost:27017/accounts";

mongoose.connect(uri);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", function (error) {
  if (error) {
    console.error("MongoDB connection error:", error);
  }
  console.log("MongoDB connection successful");
});

// When the connection is disconnected
mongoose.connection.on("disconnected", function (error) {
  console.error("MongoDB connection error:", error);
});
