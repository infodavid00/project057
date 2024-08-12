import { Link } from "react-router-dom";
import "./sidepanel.css";
import { Home, HelpCircle, LogOut, BookOpen } from "react-feather";

export default function Sidepanel({ active }) {
  const shouldFillIccon = (index) => index === active ? "var(--color)" : "transparent";
  const links = [
    {
      icon: <Home fill={shouldFillIccon(1)} />,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <HelpCircle fill={shouldFillIccon(2)} />,
      title: "Support",
      link: "/dashboard/support",
    },
    {
      icon: <BookOpen fill={shouldFillIccon(3)} />,
      title: "News",
      link: "/dashboard/news",
    },
    {
      icon: <LogOut fill={shouldFillIccon(4)} />,
      title: "Logout",
      link: "/logout",
    },
  ];
  return (
    <div className="sidepanel">
      <h2 id="sidepanel-leadcontainer"><div id="sidepanel-logo">WOLFX ADMIN</div></h2>
      <div id="sidepanel-links-holder">
        {links.map((element, index) => (
          <div
            className="sidepanel-link-container"
            id={active === index + 1 ? "sidepanel-link-container-active" : ""}
            key={index}> {element.icon}
            <Link className="sidepanel-link-link" to={element.link}>
              {element.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
