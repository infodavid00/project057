import "./landing.css";
import Section5Banner from "../../assets/landing/1.png";

export default function Section5() {
  return (
    <div id="landing-section3-container" className="landing-section5">
      <div> 
         <div id="landing-section5-title">Join Our Profitable Copytrading System Today!</div>
         <div id="landing-section5-text">Choose your deposit level, receive step-by-step guidance, and start earning with our reliable copytrading service. Simple, secure, successful!</div>
         {/*<button id="landing-leadcontainer-btn">More about savings plans</button>*/}
      </div>
      <img src={Section5Banner} />
    </div>
  )
}