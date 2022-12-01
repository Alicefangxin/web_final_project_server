import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UsersController from "./users/users-controller.js";
import mongoose from "mongoose";
import ProfessorsController from "./professors/professors-controller.js";
import HelloControllers from "./hello-controllers.js";

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
dotenv.config;

const DB_CONNECT_CRED =
  process.env.DB_CONNECT_CRED || "mongodb://localhost:27017/r8MyProf";

mongoose.connect(DB_CONNECT_CRED, options);
app.use(cors());
app.use(express.json());
UsersController(app);
HelloControllers(app);
ProfessorsController(app);
app.listen(process.env.PORT || 4000);
