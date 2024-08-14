import { dbConnect } from "../../store/connections.js";

export default async function sync() {
 try {
   const users = dbConnect().dataset("users");
   const internalReportLogs = dbConnect().dataset("IRPL");
   let usersNotRecorderd = 0;
   let usersRecorderdDuringThisSync = 0;
   //ONLY FIND USERS THAT WHERE REFERED
   const referedUsers = await users.find({ 
     referer: { $ne: null } 
   }).toArray();

   if (referedUsers.length !== 0) {
      referedUsers.forEach(async (element, index) => {
        //ELEMENT.ISRECORDED MEANING THIS USER HAS BEIGN REVIEWED, AND 
        //HIS/HER FIRST DEPOSIT HAS BEIGN TAKEN AND COMMISSION ASWELL AS POINTS
        //HAS BEIGN CREDITED
        if (!element?.isRecorded) {
           usersNotRecorderd += 1;
          //NOW LOOK FOR THIS USER IN REPORT LOGS: WHERE THE MT4 MATCHES AND
          //THE USER HAS DEPOSITED   
          const report = await internalReportLogs.findOne({
              mt4: element.mt4,
              "First Deposit": { $gt: 1 } 
          });
          //IF REPORT THEN IT MEANS THIS USER HAS DEPOSITED BUT HAS NOT BEIGN
          //RECORDED    
          if (report) {
              usersRecorderdDuringThisSync += 1;
              const deposit = report["First Deposit"];
              const point = deposit;
              const commission = {
                inviter: 0,
                invitersInviter: 0
              };
              if (deposit === 250) {
                 commission.inviter = 60;
                 commission.invitersInviter = 40;
              }
              if (deposit === 500) {
                 commission.inviter = 120;
                 commission.invitersInviter = 80;
              }
              if (deposit === 1000) {
                 commission.inviter = 165;
                 commission.invitersInviter = 110;
              }
              if (deposit === 3000) {
                 commission.inviter = 210;
                 commission.invitersInviter = 140;
              }

              //update referer:
              await users.updateOne(
                { inviteId: referedUsers.referer },
                {
                  $inc: {
                     points: point,
                     deposits: deposit,
                     commission: commission.inviter
                  },
                  $push: {
                    referedINFO: {
                        deposit,
                        date: report["First Deposit Date"],
                        email: element.email,
                        fname: element.firstName,
                        lname: element.lastName,
                        _id: element._id
                    }
                  }
                }
              );

              // update inviter's inviter
              const inviter = await users.findOne(
                 { inviteId: referedUsers.referer },
                 { projection: { referer: 1 } }
              )
              const invitersInviter = inviter?.referer;
              if (invitersInviter) {
                await users.updateOne(
                 { inviteId: invitersInviter },
                 { $inc: { commission: commission.invitersInviter }}
                )
              }

              // update user :
              await users.updateOne({ _id: element._id }, { $set: { isRecorded: true } });
              
              //REMOVE ALL THIS USER LOGS FROM THE IRPL DATASET 
              await internalReportLogs.deleteMany({ mt4: element.mt4 });
          }
        }  
     });
   }
   console.log(`COMPLETED SYNC ${new Date()}`);
   console.log(`REPORT : ${usersNotRecorderd} users have signed up via refereral but havent been updated(points, commisions).`);
   console.log(`REPORT : ${usersRecorderdDuringThisSync} users during this sync has finaly deposited and has beign recorded. \n\n`);
 } catch (error) {
   console.log(`ERROR DURING SYNC ${new Date()}, REPORT : ${error.message}`);
 }
}
