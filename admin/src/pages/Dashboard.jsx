import { useEffect, useState } from "react";
import verify from "../etc/verify.jsx";
import { TailSpin } from 'react-loader-spinner';
import Sidepanel from "../comps/sidepanel/Sidepanel";
import Main from "../comps/main/Main";


export default function Dashboard() {
  const [isVerified, setisVerified] = useState(true);
  useEffect(()=> {
     //verify(setisVerified);
  }, []);
  if (isVerified === true) {
    return (
      <>
       <Sidepanel active={1} />
       <Main />
      </>
    )
  } else {
    return (
      <div id="loader-container">
        <TailSpin height="20" width="20" color="#fff" />
      </div>
    )
  }
}