const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  phoneNumber: String,
  NID: String,
  email: String,
  cars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});
module.exports = mongoose.model("Owner", userSchema);
