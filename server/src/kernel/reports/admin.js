import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";

export async function postReports(request, response) {
  try {
    const payload = request.body;
    if (payload && Array.isArray(payload)) {
      const reportLogs = dbConnect().dataset("RPL");
      const internalReportLogs = dbConnect().dataset("IRPL");
      const reportStats = dbConnect().dataset("_su");
      await internalReportLogs.insertMany(payload);
      await reportLogs.insertMany(payload);
      await reportStats.updateOne(
          { _id: "REPORTS" },
          { $inc: { len: payload.length }, $set: { lu: Date.now() }},
          { upsert: true }
      );
      response.status(200).json(ok("ok"));
    } else {
      const message = ["Cannot process request", "Invalid request body, expected an array"];
      response.status(400).json(bad(...message));
    }
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}

export async function getReports(request, response) {
  try {
    const { page: pageq, size: sizeq } = request.query;
    const size = Number(sizeq) || 10;
    const page = Number(pageq) * size || 0;
    const reportLogs = dbConnect().dataset("RPL");
    const dataset = await reportLogs.find().skip(page).limit(size).toArray();
    response.status(200).json(ok("ok", dataset));
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}

export async function getReportStats(_, response) {
  try {
    const reportStats = dbConnect().dataset("_su");
    const dataset = await reportStats.findOne({ _id: "REPORTS" });
    response.status(200).json(ok("ok", dataset));
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}