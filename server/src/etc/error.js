import { bad }  from "./responseParser.js";

export default function error(err, rq, rs, pass) {
  const res = bad(
   "Internal server error", 
   err?.message || err || "" 
  );
  rs.status(500).json(res);
}
