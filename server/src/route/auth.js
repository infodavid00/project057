import express from "express";
import { signup, signin, signout, changePassword } from "../kernel/auth/user.js";
import { verifyCredentials } from "../kernel/auth/user.js";

const auth = express.Router();

auth.post("/signup", signup);
auth.post("/signin", signin);
auth.post("/signout", signout);
auth.post("/changePsw", verifyCredentials, changePassword);

export default auth;
