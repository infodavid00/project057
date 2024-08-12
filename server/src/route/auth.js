import express from "express";
import { signup } from "../kernel/support/user.js";

const auth = express.Router();

support.post("/signup", signup);

export default auth;

