import Header from "../comps/header/Header";
import "../comps/landing/landing.css";
import BannerImage from "../assets/images/homebanner.png";

export default function Landing() {
  return (
    <> 
        <Header
          title={"WOLFX ACADEMY"}
          shouldShowNavigation={false}
          useFullWidth={true}
          titleLink={"/"}
        />
        {/* Header */}
        <div id="landing-leadcontainer">
           <div>
              <div id="landing-leadcontainer-title">Lorem ipsum </div>
              <div id="landing-leadcontainer-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rerum fuga 
                laboriosam dolor, magnam molestias dolorem.
              </div>
              <button id="landing-leadcontainer-btn">Dashboard</button>
           </div>
           <img src={BannerImage} />
        </div>
    </>
  )
}
