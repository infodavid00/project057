import "./landing.css";
import { Link } from "react-router-dom";
import section3banner from "../../assets/landing/2.png";
import Checkmark from "../../assets/svgs/checkmark.svg";

export default function Section3() {
  return (
     <div id="landing-section3-container">
       <div id="landing-section3-inner">
          <img src={section3banner} id="landing-section3-inner-banner" />
          <div>
             <div id="landing-section3-inner-title">Plan Your Financial Success</div>
             <div className="landing-section3-inner-listscont">
               <img src={Checkmark}/>
               <div>Learn to invest in ETFs, stocks, funds, and crypto with our trading courses, suitable for all levels.
               </div>
             </div>
             <div className="landing-section3-inner-listscont">
               <img src={Checkmark} />
               <div>Trade conveniently from your computer - utilize our intuitive and user-friendly platforms.</div>
             </div>
             <div className="landing-section3-inner-listscont">
               <img src={Checkmark} />
               <div>Take advantage of our copytrading systems - follow top traders and maximize your returns.</div>
             </div>
             <div className="landing-section3-inner-listscont">
               <img src={Checkmark} />
               <div>Earn with our affiliate program - up to €900 for each person you invite who purchases one of our services.</div>
             </div>
          </div>
       </div>
     </div>
  )
}