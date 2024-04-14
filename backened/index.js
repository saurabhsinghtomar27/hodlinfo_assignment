import express from "express";
import mongoose from "mongoose";
import CryptoModel from "./models/Crypto.js";
import cors from "cors";
import 'dotenv/config'
// Connect to MongoDB database
mongoose
  .connect(process.env.MongoDB_URL
    ,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const app = express();

app.use(cors());

app.use(express.json());

//endpoint for storing the data to mongodb
app.post("/api/crypto/bulk", async (req, res) => {
  const cryptoDataArray = req.body;

  try {
    const insertedData = await CryptoModel.insertMany(cryptoDataArray);
    res.status(201).json(insertedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//endpoint for fetching the data from mongodb
app.get("/api/crypto", async (req, res) => {
  try {
    const cryptoData = await CryptoModel.find();
    res.json(cryptoData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
