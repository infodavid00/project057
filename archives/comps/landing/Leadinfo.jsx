
import "./landing.css";
import Stars from "../../assets/images/starts.svg";

export default function Leadinfo() {
  return (
    <div id="landing-leadinfo-body">
       <div className="landing-leadinfo-cont">
         <div className="landing-leadinfo-cont-title">+1 million</div>
         <div className="landing-leadinfo-cont-text">Build wealth with Scalable</div>
       </div>
       <div className="landing-leadinfo-cont">
         <div className="landing-leadinfo-cont-title">+25 million $</div>
         <div className="landing-leadinfo-cont-text">Capital assets</div>
       </div>
       <div className="landing-leadinfo-cont">
         <img src={Stars} />
         <div className="landing-leadinfo-cont-text">Top rated platform</div>
       </div>
       <div className="landing-leadinfo-cont">
         <div className="landing-leadinfo-cont-title" style={{ border: "none" }}>Security</div>
         <div className="landing-leadinfo-cont-text">
           Securities custody at a Company depository bank
         </div>
       </div>
    </div>
  )
}