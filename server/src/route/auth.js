import express from "express";
import { signup, signin } from "../kernel/support/user.js";

const auth = express.Router();

support.post("/signup", signup);
support.post("/signin", signin);

export default auth;

