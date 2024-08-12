import { useState } from "react";
import Header from "../comps/header/Header";
import Sidepanel from "../comps/sidepanel/Sidepanel";
import Banner from "../comps/bonus/Banner";
import Cards from "../comps/bonus/Cards";

export default function Bonus() {
  const [showNavigation, shouldShowNavigation] = useState(false);
  return (
    <>
      <Sidepanel
        active={4}
        showNavigation={showNavigation}
        shouldShowNavigation={shouldShowNavigation}
      />
      <div id="application-body">
        <Header title={"Bonus"} shouldShowNavigation={shouldShowNavigation} />
        <div id="application-container">
          <Banner />
          <Cards />
        </div>
      </div>
    </>
  );
}
