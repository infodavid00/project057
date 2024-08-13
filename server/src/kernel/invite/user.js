import validator from "validator";
import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js"
import emailer from "../../services/emailer.js"; 

export function sendInvite(request, response) {
  try {
    const payload = request.body;
    if (payload.email && validator.isEmail(payload.email)) {
//       const reportLogs = dbConnect().dataset("RPL");
//       const internalReportLogs = dbConnect().dataset("IRPL");
//       const reportStats = dbConnect().dataset("_su");
//       await internalReportLogs.insertMany(payload);
//       await reportLogs.insertMany(payload);
//       await reportStats.updateOne(
//           { _id: "REPORTS" },
//           { $inc: { len: payload.length }, $set: { lu: Date.now() }},
//           { upsert: true }
//       );
        // await emailer(
        //   `Response to Your Support Request #${support.supportId}`,
        //   support.email,
        //   `<div>${payload.reply}</div>`
        // );
//       response.status(200).json(ok("ok"));
    } else {
      const message = ["Cannot process request", "Invalid email"];
      response.status(400).json(bad(...message));
    }
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}
