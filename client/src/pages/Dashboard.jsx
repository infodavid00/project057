import { useState, useEffect } from "react";
import Header from "../comps/header/Header";
import Sidepanel from "../comps/sidepanel/Sidepanel";
import { BarChart2, DollarSign, User } from "react-feather";
import "../comps/dashboard/dashboard.css";
import TotalSpent from "../comps/dashboard/TotalSpent";
import WeeklyRevenue from "../comps/dashboard/WeeklyRevenue";
import TopContributors from "../comps/dashboard/TopContributors";
import News from "../comps/dashboard/News";
import { makeRequest } from "../etc/network";
import { TailSpin } from 'react-loader-spinner';

export default function Dashboard() {
  const [showNavigation, shouldShowNavigation] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState({
    points: true,
    registration: true,
    commission: true,
    deposits: true,
  });

  useEffect(() => {
    makeRequest("/user", "GET", (response) => {
      setData(response);
      setLoading({
        points: false,
        registration: false,
        commission: false,
        deposits: false,
      });
    });
  }, []);


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
                <div className="dashboard-sectionA-container-amount">
                  {loading.points ? <TailSpin width={20} height={20} /> : data.points ?? 0}
                </div>
              </div>
            </div>
            <div className="dashboard-sectionA-container dashboard-sectionA-container-flexed">
              <div className="dashboard-sectionA-container-iconbody">
                <User strokeWidth={3} />
              </div>
              <div>
                <div className="dashboard-sectionA-container-title">
                  Registration
                </div>
                <div className="dashboard-sectionA-container-amount">
                  {loading.registration ? <TailSpin width={20} height={20} /> : data.registration ?? 0}
                </div>
              </div>
            </div>
            <div className="dashboard-sectionA-container dashboard-sectionA-container-flexed2">
              <div className="dashboard-sectionA-container-title">Commission</div>
              <div className="dashboard-sectionA-container-amount">
                {loading.commission ? <TailSpin width={20} height={20} /> : `€${data.commission ?? 0}`}
              </div>
            </div>
            <div className="dashboard-sectionA-container dashboard-sectionA-container-flexed2">
              <div className="dashboard-sectionA-container-title">Deposits</div>
              <div className="dashboard-sectionA-container-amount">
                {loading.deposits ? <TailSpin width={20} height={20} /> : `€${data.deposits ?? 0}`}
              </div>
            </div>
          </div>
          {/* first section */}

          <div id="dashboard-sectionA-body" style={{ marginTop: "0em" }}>
            <TotalSpent information={data?.referedINFO ?? []} />
            <WeeklyRevenue information={data?.refered ?? []} />
          </div>
          {/* second section */}

          <div id="dashboard-sectionA-body" style={{ marginTop: "0em", alignItems: "flex-start" }}>
            <TopContributors />
            <News />
          </div>
          {/* third section */}
        </div>
      </div>
    </>
  );
}
