import { Link } from "react-router-dom";
import Header from "../comps/header/Header";
import "../comps/landing/landing.css";
import BannerImage from "../assets/landing/4.png";
import Leadinfo from "../comps/landing/Leadinfo";
import Section3 from "../comps/landing/Section3";
import Section4 from "../comps/landing/Section4";
import Section5 from "../comps/landing/Section5";
import Section6 from "../comps/landing/Section6";
//import Section7 from "../comps/landing/Section7";
import Section8 from "../comps/landing/Section8";
import Section9 from "../comps/landing/Section9";
import Footer from "../comps/landing/Footer";

export default function Landing() {
  return (
    <> 
        <Header
          title={"WOLFX ACADEMY"}
          shouldShowNavigation={false}
          useFullWidth={true}
          titleLink={"/"}
          hideInvite={true}
          showSupport={true}
        />
        {/* Header */}
        <div id="landing-leadcontainer">
           <div>
              <div id="landing-leadcontainer-title">WOLFX Academy </div>
              <div id="landing-leadcontainer-text">
                Welcome to WOLFX Academy your destination for trading courses and automated trading systems.
                Become a successful trader with our advanced programs.
              </div>
              <button id="landing-leadcontainer-btn">
               <Link  to="/bot">Explore our services</Link>
              </button>
            </div>
            <img src={BannerImage} />
        </div>
        {/* Lead section */}
        <Leadinfo />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        {/*<Section7 />*/}
        <Section8 />
        <Section9 />
        <Footer />
    </>
  )
}
