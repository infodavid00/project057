import express from "express";
import error from "../etc/error.js";
import support from "./support.js";
import auth from "./auth.js";
import invite from "./invite.js";

const root = express();

root.get("/", (req, res) => {
  res.status(200).send("OK");
});

root.use("/support", support);
root.use("/auth", auth);
root.use("/invite", invite);

root.use(error);

export default root;
