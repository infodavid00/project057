import { Link } from "react-router-dom";
import Header from "../comps/header/Header";
import "../comps/landing/landing.css";
import BannerImage from "../assets/images/homebanner.png";
import Leadinfo from "../comps/landing/Leadinfo";
import Section3 from "../comps/landing/Section3";
import Section4 from "../comps/landing/Section4";
import Section5 from "../comps/landing/Section5";

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
              <button id="landing-leadcontainer-btn">
               <Link  to="/dashboard">Dashboard</Link>
              </button>
            </div>
            <img src={BannerImage} />
        </div>
        {/* Lead section */}
        <Leadinfo />
        <Section3 />
        <Section4 />
        <Section5 />
    </>
  )
}
