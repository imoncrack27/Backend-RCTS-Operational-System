const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

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
  phoneNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  idNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

// static signup method
userSchema.statics.signup = async function (
  userName,
  email,
  phoneNumber,
  idNumber,
  password
) {
  //validation
  if (!email || !password || !userName || !phoneNumber || !idNumber) {
    throw Error("All fields are required");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }
  if (!validator.isMobilePhone(phoneNumber)) {
    throw Error("Invalid phone number");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password must be strong");
  }
  if (!validator.isLength(password, { min: 8 })) {
    throw Error("Password must be at least 8 characters");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    userName,
    email,
    phoneNumber,
    idNumber,
    password: hash,
  });

  return user;
};

module.exports = mongoose.model("User", userSchema);
