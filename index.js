import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";

const app = express();
app.use(cors());
// change to MONGODB_STRING later
mongoose.connect("mongodb://localhost:27017/r8Myprof");

app.listen(process.env.PORT || 4000);
