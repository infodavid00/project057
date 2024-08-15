import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import root from "./route/root.js";
import sroot from "./sroute/root.js";
import { dbConnect } from "./store/connections.js";
import removeLogsFromInvitePool from "./etc/removeLogsFromInvitePool.js";
import sync from "./kernel/reports/sync.js";
import cloudinary from './etc/cloudinary.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/u", root);
app.use("/su", sroot);

app.use('/upload', 
  express.json({ limit: '10mb' }), 
  express.urlencoded({ extended: true })
);
app.post('/upload/image', async (req, res) => {
  try {
    const { image } = req.body;
    const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${image}`);
    res.status(200).json({
      message: 'Image uploaded successfully!',
      url: result.secure_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload image.' });
  }
});


dbConnect(process.env.DBKEY)
  .connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
      setInterval(async () => await removeLogsFromInvitePool(), 97200000);
      //appx 27 hours interval the +3 hours is to ensure some records created close
      //to the next day eg an hour or few minutes to the next day, are not 
      //deleted prematurely.
      setInterval(async () => await sync(), 600000)
      // appx after every 600k ms (10 minutes)
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
