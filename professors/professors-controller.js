import axios from "axios";

const base_url = "https://rateprof-api.herokuapp.com";

const ProfessorsController = (app) => {
    const findAllProfessors = async (req, res) => {
        const name = req.query.name;
        const university = req.query.university;
        const resp = await axios.get(`${base_url}/professors`, {params: {name: name, university: university}});
        res.json(resp.data);
    };

    const searchProfessors = async (req, res) => {
        const name = req.query.name;
        const university = req.query.university;
        const resp = await axios.get(`${base_url}/searchprofessors`, {params: {name: name, university: university}});
        res.json(resp.data);
    };

  app.get("/professors", findAllProfessors);
  app.get("/searchprofessors", searchProfessors);
};

export default ProfessorsController;
