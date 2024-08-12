import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import root from "./route/root.js";
import sroot from "./sroute/root.js";
import { dbConnect } from "./store/connections.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/u", root);
app.use("/su", sroot);

dbConnect(process.env.DBKEY)
  .connect()
  .then(() => {
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });