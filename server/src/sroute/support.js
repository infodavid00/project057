import express from "express";
import {
  getSupport,
  replySupport,
  getSupportStatistics
} from "../kernel/support/admin.js";
import { verifyCredentials } from "../kernel/auth/admin.js";

const support = express.Router();

support.get("/", verifyCredentials, getSupport);
support.post("/", verifyCredentials, replySupport);
support.get("/stats", verifyCredentials, getSupportStatistics);

export default support;
