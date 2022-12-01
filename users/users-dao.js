import usersModel from "./users-model.js";

export const createUser = (user) => usersModel.create(user);

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
      console.log("aaa");
      return res.status(401).json({ error: new Error("User not found!") });
    }
    if ((credential.password = user.password)) {
      console.log("bbb");
      res.status(200).json(user);
      return;
    }
    console.log("ccc");
    return res.status(401).json({
      error: new Error("Incorrect password!"),
    });
  });

export const deleteUser = (uid) => usersModel.deleteOne({ _id: uid });

export const updateUser = (uid, userUpdates) =>
  usersModel.updateOne({ _id: uid }, { $set: userUpdates });
