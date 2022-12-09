import mongoose from "mongoose";

const savesSchema = mongoose.Schema({
    user: String, /*{type: String, ref: 'UsersModel'},*/
    prof: String, /*{type: String, ref:'tempProfsModel'}*/
}, {collection: 'saves'})

export default savesSchema