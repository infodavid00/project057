import express from "express";
import { postReports, getReports, getReportStats } from "../kernel/reports/admin.js";
import { verifyCredentials } from "../kernel/auth/admin.js";

const reports = express.Router();

reports.get("/", verifyCredentials, getReports);
reports.post("/", verifyCredentials, postReports);
reports.get("/stats", verifyCredentials, getReportStats);

export default reports;
