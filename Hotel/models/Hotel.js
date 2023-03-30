import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hotelModel = new Schema({
  user: {
    firstName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    roomCount: {
      type: Array,
      required: true,
    },
    noPeople: {
      type: Number,
      required: true,
      min: 1,
    },
    arriveDate: {
      type: Date,
      required: true,
    },
    departDate: {
      type: Date,
      required: true,
    },
    arriveTime: {
      type: Date,
      required: true,
    },
    departTime: {
      type: Date,
      required: true,
    },
  },
});

const hotelData = mongoose.model("Hotel", hotelModel, "users");
export default hotelData;
