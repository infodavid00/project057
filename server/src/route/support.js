import express from "express";
import { postSupport } from "../kernel/support/user.js";

const support = express.Router();

support.post("/", postSupport);

export default support;
