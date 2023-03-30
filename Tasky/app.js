import express from "express";
import mongoose from "mongoose";
import hotelData from "./model/Hotel.js";
const PORT = 5000;

const app = express();
import "./dbConnect.js";

app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>Hello I am Suhail</h1>");
});

app.post("/user/register", async (req, res) => {
  try {
    const clientData = new hotelData(req.body);
    await clientData.save();
    res.send(clientData);
  } catch (error) {
    console.log(error);

    res.status(404).json({ error: error.errors, mongoError: error });
  }
});

app.listen(PORT, () => {
  console.log(`Sever is Running at PORT Number ${PORT}`);
});
