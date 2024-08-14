import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";

export async function getNews(_, response) {
  try {
    const news = dbConnect().dataset("_news");
    const dataset = await news.find().sort({ date: -1 }).toArray();
    response.status(200).json(ok("ok", dataset));
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}

export async function updateNewsViews(request, response) {
  try {
    const { id: ID } = request.params;
    const news = dbConnect().dataset("_news");
    await news.updateOne({ _id: ID }, {
        $inc: { views: 1}
    });
    response.status(200).json(ok("ok"));
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}
