import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";

export async function getInfo(request, response) {
  try {
    const _id = request._id;
    const users = dbConnect().dataset("users");
    const info = await users.findOne({ _id }, {
        projection: {
           "AUTH_CURRENT_LOGIN_AT": 0,
           "AUTH_CURRENT_LOGIN_TOKEN": 0,
        }
    });
    response.status(200).json(ok("ok", info));
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}

export async function updateProfileImage(request, response) {
  try {
    const _id = request._id;
    const { url } = request.body;
    if (url) {
      const users = dbConnect().dataset("users");
      await users.updateOne({ _id }, { $set: { profile: url }});
      response.status(200).json(ok("ok"));
    } else {
      const message = ["Cannot process request", "Invalid request body"];
      response.status(400).json(bad(...message));
    }
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}


