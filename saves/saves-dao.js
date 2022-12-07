import savesModel from "./saves-model.js";
import bcrypt from "bcrypt";
import usersModel from "../users/users-model.js";

export const userSavesProf = async(save) => {
    const newSave = {
        user: save.username,
        prof: save.profID
    };
    return await savesModel.create(newSave)
}

export const userUnsavesProf = async(uid, pid) => {
    return await savesModel.deleteOne({user: uid, prof: pid})
}

export const findProfsSavedByUser = async(uid) => {
    return await savesModel
        .find({user: uid}, {user: false})
        .populate('prof', 'name')
        .exec()
}

export const findUsersThatSaveProf = async(pid) => {
    return await savesModel
        .find({prof: pid}, {prof: false})
        .populate('user','username')
        .exec()
}

export const findAllSaves = async() => await savesModel.find()