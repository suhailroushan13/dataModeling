import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hotelModel = new Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 40,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 40,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    maxlength: 40,
    minlength: 2,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    maxlength: 340,
  },
});

const hotelData = mongoose.model("Hotel", hotelModel, "users");
export default hotelData;
