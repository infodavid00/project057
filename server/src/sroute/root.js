import express from "express";
import error from "../etc/error.js";
import { login, verifyCredentials, signout } from "../kernel/auth/admin.js";
import support from "./support.js";
import reports from "./reports.js";
import news from "./news.js";

const sroot = express();

sroot.get("/", (req, res) => {
  res.status(200).send("OK - ADMIN");
});
sroot.get("/verify", verifyCredentials, (req, res) => {
  res.status(200).send("OK");
});
sroot.post("/auth", login);
sroot.post("/auth/signout", signout);

sroot.use("/support", support);
sroot.use("/reports", reports);
sroot.use("/news", news);

sroot.use(error);

export default sroot;
