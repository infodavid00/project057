import { Link } from "react-router-dom";
import "./landing.css";
import facebook from "../../assets/images/facebook.png";
import x from "../../assets/images/x.png";
import linkedin from "../../assets/images/linkedin.png";
import youtube from "../../assets/images/youtube.png";
import instagram from "../../assets/images/instagram.png";
import tiktok from "../../assets/images/tiktok.png";
import { ChevronRight } from "react-feather";
import Footerbanner from "../../assets/images/footerbanner.svg";


export default function Footer() {
  return (
    <div id="landing-footer">
      
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
       <div id="landing-footer-sectiond">
          <div>
            <div className="landing-footer-sectiond-bold">Wolfx Academy</div>
            <div className="landing-footer-sectiond-faint">Seitzstraße 8e, 80538 Munich | Contact | Imprint</div>
            <div className="landing-footer-sectiond-faint">Responsible supervisory authority: BaFin, Deutsche Bundesbank</div>
            <br />
            <div className="landing-footer-sectiond-faint">Copyright © Wolfx Academy | All rights reserved.</div>
           </div>
       </div>
       {/* SECTION D */}
       </div>
       {/* SECTION B */}
       {/*<div id="landing-footer-sectionc">
          <div className="landing-footer-sectionc-linkcontainers"> 
            <div className="landing-footer-sectionc-linkheader">SCALABLE CAPITAL</div>
            <Link className="landing-footer-sectionc-linktext">About us</Link>
            <Link className="landing-footer-sectionc-linktext">Newsroom</Link>
            <Link className="landing-footer-sectionc-linktext">Careers</Link>
            <Link className="landing-footer-sectionc-linktext">Affiliate program</Link>
            <Link className="landing-footer-sectionc-linktext">Status</Link>
            <Link className="landing-footer-sectionc-linktext">Security</Link>
          </div>
          <div className="landing-footer-sectionc-linkcontainers"> 
            <div className="landing-footer-sectionc-linkheader">USEFUL INFORMATION</div>
            <Link className="landing-footer-sectionc-linktext">Product News</Link>
            <Link className="landing-footer-sectionc-linktext">FAQ</Link>
            <Link className="landing-footer-sectionc-linktext">What is a Robo-Advisor?</Link>
            <Link className="landing-footer-sectionc-linktext">What are ETFs?</Link>
            <Link className="landing-footer-sectionc-linktext">ETF savings plan</Link>
            <Link className="landing-footer-sectionc-linktext">Private pension provision</Link>
          </div>
          <div className="landing-footer-sectionc-linkcontainers"> 
            <div className="landing-footer-sectionc-linkheader">INFORMATION</div>
            <Link className="landing-footer-sectionc-linktext">Documents</Link>
            <Link className="landing-footer-sectionc-linktext">Risk Disclosures</Link>
            <Link className="landing-footer-sectionc-linktext">Privacy</Link>
            <Link className="landing-footer-sectionc-linktext">Policy Sustainability Disclosures</Link>
            <Link className="landing-footer-sectionc-linktext">Privacy Settings</Link>
          </div>
       </div>*/}
       {/* SECTION C */}
    </div>
  )
}