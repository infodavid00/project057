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
  const lottieSize = window.innerWidth > 760 ? 240 : 140;
  return (
    <div id="monthlyranks-banner">
      <div id="monthlyranks-banner-section1">
        <div id="monthlyranks-banner-section1-title">Monthly ranks</div>
        <div id="monthlyranks-banner-section1-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rerum
          fuga laboriosam dolor, magnam molestias dolorem.
        </div>
      </div>
      <Lottie options={defaultOptions} height={lottieSize} width={lottieSize} />
    </div>
  );
}
