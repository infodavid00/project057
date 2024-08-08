import { Link } from "react-router-dom";
import "./landing.css";

export default function Section4() {
  return (
     <div id="landing-section4-container">
        <div id="landing-section4-leadtext">Everything in one broker</div>
        <div id="landing-section4-firscardsec">
           <div id="landing-section4-card-large">
              <div className="landing-section4-card-title">Interest charges <span style={{ color: "#B699FF"}}>.</span></div>
              <div className="landing-section4-card-text">2.6% pa interest on balances up to €100,000 <br />– in the PRIME+ broker with trading flat rate. </div>
              <Link className="landing-section4-card-link" style={{ color: "#B699FF"}}>More about interest</Link>
           </div>
           {/*FIRST CARD*/}
        </div>
        {/* FIRST CARD SECTION */}

        <div id="landing-section4-secondcardsec">
           <div className="landing-section4-card landing-section4-card-shortened">
             <div className="landing-section4-card-title">bonds .</div>
             <div className="landing-section4-card-text">Trade fixed-interest securities and profit from bond interest. </div>
             <Link className="landing-section4-card-link landing-section4-card-link-bottom">More about bonds</Link>
           </div>
           <div className="landing-section4-card landing-section4-card-shortened">
             <div className="landing-section4-card-title">Funds .</div>
             <div className="landing-section4-card-text">Trade over 3,500 funds permanently without an issue charge. </div>
             <Link className="landing-section4-card-link landing-section4-card-link-bottom">Find funds / More about funds</Link>
           </div>
           <div className="landing-section4-card landing-section4-card-shortened">
             <div className="landing-section4-card-title">Derivatives <span style={{ color: "#B699FF"}}>.</span></div>
             <div className="landing-section4-card-text">Implement your market perspective with over 375,000 derivatives. </div>
             <Link className="landing-section4-card-link landing-section4-card-link-bottom" style={{ color: "#B699FF"}}>Find derivatives / More about derivatives</Link>
           </div>
        </div>
     </div>
  )
}