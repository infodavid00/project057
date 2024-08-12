
import "./landing.css";
import section8A from "../../assets/images/section8A.png";
import section8B from "../../assets/images/section8B.png";
import section8C from "../../assets/images/section8C.png";

export default function Section8() {
  return (
    <div className="landing-section8">
      <img src={section8A} id="landing-section8-imageA" />
      <div id="landing-section8-imageBcont"> 
         <img src={section8B} className="landing-section8-imageB" />
         <img src={section8C} className="landing-section8-imageB" />
      </div>
    </div>
  )
}
