import tempProfsModel from "./tempProfs-model.js";

export const createProf = (prof) => tempProfsModel.create(prof);

export const findAllProfs = async () => {
    const profs = await tempProfsModel.find()
    return profs
}

export const findProfById = (pid) => tempProfsModel.findById(pid);

export const findByProfName = (name) => tempProfsModel.findOne({ name });

export const updateProf = (pid, profUpdates) =>
    tempProfsModel.updateOne({ _id: pid }, { $set: profUpdates });
