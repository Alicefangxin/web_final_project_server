import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    userType: { type: String, enum: ["STUDENT", "PROFESSOR", "ADMIN"] },
  },
  { collection: "users" }
);

export default userSchema;
