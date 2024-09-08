
import "./monthlyranks.css";
import cards from "./cards.jsx";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/confetti.json";
import { useLocation } from 'react-router-dom';

export default function Notification() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const uname = queryParams.get('test.uname');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const nameAbbv = (index) => {
    if (index === 1) return "1ST"
    if (index === 2) return "2ND"
    if (index === 3) return "3RD"
    if (index === 4) return "4TH"
    if (index === 5) return "5TH"
    if (index === 6) return "6TH"
    if (index === 7) return "7TH"
    if (index === 8) return "8TH"
    if (index === 9) return "9TH"
    if (index === 10) return "10TH"
  }
  return (
    <>
    {cards.find(e => e.name === uname) ?
       <div id="monthlyranks-banner2-good"> 
        <section>
          Congratulations, you have been ranked {nameAbbv(cards.findIndex(e => e.name === uname) + 1)} in our monthly rankings and have won
          an iPhone 15 Pro Max and a €100 cash price as a reward for your execeptional 
          achievement.
        </section>
        <div id="monthlyranks-banner2-lottiesection">
          <Lottie options={defaultOptions} height={100} width={300} />
        </div>
       </div>
    : (
       <div id="monthlyranks-banner2-mid"> 
         You have not yet reached 10,000 points - You have 202 points left to participate.
       </div>
    )}
    </>
  );
}
