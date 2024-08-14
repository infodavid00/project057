import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";

export async function postNews(request, response) {
  try {
    const payload = request.body;
    if (payload && payload.headline && payload.content) {
      const news = dbConnect().dataset("_news");
      const newsStats = dbConnect().dataset("_su");
      await news.insertOne({ 
         _id: String(Date.now()),
        headline: payload.headline,
        content: payload.content,
        date: Date.now(),
        views: 0
      });
      await newsStats.updateOne(
        { _id: "NEWS" },
        { $inc: { len: 1 } },
        { upsert: true }
      );
      response.status(200).json(ok("ok"));
    } else {
      const message = ["Cannot process request", "Invalid request body"];
      response.status(400).json(bad(...message));
    }
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}

export async function getNewsStats(_, response) {
  try {
    const newsStats = dbConnect().dataset("_su");
    const dataset = await newsStats.findOne({ _id: "NEWS" });
    response.status(200).json(ok("ok", dataset));
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}

