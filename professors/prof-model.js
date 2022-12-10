import mongoose from "mongoose";
import profSchema from "./prof-schema.js";

const profModel = mongoose.model('professorsModel', profSchema)

export default profModel
