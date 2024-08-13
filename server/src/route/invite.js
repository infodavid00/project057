
import express from "express";
import { verifyCredentials } from "../kernel/auth/user.js";
import { sendInvite } from "../kernel/invite/user.js";

const invite = express.Router();

invite.post("/", verifyCredentials, sendInvite);

export default invite;
