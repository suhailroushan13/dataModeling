import express from "express";

const app = express();
const PORT = 5000;

import "./dbConnect.js";
import hotelData from "./models/Hotel.js";

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.post("/users/register/", async (req, res) => {
  try {
    const clientData = new hotelData(req.body);
    await clientData.save();
    res.status(200).json(clientData);
  } catch (error) {
    console.log(error);
  }
});

app.use((req, res) => {
  res.status(404).json({ msg: "API Is Not Valid" });
});

app.listen(PORT, () => {
  console.log(`Server Listening at Port ${PORT}`);
});
