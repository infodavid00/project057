import { Link } from "react-router-dom";
import "./landing.css";
import section9 from "../../assets/images/section9.png";

export default function Section9() {
  return (
    <div id="landing-section9">
      <div> 
         <div id="landing-section9-title">Investing yourself isn’t for you?</div>
         <div id="landing-section5-text">At <span style={{ fontFamily: "poppins-semibold" }}>Scalable Wealth</span> , our digital asset management, we take care of investing your money for you. Invest easily, automatically and cost-effectively.</div>
         <Link className="landing-section4-card-link" style={{ marginTop: "2em" }}>More about interest</Link>
      </div>
      <img src={section9} />
    </div>
  )
}
