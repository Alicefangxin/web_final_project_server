import tempProfsModel from "./tempProfs-model.js";

export const createProf = (prof) => tempProfsModel.create(prof);

export const findAllProfs = async () => await tempProfsModel.find();

export const findProfById = (profID) => tempProfsModel.findOne({profID});

export const findByProfName = async (name) => await tempProfsModel.find({name: name});

export const findProfByAgain = (againPct) =>tempProfsModel.findOne({againPct})

export const updateProf = async (profID, profUpdates) =>
    tempProfsModel.updateOne({ profID: profID }, { $set: profUpdates });
