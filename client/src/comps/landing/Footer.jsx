import { Link } from "react-router-dom";
import "./landing.css";
import facebook from "../../assets/images/facebook.png";
import x from "../../assets/images/x.png";
import linkedin from "../../assets/images/linkedin.png";
import youtube from "../../assets/images/youtube.png";
import instagram from "../../assets/images/instagram.png";
import tiktok from "../../assets/images/tiktok.png";
import { ChevronRight } from "react-feather";


export default function Footer() {
  return (
    <div id="landing-footer">
       <div id="landing-footer-maintext">Investing involves risks. The value of your investment can fall or rise. You may lose the capital you invested. Past performance, simulations or forecasts are not a reliable indicator of future performance. Please note our risk information .</div>
       {/* SECTION A */}
       <div id="landing-footer-sectionb">
          <div className="landing-footer-sectionb-child">
            <div className="landing-footer-sectionb-child-title">Follow us</div>
            <div id="landing-footer-sectionb-child-iconsection">
              <img src={facebook} />
              <img src={x} />
              <img src={linkedin} />
              <img src={youtube} />
              <img src={instagram} />
              <img src={tiktok} />
            </div>
          </div>
          <div className="landing-footer-sectionb-child">
             <div className="landing-footer-sectionb-child-title">Subscribe to Newsletter</div>
             <div id="landing-footer-sectionb-child-inputsection">
               <input type="email" placeholder="E-mail address *" />
               <button><ChevronRight color="black" strokeWidth={1.2} /></button>
             </div>
          </div>
       </div>
       {/* SECTION B */}
       <div id="landing-footer-sectiond">
          <div className="landing-footer-sectiond-bold">Wolfx Academy</div>
          <div className="landing-footer-sectiond-faint">Copyright © Wolfx Academy | All rights reserved.</div>
       </div>
       {/* SECTION D */}
    </div>
  )
}