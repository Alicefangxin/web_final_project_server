import * as savesDao from "./saves-dao.js";
import axios from "axios";

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

        const resp = await axios.get("https://rateprof-api.herokuapp.com/allprofessors", {params: {name: "", university: "neu"}});
        let all_profs = resp.data
        let ids = []
        profs.map((prof) => {
            ids.push(parseInt(prof.prof, 10))
        })
        res.json(all_profs.filter(prof => ids.indexOf(prof._id) > -1))
    }

    const findUsersWhoSavedProf = async (req, res) => {
        const profID = req.params.profID
        const users = await savesDao.findUsersThatSaveProf(profID)
        res.json(users)
    }

    app.post('/saves', userSavesProf)
    app.delete('/users/:uid/unsaves/:pid', userUnsavesProf)
    app.get('/saves', findAllSaves)
    app.get('/users/:username/saves', findProfsSavedByUser)
    app.get('/profs/:profID/saves', findUsersWhoSavedProf)
}

export default SavesController