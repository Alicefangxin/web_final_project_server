import savesModel from "./saves-model.js";

export const userSavesProf = async (save) => {
    const newSave = {
        user: save.username,
        prof: save.profID
    };
    return await savesModel.create(newSave)
}

export const userUnsavesProf = async(uid, pid) => {
    return await savesModel.deleteOne({user: uid, prof: pid})
}

export const findProfsSavedByUser = (username) => savesModel.find({user: username}, {user: false})


export const findUsersThatSaveProf = (profID) => savesModel.find({prof: profID}, {prof: false})


export const findAllSaves = async() => await savesModel.find()
