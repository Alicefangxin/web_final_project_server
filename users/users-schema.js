import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    school: { type: String, default: "Northeastern University" },
    email: { type: String, default: "" },
    userType: { type: String, enum: ["STUDENT", "PROFESSOR", "ADMIN"] },
  },
  { collection: "users" }
);

export default userSchema;
