const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
    unique: true,
  },
  termsAccepted: {
    type: Boolean,
    required: true,
  },
  privacyPolicyAccepted: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model("auth", userSchema);
module.exports = User;
