
import express from "express";
import { verifyCredentials } from "../kernel/auth/user.js";
import { sendInvite, verifyInvite } from "../kernel/invite/user.js";

const invite = express.Router();

invite.post("/", verifyCredentials, sendInvite);
invite.get("/:iid/:email", verifyInvite);
//- invite/base64iid/base64email

export default invite;
