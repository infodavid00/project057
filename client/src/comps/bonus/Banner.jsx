import "./bonus.css";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/bonus2.json";

export default function Banner() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieSize = window.innerWidth > 760 ? [190, 230] : [100, 200];
  return (
    <div id="bonus-banner">
      <div id="bonus-banner-section1">
        <div id="bonus-banner-section1-title">You have 6.2k points</div>
        <div id="bonus-banner-section1-text">
          Congratulations on your achievement!
        </div>
      </div>
      <Lottie
        options={defaultOptions}
        height={lottieSize[0]}
        width={lottieSize[1]}
      />
    </div>
  );
}
