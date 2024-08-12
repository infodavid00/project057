import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";
import emailer from "../../services/emailer.js"; 

export async function replySupport(request, response) {
  try {
    const payload = request.body;
    if (payload.id && payload.reply) {
      const db = dbConnect().dataset("_support");
      const sudb = dbConnect().dataset("_su");
      const support = await db.findOne({ _id: payload.id });
      if (support) {
        await emailer(
          `Response to Your Support Request #${support.supportId}`,
          support.email,
          `<div>${payload.reply}</div>`
        );
        await db.deleteOne({ _id: payload.id });
        await sudb.updateOne(
          { _id: "SUPPORT" },
          { $inc: { replied: 1 }},
          { upsert: true }
        );
        response.status(200).json(ok("ok"));
      } else {
        const message = [
          "Support not found",
          `The support \`${payload.id}\` has been deleted or responded to.`
        ];
        response.status(404).json(bad(...message));
      }
    } else {
      const message = ["Cannot process request", "Invalid request body"];
      response.status(400).json(bad(...message));
    }
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}

export async function getSupport(request, response) {
  try {
    const { page: pageq, size: sizeq } = request.query;
    const size = Number(sizeq) || 10;
    const page = Number(pageq) * size || 0;
    const db = dbConnect().dataset("_support");
    const dataset = await db.find().skip(page).limit(size).toArray();
    response.status(200).json(ok("ok", dataset));
  } catch (error) {
     response.status(500).json(bad("Internal server error", error.message));
  }
}

export async function getSupportStatistics(request, response) {
  try {
    const db = dbConnect().dataset("_su");
    const dataset = await db.findOne({ _id: "SUPPORT"});
    response.status(200).json(ok("ok", dataset));
  } catch (error) {
     response.status(500).json(bad("Internal server error", error.message));
  }
}
