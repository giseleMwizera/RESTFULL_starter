const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerDetails = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Owner",
  },
  time: {
    type: Date,
    default: Date.now,
  },
});
const carSchema = new Schema({
  ChasisNumber: String,
  Manufacturer: String,
  Year: Date,
  Price: String,
  ModelName: String,
  owners: [ownerDetails]
});
module.exports = mongoose.model("Car", carSchema);
