import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";
import { randomBytes } from "node:crypto";
import scrambler from "../../etc/scrambler.js";

export async function login(request, response) {
  try {
    const payload = request.body;
    if (payload.username && payload.password) {
        if (
            payload.username === process.env.ADMINNAME &&
            payload.password === process.env.ADMINPASS
        ) {
         let tokenId = `${Date.now()}.${randomBytes(20)}`;
         tokenId = Buffer.from(scrambler(tokenId)).toString("hex");
         const db = dbConnect().dataset("_su");
         await db.updateOne(
           { _id: "ADMIN" }, 
           { $set: { tokenId, loginAt: Date.now() } },
           { upsert: true } 
         );
         response.status(200).json(ok("ok", btoa(tokenId)));
       } else {
         const message = [
             "Incorrect super user credentials",
             "Both username and password must match the site's credentials"
         ];
         response.status(403).json(bad(...message));
      }
    } else {
      const message = ["Cannot process request", "Invalid request body"];
      response.status(400).json(bad(...message));
    }
  } catch (error) {
     response.status(500).json(bad("Internal server error", error.message));
  }
}


export async function verifyCredentials(request, response, next) {
  try {
    const token = request.headers?.pass;
    if (token) {
      const db = dbConnect().dataset("_su");
      const dataset = await db.findOne({ _id: "ADMIN" });
      if (dataset.tokenId === atob(token)) next();
      else {
         const message = ["Permission Denied", "Invalid token"];
         response.status(403).json(bad(...message));
      }
    } else {
      const message = ["Cannot process request", "Token required"];
      response.status(400).json(bad(...message));
    }
  } catch (error) {
     response.status(500).json(bad("Internal server error", error.message));
  }
}