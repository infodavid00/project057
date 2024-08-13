import { dbConnect } from "../store/connections.js";
import { getDateArray } from "./ddmmyyyyPrinter.js";

export default async function removeLogsFromInvitePool(){
 try {
   const pool = dbConnect().dataset("pool_invited");
   const today = new Date();
   const yesterday = new Date(today);
   yesterday.setDate(today.getDate() - 1);
   const fullISOString = yesterday.toISOString();
   const actionOnDate = getDateArray(fullISOString);
   console.log(`Deleting records for ${actionOnDate[0]}-${actionOnDate[1]}-${actionOnDate[2]}`);
   await pool.deleteMany({ date: actionOnDate})
 } catch (error) {
   console.log(`INVITE_POOL_ERROR ==> ${error.message}`);
   await removeLogsFromInvitePool();
 }
}

