import savesModel from "./saves-model.js";
import bcrypt from "bcrypt";
import usersModel from "../users/users-model.js";

export const userSavesProf = async (save) => {
    const newSave = {
        user: save.username,
        prof: save.profID
    };
    return await savesModel.create(newSave)
}

export const userUnsavesProf = async(uid, pid) => {
    return savesModel.deleteOne({user: uid, prof: pid});
}

export const findProfsSavedByUser = async(username) => {
    return savesModel.find({user: username}, {user: false});
}

export const findUsersThatSaveProf = async(pid) => {
    return savesModel.find({prof: pid}, {prof: false});
}

export const findAllSaves = async() => await savesModel.find()
