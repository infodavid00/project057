import { Link } from "react-router-dom";
import "./landing.css";

export default function Section4() {
  return (
     <div id="landing-section4-container">
        <div id="landing-section4-leadtext">Everything in One Academy</div>
        <div id="landing-section4-firscardsec">
           <div id="landing-section4-card-large">
              <div className="landing-section4-card-title">Investment Returns <span style={{ color: "#B699FF"}}>.</span></div>
              <div className="landing-section4-card-text">Learn how to achieve optimal returns with our automated trading systems and high quality courses. </div>
           </div>
           {/*FIRST CARD*/}
        </div>
        {/* FIRST CARD SECTION */}

        <div id="landing-section4-secondcardsec">
           <div className="landing-section4-card landing-section4-card-shortened">
             <div className="landing-section4-card-title">Comprehensive Training .</div>
             <div className="landing-section4-card-text">Access specialized courses to enhance your skills and become a successful trader. </div>
           </div>
           <div className="landing-section4-card landing-section4-card-shortened">
             <div className="landing-section4-card-title">Continuous Support .</div>
             <div className="landing-section4-card-text">Recieve ongoing support from our experts to guide you through your learning and trading journey. </div>
           </div>
           <div className="landing-section4-card landing-section4-card-shortened">
             <div className="landing-section4-card-title">Security <span style={{ color: "#B699FF"}}>.</span></div>
             <div className="landing-section4-card-text">Invest with confidence using our advanced security systems and securities custody with depository banks.</div>
           </div>
           <div className="landing-section4-card landing-section4-card-shortened">
             <div className="landing-section4-card-title">Forex .</div>
             <div className="landing-section4-card-text">Trade different currency pairs. </div>
           </div>
           <div className="landing-section4-card landing-section4-card-shortened">
             <div className="landing-section4-card-title">Raw materials <span style={{ color: "#FCD448"}}>.</span></div>
             <div className="landing-section4-card-text">Simply invest in raw materials and precious metals and save from €1. </div>
           </div>
           <div className="landing-section4-card landing-section4-card-shortened">
             <div className="landing-section4-card-title">Crypto.</div>
             <div className="landing-section4-card-text">Trade Bitcoin, Ethereum and other cryptocurrencies through regulated exchanges. </div>
           </div>
           <div className="landing-section4-card landing-section4-card-shortened">
             <div className="landing-section4-card-title">Affiliation .</div>
             <div className="landing-section4-card-text">Earn with our affiliate program - up to €900 for each person you invite who purchases one of our services.</div>
           </div>
        </div>
     </div>
  )
}