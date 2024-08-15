import express from "express";
import { getInfo, updateProfileImage } from "../kernel/user/user.js";
import { verifyCredentials } from "../kernel/auth/user.js";

const user = express.Router();

user.get("/", verifyCredentials, getInfo);
user.post("/uploadProfileImage", verifyCredentials, updateProfileImage);

export default user;

