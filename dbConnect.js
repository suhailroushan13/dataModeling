import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://suhail:suhail@suhail.dktiuw2.mongodb.net/hotel"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};

connect();
