import mongoose from "mongoose";
import savesSchema from "./saves-schema.js";

const savesModel = mongoose.model('SavesModel', savesSchema)

export default savesModel