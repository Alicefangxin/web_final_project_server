import * as tempProfsDao from "./tempProfs-dao.js";

const tempProfsController = (app) => {
    const findAllProfs = async (req, res) => {
        const profs = await tempProfsDao.findAllProfs()
        res.json(profs)
    }

    const findProfById = async(req, res) => {
        const pid = req.params.pid
        const prof = await tempProfsDao.findProfById(pid)
        res.json(prof)
    }

    app.get('/tempProfs', findAllProfs)
    app.get('/tempProfs/:pid', findProfById)
}


export default tempProfsController;