import "./landing.css";
import Section7Banner from "../../assets/images/section7.svg";

export default function Section7() {
  return (
    <div id="landing-section7-container">
      <div id="landing-section7-textinner-mobile"> 
         <div id="landing-section5-title">In 3 steps to the depot</div>
         <div id="landing-section5-text">Simply start – anytime via app and web.</div>
         <button id="landing-leadcontainer-btn">Open a depot</button>
      </div>
      <img src={Section7Banner} />
    </div>
  )
}
