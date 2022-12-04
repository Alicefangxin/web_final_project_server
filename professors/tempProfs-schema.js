import mongoose from "mongoose";

const tempProfSchema = mongoose.Schema({
    name: String,
    department: String,
    rating: String,
    numOfRatings: String,
    difficultyLevel: String,
    againPct: String,
    numOfAwesome: String,
    numOfGreat: String,
    numOfGood: String,
    numOfOK: String,
    numOfAwful: String
}, {collection: 'temp_prof'});

export default tempProfSchema