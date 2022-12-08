import mongoose from "mongoose";
const reviewsSchema = mongoose.Schema({
    prof: {type: String, ref:'tempProfsModel'},
    author: {type: String, ref: 'UsersModel'},
    QUALITY: String,
    DIFFICULTY: String,
    WouldTakeAgain: String,
    content: String
    }, { collection: "reviews" }
);

export default reviewsSchema;