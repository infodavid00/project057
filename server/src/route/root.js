import express from "express";
import error from "../etc/error.js";
import support from "./support.js";
import auth from "./auth.js";
import invite from "./invite.js";
import news from "./news.js";

const root = express();

root.get("/", (req, res) => {
  res.status(200).send("OK");
});

root.use("/support", support);
root.use("/auth", auth);
root.use("/invite", invite);
root.use("/news", news);

root.use(error);

export default root;
