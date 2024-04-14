import mongoose from "mongoose";

const cryptoSchema = new mongoose.Schema({
  base_unit: String,
  quote_unit: String,
  low: String,
  high: String,
  last: String,
  type: String,
  open: String,
  volume: String,
  sell: String,
  buy: String,
  at: Number,
  name: String,
});

const CryptoModel = mongoose.model("Crypto", cryptoSchema);
export default CryptoModel;
