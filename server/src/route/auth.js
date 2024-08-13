import express from "express";
import { signup, signin, signout } from "../kernel/auth/user.js";

const auth = express.Router();

auth.post("/signup", signup);
auth.post("/signin", signin);
auth.post("/signout", signout);

export default auth;

