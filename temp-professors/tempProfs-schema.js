import mongoose from "mongoose";

const tempProfSchema = mongoose.Schema({
    // _id: {type: mongoose.Schema.Types.ObjectId, require: true},
    name: {type: String, required: true},
    department: {type: String, required: true},
    rating: {type: String, default: 0},
    numOfRatings: {type: String, default: 0},
    difficultyLevel: {type: String, default: 0},
    againPct: {type: String, default: 0},
    numOfAwesome: {type: String, default: 0},
    numOfGreat: {type: String, default: 0},
    numOfGood: {type: String, default: 0},
    numOfOK: {type: String, default: 0},
    numOfAwful: {type: String, default: 0},
    profID: {type: String, required: true}
}, {collection: 'temp_prof'});

export default tempProfSchema