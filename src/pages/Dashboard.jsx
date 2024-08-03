import { useState } from "react";
import Header from "../comps/header/Header";
import Sidepanel from "../comps/sidepanel/Sidepanel";
import { BarChart2, DollarSign } from "react-feather";
import "../comps/dashboard/dashboard.css";
import TotalSpent from "../comps/dashboard/TotalSpent";
import WeeklyRevenue from "../comps/dashboard/WeeklyRevenue";
import TopContributors from "../comps/dashboard/TopContributors";
import News from "../comps/dashboard/News";

export default function Dashboard() {
  const [showNavigation, shouldShowNavigation] = useState(false);
  return (
    <>
      <Sidepanel
        active={1}
        showNavigation={showNavigation}
        shouldShowNavigation={shouldShowNavigation}
      />
      <div id="application-body">
        <Header
          title={"Main Dashboard"}
          shouldShowNavigation={shouldShowNavigation}
        />
        <div id="application-container">
          <div id="dashboard-sectionA-body">
            <div className="dashboard-sectionA-container dashboard-sectionA-container-flexed">
              <div className="dashboard-sectionA-container-iconbody">
                <BarChart2 strokeWidth={3} />
              </div>
              <div>
                <div className="dashboard-sectionA-container-title">Points</div>
                <div className="dashboard-sectionA-container-amount">6.2K</div>
              </div>
            </div>
            <div className="dashboard-sectionA-container dashboard-sectionA-container-flexed">
              <div className="dashboard-sectionA-container-iconbody">
                <DollarSign strokeWidth={3} />
              </div>
              <div>
                <div className="dashboard-sectionA-container-title">
                  Registration
                </div>
                <div className="dashboard-sectionA-container-amount">60</div>
              </div>
            </div>
            <div className="dashboard-sectionA-container dashboard-sectionA-container-flexed2">
              <div className="dashboard-sectionA-container-title">Deposits</div>
              <div className="dashboard-sectionA-container-amount">$574.34</div>
              <div className="dashboard-sectionA-container-slm">
                <span
                  style={{
                    color: "rgb(1, 181, 116)",
                    fontFamily: "poppins-semiBold",
                  }}
                >
                  +23%
                </span>{" "}
                since last month
              </div>
            </div>
          </div>
          {/* first section */}

          <div id="dashboard-sectionA-body" style={{ marginTop: "0em" }}>
            <TotalSpent />
            <WeeklyRevenue />
          </div>
          {/* second section */}

          <div id="dashboard-sectionA-body" style={{ marginTop: "0em" }}>
            <TopContributors />
            <News />
          </div>
          {/* third section */}
        </div>
      </div>
    </>
  );
}
