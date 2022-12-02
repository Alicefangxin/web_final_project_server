import usersModel from "./users-model.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const createUser = (user) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(user.password, salt);
  // console.log("newUser is creating, the hash is: ", hash);
  const newUser = {
    ...user,
    password: hash,
  };
  usersModel.create(newUser);
};

export const register = async (user) => {
  const existingUser = await findByUsername(user.username);
  if (existingUser) {
  }
};

export const findAllUsers = () => usersModel.find();

export const findUserById = (uid) => usersModel.findById(uid);

export const findByUsername = (username) => usersModel.findOne({ username });

export const findByCredentials = (credential, res) =>
  usersModel.findOne({ username: credential.username }).then((user) => {
    if (!user) {
      console.log("login: user not found error.");
      return res.status(401).json({ error: new Error("User not found!") });
    }
    console.log("user password: ", user.password);
    const isPasswordCorrect = bcrypt.compareSync(
      credential.passwordInput,
      user.password
    );
    if (isPasswordCorrect) {
      console.log("user login succeed.");
      res.status(200).json(user);
      return;
    } else {
      return res.status(401).json({ msg: "Invalid credencial" });
    }
  });

export const deleteUser = (uid) => usersModel.deleteOne({ _id: uid });

export const updateUser = (uid, userUpdates) =>
  usersModel.updateOne({ _id: uid }, { $set: userUpdates });
