import express from "express";
import { getNews, updateNewsViews } from "../kernel/news/public.js";
import { verifyCredentials } from "../kernel/auth/user.js";

const news = express.Router();

news.get("/", getNews);
news.patch("/uview/:id", verifyCredentials, updateNewsViews);

export default news;
