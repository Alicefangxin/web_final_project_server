import * as tempProfsDao from "./tempProfs-dao.js";
import {findProfById} from "./tempProfs-dao.js";

const tempProfsController = (app) => {
    const findAllProfs = async (req, res) => {
        const profs = await tempProfsDao.findAllProfs()
        res.json(profs)
    }

    const findProfById = async(req, res) => {
        const profID = req.params.pid
        const prof = await tempProfsDao.findProfById(profID)
        res.json(prof)
    }

    const findProfByName = async(req, res) => {
        const profName = req.params.name
        const prof = await tempProfsDao.findByProfName(profName)
        res.json(prof)
    }

    app.get('/tempProfs', findAllProfs)
    app.get('/tempProfs/:pid', findProfById)
    app.get('/tempProfs/:name', findProfByName)
}


export default tempProfsController;