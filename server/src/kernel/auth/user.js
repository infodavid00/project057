import validator from "validator";
import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";
import Hash from "../../etc/hash.js";
import { randomBytes } from "node:crypto";
import scrambler from "../../etc/scrambler.js";
import { parseDDMMYYYYDate } from "../../etc/ddmmyyyyPrinter.js";

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
                  // check if the user has registered in the broker.
                  const paymentLogs = dbConnect().dataset("RPL");
                  const userHasRegistered = await paymentLogs.findOne({ mt4: payload.mt4 });
                  if (userHasRegistered) {
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

                     // update this userInfo referer field if the user was refered
                     const invited = dbConnect().dataset("pool_invited");
                     const userWasRefered = await invited.findOne({
                        email: payload.email,
                        opened: true,
                        date: parseDDMMYYYYDate(userHasRegistered["Registration Date"])
                     });
                     if (userWasRefered) {
                        userInfo.referer = userWasRefered.iid;
                     }

                     // register the user
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
                      "The provided MT4 is still under review or does not exist",
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


export async function signin(request, response) {
  try {
    const payload = request.body;
    if (payload.email && payload.password && validator.isEmail(payload.email)) {
      const users = dbConnect().dataset("users");
      const userWithEmail = await users.findOne({ email: payload.email });
      if (userWithEmail) {
        const passwordMatches = await new Hash(payload.password).compare(
          userWithEmail.password
        );
        if (passwordMatches) { 
           let tokenId = `${Date.now()}.${randomBytes(20)}`;
           tokenId = Buffer.from(scrambler(tokenId)).toString("hex");
           tokenId = `${userWithEmail._id}-----${tokenId}`;
           await users.updateOne(
             {_id: userWithEmail._id}, 
             {$set: { 
               AUTH_CURRENT_LOGIN_TOKEN: tokenId,
               AUTH_CURRENT_LOGIN_AT: Date.now()
             }},
           );
           response.status(200).json(ok("ok", btoa(tokenId)));
        } else {
          const message = ["Incorrect password", ""];
          response.status(401).json(bad(...message));       
        }
      } else {
        const message = ["User does not exist", ""];
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

export async function verifyCredentials(request, response, next) {
  try {
    let token = request.headers?.pass;
    if (token) {
       token = atob(token);
       let _id = token.split("-----");
       _id = _id[0];
       if (_id) {
         const users = dbConnect().dataset("users");
         const dataset = await users.findOne({ _id });
         if (dataset && dataset.AUTH_CURRENT_LOGIN_TOKEN === token) {
           request["_id"] = _id;
           next()
         }
         else {
           const message = ["Permission Denied", "Invalid token"];
           response.status(403).json(bad(...message));
         }
      } else {
        const message = ["Cannot parse credentials", "Invalid token"];
        response.status(400).json(bad(...message));
      }
    } else {
      const message = ["Cannot process request", "Token required"];
      response.status(400).json(bad(...message));
    }
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}


export async function signout(request, response) {
  try {
    let token = request.headers?.pass;
    token = atob(token);
    let _id = token.split("-----");
    _id = _id[0];
    const users = dbConnect().dataset("users");
    await users.updateOne(
      {_id}, 
      {$set: { 
          AUTH_CURRENT_LOGIN_TOKEN: null,
          AUTH_CURRENT_LOGIN_AT: null
      }},
    );
    response.status(200).json(ok("ok"));
  } catch (error) {
    response.status(500).json(bad("Internal server error", error.message));
  }
}
