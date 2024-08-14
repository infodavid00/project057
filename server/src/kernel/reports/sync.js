import { ok, bad } from "../../etc/responseParser.js";
import { dbConnect } from "../../store/connections.js";

export default async function sync() {
  try {
    const users = dbConnect().dataset("users");
    const internalReportLogs = dbConnect().dataset("IRPL");

    const Allusers = await users.find({}, {
      projection: {
        _id: 1,
        mt4: 1
      }
    }).toArray();

    Allusers.forEach((element, index) => {
      console.log(element)
    });
    // await internalReportLogs.insertMany(payload);
//       await reportLogs.insertMany(payload);
//       await reportStats.updateOne(
//           { _id: "REPORTS" },
//           { $inc: { len: payload.length }, $set: { lu: Date.now() }},
//           { upsert: true }
//       );
//       response.status(200).json(ok("ok"));
//     } else {
//       const message = ["Cannot process request", "Invalid request body, expected an array"];
//       response.status(400).json(bad(...message));
//     }
//   } catch (error) {
//     response.status(500).json(bad("Internal server error", error.message));
//   }
// }
  } catch (error) {
    console.log(`ERROR DURING SYNC ${new Date()}, REPORT : ${error.message}`);
  }
}
