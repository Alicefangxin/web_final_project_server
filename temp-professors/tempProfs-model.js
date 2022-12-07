import mongoose from "mongoose";
import tempProfSchema from "./tempProfs-schema.js";

const tempProfsModel = mongoose.model("tempProfsModel", tempProfSchema);

export default tempProfsModel;
