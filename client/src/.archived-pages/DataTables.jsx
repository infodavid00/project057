import { useState } from "react";
import Header from "../comps/header/Header";
import Sidepanel from "../comps/sidepanel/Sidepanel";
import Datatable from "../comps/datatables/Datatable";

export default function DataTables() {
  const [showNavigation, shouldShowNavigation] = useState(false);
  return (
    <>
      <Sidepanel
        active={3}
        showNavigation={showNavigation}
        shouldShowNavigation={shouldShowNavigation}
      />
      <div id="application-body">
        <Header
          title={"Data Tables"}
          shouldShowNavigation={shouldShowNavigation}
        />
        <div id="application-container">
          <Datatable />
          {/* first section */}
        </div>
      </div>
    </>
  );
}
