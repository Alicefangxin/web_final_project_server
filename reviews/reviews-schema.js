import mongoose from "mongoose";
const reviewsSchema = mongoose.Schema({
    prof: String, /*{type: String, ref:'tempProfsModel'},*/
    author: String, /*{type: String, ref: 'UsersModel'},*/
    QUALITY: String,
    DIFFICULTY: String,
    WouldTakeAgain: String,
    content: String
    }, { collection: "reviews" }
);

export default reviewsSchema;