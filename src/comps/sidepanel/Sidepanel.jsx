import { Link } from "react-router-dom";
import "./sidepanel.css";
import {
  BarChart,
  BarChart2,
  Home,
  User,
  LogOut,
  X,
  Gift,
} from "react-feather";

export default function Sidepanel({
  active,
  showNavigation,
  shouldShowNavigation,
}) {
  const shouldFillIccon = (index) =>
    index === active ? "white" : "transparent";
  const links = [
    {
      icon: <Home fill={shouldFillIccon(1)} />,
      title: "Main Dashboard",
      link: "/dashboard",
    },
    {
      icon: <BarChart2 fill={shouldFillIccon(2)} />,
      title: "Monthly Ranks",
      link: "/dashboard/mt",
    },
    {
      icon: <BarChart fill={shouldFillIccon(3)} />,
      title: "Data Tables",
      link: "/dashboard/dt",
    },
    {
      icon: <Gift fill={shouldFillIccon(4)} />,
      title: "Bonus",
      link: "/dashboard/bonus",
    },
    {
      icon: <User fill={shouldFillIccon(5)} />,
      title: "Profile",
      link: "/dashboard/profile",
    },
    {
      icon: <LogOut fill={shouldFillIccon(6)} />,
      title: "Logout",
      link: "/logout",
    },
  ];
  return (
    <div className={showNavigation ? "sidepanel" : "sidepanel sidepanel-hide"}>
      <h2 id="sidepanel-leadcontainer">
        <X
          id="sidepanel-hidepanel-btn"
          strokeWidth={1.2}
          onClick={() => shouldShowNavigation(false)}
        />
        <Link id="sidepanel-logo" to="/">
          WOLFX ACADEMY
        </Link>
      </h2>
      <div id="sidepanel-links-holder">
        {links.map((element, index) => (
          <div
            className="sidepanel-link-container"
            id={active === index + 1 ? "sidepanel-link-container-active" : ""}
            key={index}
          >
            {element.icon}
            <Link className="sidepanel-link-link" to={element.link}>
              {element.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
