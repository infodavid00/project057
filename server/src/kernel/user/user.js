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
