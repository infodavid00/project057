import express from "express";
import { getInfo } from "../kernel/user/user.js";
import { verifyCredentials } from "../kernel/auth/user.js";

const user = express.Router();

user.get("/", verifyCredentials, getInfo);

export default user;
