import validator from "validator";
import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js"
import emailer from "../../services/emailer.js"; 
import InviteTemplate from "./template.js";
import { randomBytes } from "node:crypto";
import scrambler from "../../etc/scrambler.js";
import { parseDDMMYYYYDate } from "../../etc/ddmmyyyyPrinter.js";

export async function sendInvite(request, response) {
  try {
    const payload = request.body;
    if (payload.email && validator.isEmail(payload.email)) {
      const users = dbConnect().dataset("users");
      const userAlreadyExists = await users.findOne({ email: payload.email });
      if (!userAlreadyExists) {
        const invitePool = dbConnect().dataset("pool_invited");
        const entityCantBeRefered = await invitePool.findOne({
          email: payload.email,
          opened: true
        });
        if (!entityCantBeRefered) {
          const userInfo = await users.findOne({ _id: request._id });
          const iid = userInfo.inviteId;
          const INVITELINK =
             process.env["ENDPOINT"] + `/u/invite/${btoa(iid)}/${btoa(payload.email)}`;
          // FORMAT: /invite/base64iid/base64email

          // DO NOT STORE ANY DATA SET AND ONLY SEND THE EMAIL:
          // ONLY STORE THE DATA SET WHEN THE EMAIL IS CLICKED.
          // THIS WAY VERIFICATION IS LESS AND DATASET ONLY CONTAINS VALID DATA
          await emailer(
            `You're Invited to Join WOLFX Academy`,
            payload.email,
            InviteTemplate(`${userInfo.firstName} ${userInfo.lastName}`, INVITELINK)
          );
          response.status(200).json(ok("ok"));
        } else {
          const message = [
            "Your invitation cannot be processed at this time. Please try again in 24 hours",
            "Entity already refered"
          ];
          response.status(403).json(bad(...message));
        }
      } else {
        const message = ["A user with this email address is already registered.", "Invalid email"];
        response.status(403).json(bad(...message));   
      }
    } else {
      const message = ["Cannot process request", "Invalid email"];
      response.status(400).json(bad(...message));
    }
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}

export async function verifyInvite(request, response) {
  try {
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}