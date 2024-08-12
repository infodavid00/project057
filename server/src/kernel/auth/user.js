import validator from "validator";
import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";
import Hash from "../../etc/hash.js";
import { randomBytes } from "node:crypto";
import scrambler from "../../etc/scrambler.js";

const idGenerator = (email) => {
  const string =
     `${Buffer.from(email).toString("hex")}.${Date.now()}.${randomBytes(5).toString("hex")}`;
  return scrambler(string)
}
const pudIdGenerator = () => {
  const string = `${Date.now()}.${randomBytes(10).toString("hex")}`;
  return scrambler(string)
}

export async function signup(request, response) {
  try {
    const payload = request.body;
    if (payload.fname && payload.lname) {
      if (payload.email && validator.isEmail(payload.email)) { 
        if (payload.password && payload.password.length >= 6) {
            if (payload.mt4) {
               // check first if email already in use.
               const users = dbConnect().dataset("users");
               const userAlreadyExists = await users.findOne({ email: payload.email });
               if (!userAlreadyExists) {
                  const paymentLogs = dbConnect().dataset("RPL");
                  const userHasPaid = await paymentLogs.findOne({
                    email: payload.email,
                    mt4: payload.mt4
                  });
                  // check if the user has paid.
                  if (userHasPaid) {
                     const password = await new Hash(payload.password).sign()
                     const inviteId = btoa(idGenerator(payload.email));
                      const _id = idGenerator(payload.email);
                     const userInfo = {
                        _id,
                        inviteId,
                        pubId: pudIdGenerator(),
                        firstName: payload.fname,
                        lastName: payload.lname,
                        email: payload.email,
                        password,
                        refered: [],
                        referer: null
                     }

                     const invited = dbConnect().dataset("pool_invited");
                     const userWasRefered = await invited.findOne({
                        email: payload.email,
                        opened: true
                     });
                     if (userWasRefered) {
                        userInfo.referer = userWasRefered.iid;
                     } // update this userInfo referer field if the user was refered

                     await users.insertOne(userInfo);

                     // update the referer's refered field and add this user.
                     if (userWasRefered) {
                        await users.updateOne(
                           { inviteId: userWasRefered.iid },
                           { $push: { refered: _id } }
                        );
                      } 
                     response.status(200).json(ok("ok", ""));
                  } else {
                    const message = [
                        "This mt4 is still under review or does not exists",
                        "Reports contaning this mt4 might have not been uploaded"
                    ];
                    response.status(403).json(bad(...message));
                 }
              } else {
                const message = ["Email already in use!", ""];
                response.status(403).json(bad(...message));
              }
            } else {
              const message = ["MT4 required", "Invalid payload"];
              response.status(400).json(bad(...message));
           }
        } else {
          const message = ["Password must be 6 or more characters", "Invalid password"];
          response.status(400).json(bad(...message));
        }
      } else {
        const message = ["Invalid email address", "Email not in order"];
        response.status(400).json(bad(...message));
      }
    } else {
      const message = ["First name and Last name required", "Invalid request body"];
      response.status(400).json(bad(...message));
    }
  } catch(error) {  
    response.status(500).json(bad("Internal server error", error.message));
  }
}