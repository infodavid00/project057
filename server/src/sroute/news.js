import express from "express";
import { postNews, getNewsStats } from "../kernel/news/admin.js";
import { getNews } from "../kernel/news/public.js";
import { verifyCredentials } from "../kernel/auth/admin.js";

const news = express.Router();

news.post("/", verifyCredentials, postNews);
news.get("/", getNews);
news.get("/stats", verifyCredentials, getNewsStats);

export default news;
