import validator from "validator";
import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";
import { randomBytes } from "node:crypto";
import scrambler from "../../etc/scrambler.js";

const ids = () => {
  let _id = `${Date.now()}.${randomBytes(4)}`;
  let supportId = `${Date.now()}`;
  _id = Buffer.from(scrambler(_id)).toString("hex");
  supportId = scrambler(supportId);
  return [_id, supportId];
};

export async function postSupport(request, response) {
  try {
    const payload = request.body;
    if (
      typeof payload === "object" &&
      "email" in payload &&
      "fullname" in payload &&
      "message" in payload
    ) {
      if (validator.isEmail(payload.email)) {
        const db = dbConnect().dataset("_support");
        const sudb = dbConnect().dataset("_su");
        const id = ids();
        const _id = id[0];
        const supportId = id[1];
        await db.insertOne({
          _id,
          supportId,
          email: payload.email,
          fullname: payload.fullname,
          message: payload.message,
          date: Date.now()
        });
        await sudb.updateOne(
          { _id: "SUPPORT" },
          { $inc: { total: 1 }},
          { upsert: true }
        );
        response.status(200).json(ok("ok", supportId));
      } else {
        const message = ["Invalid email format", "Invalid request body"];
        response.status(400).json(bad(...message));
      }
    } else {
      const message = ["Cannot process request", "Invalid request body"];
      response.status(400).json(bad(...message));
    }
  } catch (error) {
     response.status(500).json(bad("Internal server error", error.message));
  }
}
