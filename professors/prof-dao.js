import profModel from "./prof-model.js";
import bcrypt from "bcrypt";
import usersModel from "../users/users-model.js";


export const findAllSaves = async() => await profModel.find()
