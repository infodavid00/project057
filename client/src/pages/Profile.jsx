import { useState } from "react";
import Header from "../comps/header/Header";
import Sidepanel from "../comps/sidepanel/Sidepanel";
import Box from "../comps/profile/Box";

export default function Profile() {
  const [showNavigation, shouldShowNavigation] = useState(false);
  return (
    <>
      <Sidepanel
        active={5}
        showNavigation={showNavigation}
        shouldShowNavigation={shouldShowNavigation}
      />
      <div id="application-body">
        <Header title={"Profile"} shouldShowNavigation={shouldShowNavigation} />
        <div id="application-container">
          <Box />
        </div>
      </div>
    </>
  );
}
