import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";

export async function signup(request, response) {
  try {
    const payload = request.body;
    if (payload.fname && payload.lname) {
    } else {
      const message = ["Cannot process request", "Invalid request body"];
      response.status(400).json(bad("Internal server error", error.message));
    }
  } catch(error) {  
    response.status(500).json(bad("Internal server error", error.message));
  }
}