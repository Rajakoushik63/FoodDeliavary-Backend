// import mogoose from "mongoose";

// export const connectDB = async () => {
//   await mogoose
//     .connect(
//       "mongodb+srv://rajakoushik8008:ogg4SW66r4JzeJei@cluster0.zmmk3.mongodb.net/foodDelivary-Backend"
//     )
//     .then(() => console.log("DB Connected"));
// };

import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
    // console.log("MongoDB URI:", process.env.MONGODB_URI); // Check the URI
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
    process.exit(1);
  }
};

export { connectDB };
