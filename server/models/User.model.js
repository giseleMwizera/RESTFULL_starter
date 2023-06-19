const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  phoneNumber: String,
  NID: String,
  email: String,
  roles: {
    type: [
      {
        type: String,
        default: "ADMIN",
        enum: ["USER", "ADMIN"],
      },
    ]
  },
  password: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("User", userSchema);
