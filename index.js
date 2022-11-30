import express from "express";
import cors from "cors";
import UsersController from "./users/users-controller.js";
import mongoose from "mongoose";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};
const app = express();

const DB_CONNECT_CRED =
  process.env.DB_CONNECT_CRED || "mongodb://localhost:27017/r8MyProf";
mongoose.connect(DB_CONNECT_CRED, options);
app.use(cors());
app.use(express.json());
UsersController(app);
app.listen(process.env.PORT || 4000);
