import * as dao from "./users-dao.js";
import { findByCredentials, findByUsername } from "./users-dao.js";

let currentUser = null;

const UsersController = (app) => {
  const createUser = async (req, res) => {
    const user = req.body;
    const actualUser = await dao.createUser(user);
    res.json(actualUser);
  };
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };
  const deleteUser = async (req, res) => {
    const uid = req.params.uid;
    const status = await dao.deleteUser(uid);
    res.json(status);
  };
  const updateUser = async (req, res) => {
    const username = req.body.username;
    const updates = req.body;
    const status = await dao.updateUser(username, updates);
    console.log("status: ", status);
    res.json(status);
  };

  const loadUserByUsername = async (req, res) => {
    const username = req.query.username;
    const existingUser = await findByUsername(username);
    if (!existingUser) {
      res.sendStatus(403);
      return;
    }
    res.status(200).json(existingUser);
  };

  const register = async (req, res) => {
    const user = req.body;
    const existingUser = await findByUsername(user.username);
    if (existingUser) {
      res.sendStatus(403);
      return;
    }
    const actualUser = await dao.createUser(user);
    currentUser = actualUser;
    res.json(actualUser);
  };

  const login = async (req, res) => {
    const credentials = req.body;
    console.log("login credential", credentials);
    await findByCredentials(credentials, res);
    // console.log("error: ", error);
    return;
    // if (!existingUser) {
    //   res.sendStatus(403);
    //   console.log("user not exist", existingUser);
    //   return;
    // }
    // currentUser = existingUser;
    // res.json(existingUser);
  };

  const profile = async (req, res) => {
    if (currentUser) {
      res.json(currentUser);
      return;
    }
    res.sendStatus(403);
  };

  app.post("/users", createUser);
  app.get("/users", findAllUsers);
  app.get("/oneuser", loadUserByUsername);
  app.delete("/users/:uid", deleteUser);
  app.put("/profile/edit-profile", updateUser);
  // app.put("/users/:uid", updateUser);

  app.post("/register", register);
  app.post("/login", login);
  app.post("/profile", profile);
};

export default UsersController;
