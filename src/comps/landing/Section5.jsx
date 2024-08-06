import "./landing.css";
import Section5Banner from "../../assets/images/section5.png";

export default function Section5() {
  return (
    <div id="landing-section3-container" className="landing-section5">
      <div> 
         <div id="landing-section5-title">Savings plans</div>
         <div id="landing-section5-text">Invest in stocks, ETFs, funds and crypto from just €1 savings rate.</div>
         <button id="landing-leadcontainer-btn">More about savings plans</button>
      </div>
      <img src={Section5Banner} />
    </div>
  )
}