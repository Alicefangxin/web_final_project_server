import express from "express";
import cors from "cors";
import UsersController from "./users/users-controller.js";
import mongoose from "mongoose";
import ProfessorsController from "./professors/professors-controller.js";
import HelloControllers from "./hello-controllers.js";
import tempProfsController from "./temp-professors/tempProfs-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import SavesController from "./saves/saves-controller.js";

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

// const DB_CONNECT_CRED =
//   process.env.DB_CONNECT_CRED || "mongodb://localhost:27017/r8Myprof";

const DB_CONNECT_CRED =
  "mongodb+srv://cs5610group8:0bDYf9oDxVdWbwSA@cluster0.6n7kodd.mongodb.net/r8MyProf?retryWrites=true&w=majority";
mongoose.connect(DB_CONNECT_CRED, options);
app.use(cors());
app.use(express.json());
UsersController(app);
HelloControllers(app);
ProfessorsController(app);
tempProfsController(app);
ReviewsController(app);
SavesController(app);
app.listen(process.env.PORT || 4000);
