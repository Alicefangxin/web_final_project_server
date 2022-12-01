import axios from "axios";

const REACT_API_BASE_URL = process.env.REACT_API_BASE_URL;

const ProfessorsController = (app) => {
  const findAllProfessors = async (req, res) => {
    const name = req.query.name;
    const university = req.query.university;
    const resp = await axios.get(`${REACT_API_BASE_URL}/professors`, {
      params: { name: name, university: university },
    });
    res.json(resp.data);
  };

  const searchProfessors = async (req, res) => {
    const name = req.query.name;
    const university = req.query.university;
    const resp = await axios.get(`${REACT_API_BASE_URL}/searchprofessors`, {
      params: { name: name, university: university },
    });
    res.json(resp.data);
  };

  app.get("/api/professors", findAllProfessors);
  app.get("/api/searchprofessors", searchProfessors);
};

export default ProfessorsController;
