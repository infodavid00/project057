import { Link } from "react-router-dom";
import "./header.css";
import { Menu, LogIn, UserPlus, Send, HelpCircle } from "react-feather";

export default function Header({
    title, shouldShowNavigation, useFullWidth, titleLink, hideInvite, showSupport
}) {
  return (
    <>
      <div className={
         useFullWidth ? "application-header application-fullwidth-header" :
         "application-header"
        }>
        <div className={
          useFullWidth ? "application-header-container application-header-container-fullWidth" :
          "application-header-container"
         }>
          <div id="application-header-container1">
            <div>
              {!useFullWidth && <Menu
                strokeWidth={1.3}
                id="application-header-menu"
                onClick={() => shouldShowNavigation(true)}
                color={"white"}
              />}
              <Link to={titleLink ?? ""} id={
                useFullWidth ? "apk-fullwidth-header-title" : ""
               }>{title}</Link>
            </div>
          </div>
          <div id="application-header-container2">
           {hideInvite !== true &&
            <Link to="/invite" className="application-header-container2-btn">
              <Send width={17} height={17} strokeWidth={1.9} /> Invite{" "}
            </Link>
            }
           {showSupport === true &&
            <Link to="/support" className="application-header-container2-btn">
              <HelpCircle width={17} height={17} strokeWidth={1.9} /> Support{" "}
            </Link>
            }
            <Link to="/signin" className="application-header-container2-btn">
              <LogIn width={17} height={17} strokeWidth={1.9} /> Sign in{" "}
            </Link>
            <Link to="/signup" className="application-header-container2-btn">
              <UserPlus width={17} height={17} strokeWidth={1.9} /> Sign up{" "}
            </Link>
          </div>
        </div>
      </div>
      {/* Header */}
    </>
  );
}
