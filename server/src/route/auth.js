import express from "express";
import { signup, signin } from "../kernel/auth/user.js";

const auth = express.Router();

auth.post("/signup", signup);
auth.post("/signin", signin);

export default auth;

