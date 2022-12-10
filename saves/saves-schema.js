import mongoose from "mongoose";

const savesSchema = mongoose.Schema({
    user: {type: String, ref: 'UsersModel'},
    prof: {type: String, ref:'tempProfsModel'}
}, {collection: 'saves'})

export default savesSchema