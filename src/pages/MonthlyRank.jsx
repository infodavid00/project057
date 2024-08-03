import { useState } from "react";
import Header from "../comps/header/Header";
import Sidepanel from "../comps/sidepanel/Sidepanel";
import Banner from "../comps/monthlyranks/Banner";
import Cards from "../comps/monthlyranks/Cards";

export default function MonthlyRank() {
  const [showNavigation, shouldShowNavigation] = useState(false);
  return (
    <>
      <Sidepanel
        active={2}
        showNavigation={showNavigation}
        shouldShowNavigation={shouldShowNavigation}
      />
      <div id="application-body">
        <Header
          title={"Monthly Ranks"}
          shouldShowNavigation={shouldShowNavigation}
        />
        <div id="application-container">
          <Banner />
          <Cards />
        </div>
      </div>
    </>
  );
}
