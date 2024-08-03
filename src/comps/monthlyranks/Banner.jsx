import "./monthlyranks.css";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/bonus.json";

export default function Banner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieSize = window.innerWidth > 760 ? 300 : 150;
  return (
    <div id="monthlyranks-banner">
      <div id="monthlyranks-banner-section1">
        <div id="monthlyranks-banner-section1-title">Monthly ranks</div>
        <div id="monthlyranks-banner-section1-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rerum
          fuga laboriosam dolor, magnam molestias dolorem. Debitis quo inventore
          esse alias, dolorem libero aspernatur minus sit! Maxime minus eum est!
        </div>
      </div>
      <Lottie options={defaultOptions} height={lottieSize} width={lottieSize} />
    </div>
  );
}
