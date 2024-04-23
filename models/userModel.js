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

  if (!validator.isLength(password, { min: 8 })) {
    throw Error("Password must be at least 8 characters");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password must be strong");
  }
  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }
  if (!validator.isMobilePhone(phoneNumber)) {
    throw Error("Invalid phone number");
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

//static login method
userSchema.statics.login = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All fields are required");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Invalid email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
