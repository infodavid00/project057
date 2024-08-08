import "./landing.css";
import { Link } from "react-router-dom";
import section3banner from "../../assets/images/section3banner.png";
import Checkmark from "../../assets/svgs/checkmark.svg";

export default function Section3() {
  return (
     <div style={{ marginTop: "4em" }}>
       <div id="landing-section3-inner">
          <img src={section3banner} id="landing-section3-inner-banner" />
          <div>
             <div id="landing-section3-inner-title">Determine your financial future</div>
             <div className="landing-section3-inner-listscont">
               <img src={Checkmark} />
               <div>
                <span style={{color:"white",fontFamily:"poppins-semibold"}}>Trade as you wish -</span> via app on iOS or Android and on the web.
               </div>
             </div>
             <div className="landing-section3-inner-listscont">
               <img src={Checkmark} />
               <div>
                <span style={{color:"white",fontFamily:"poppins-semibold"}}>I Let cash do the work -</span> receive 2.6% pa interest (Baader Bank) on up to €100,000.
               </div>
             </div>
          </div>
       </div>
     </div>
  )
}