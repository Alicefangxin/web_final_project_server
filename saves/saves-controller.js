import * as savesDao from "./saves-dao.js";
import {findByUsername} from "../users/users-dao.js";
import * as dao from "../users/users-dao.js";

const SavesController = (app) => {
    const populate = (
        {
            rawResults, fieldToPopulate,
            sourceData, sourceField
        }) => {
        const populatedResults = rawResults.map((raw) => {
            const source = sourceData.find(source => source[sourceField] === raw[fieldToPopulate])
            return ({
                ...raw,
                [fieldToPopulate]: source
            })
        })
        return populatedResults
    }
    const userSavesProf = async (req, res) => {
        const save = req.body;
        // const username = req.params.username
        // const pid = req.params.pid

        const newSave = await savesDao.userSavesProf(save)
        res.json(newSave)
    }

    const userUnsavesProf = async (req, res) => {
        const uid = req.params.uid
        const pid = req.params.pid
        const status = await savesDao.userUnsavesProf(uid, pid)
        res.send(status)
    }

    const findAllSaves = async (req, res) => {
        const saves = await savesDao.findAllSaves()
        res.json(saves)
    }

    const findProfsSavedByUser = async (req, res) => {
        const username = req.params.username
        const profs = await savesDao.findProfsSavedByUser(username)
        res.json(profs)
    }

    const findUsersWhoSavedProf = async (req, res) => {
        const pid = req.params.pid
        const users = await savesDao.findUsersThatSaveProf(pid)
        res.json(users)
    }

    app.post('/saves', userSavesProf)
    app.delete('/users/:uid/unsaves/:pid', userUnsavesProf)
    app.get('/saves', findAllSaves)
    app.get('/users/:username/saves', findProfsSavedByUser)
    app.get('/tempProfs/:pid/saves', findUsersWhoSavedProf)
}

export default SavesController
