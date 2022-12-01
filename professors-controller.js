import axios from "axios";

const base_url = "https://rateprof-api.herokuapp.com/professors";
// const base_url = "http://localhost:5000/professors"

const ProfessorsController = (app) => {
  const findAllProfessors = async (req, res) => {
    const name = req.query.name;
    const university = req.query.university;

    const resp = await axios.get(base_url, {
      params: { name: name, university: university },
    });
    res.json(resp.data);
  };

  app.get("/professors", findAllProfessors);
};

export default ProfessorsController;
