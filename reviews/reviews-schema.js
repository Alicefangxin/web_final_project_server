import mongoose from "mongoose";
const reviewsSchema = mongoose.Schema({
        professor: String,
        course: String,
        QUALITY: String,
        DIFFICULTY: String,
        WouldTakeAgain: String,
        date: String,
        topic: String,
        content: String,
        userID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'UsersModel'
        }
    }, { collection: "reviews" }
);

export default reviewsSchema;