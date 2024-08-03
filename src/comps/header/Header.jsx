import { useState } from "react";
import { Link } from "react-router-dom";
import "../auth/auth.css";
import "./header.css";
import { Menu, LogIn, UserPlus, Send, X } from "react-feather";

export default function Header({ title, shouldShowNavigation }) {
  const [showInvitePopup, shouldShowInvitePopup] = useState("");
  return (
    <>
      <div id="application-header">
        <div id="application-header-container">
          <div id="application-header-container1">
            <div>
              <Menu
                strokeWidth={1.3}
                id="application-header-menu"
                onClick={() => shouldShowNavigation(true)}
                color={"white"}
              />
              {title}
            </div>
          </div>
          <div id="application-header-container2">
            <button
              className="application-header-container2-btn"
              onClick={() => shouldShowInvitePopup(0)}
            >
              <Send width={17} height={17} strokeWidth={1.9} /> Invite{" "}
            </button>
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

      <div
        id="invite-popup"
        style={{ display: showInvitePopup === "" ? "none" : "block" }}
        className={
          showInvitePopup === 0
            ? "show-invite-popup"
            : showInvitePopup === 1
            ? "hide-invite-popup"
            : ""
        }
      >
        <div id="invite-popup-header">
          <span></span>
          <span>Invite </span>
          <X
            strokeWidth={1.3}
            style={{ cursor: "pointer" }}
            onClick={() => shouldShowInvitePopup(1)}
          />
        </div>
        {/* header */}
        <div id="invite-popup-body">
          <div id="invite-popup-inputholers">
            <div className="invite-popup-inputholer">
              <div id="auth-input-body-doublelayer">
                <div className="auth-inputcontainer">
                  <div className="auth-input-title">
                    First Name<span style={{ color: "blue" }}>*</span>
                  </div>
                  <div
                    className="auth-inputcontainer-outer"
                    style={{ width: "100%" }}
                  >
                    <input type="text" placeholder="Jane" autoComplete="off" />
                  </div>
                </div>
                <div className="auth-inputcontainer">
                  <div className="auth-input-title">
                    Last Name<span style={{ color: "blue" }}>*</span>
                  </div>
                  <div
                    className="auth-inputcontainer-outer"
                    style={{ width: "100%" }}
                  >
                    <input type="text" placeholder="Doe" autoComplete="off" />
                  </div>
                </div>
              </div>
              {/* names input */}
              <div className="auth-inputcontainer">
                <div className="auth-input-title">
                  Email<span style={{ color: "blue" }}>*</span>
                </div>
                <div
                  className="auth-inputcontainer-outer"
                  style={{
                    width: "100%",
                  }}
                >
                  <input
                    type="email"
                    placeholder="mail@extension.com"
                    autoComplete="off"
                  />
                </div>
              </div>
              {/* email input */}
              <button
                className="auth-submitbtn"
                onClick={() => window.location.reload()}
                style={{ width: "100% ", marginTop: "0em" }}
              >
                Invite
              </button>
              {/*  button */}
            </div>
          </div>
        </div>
        {/* body */}
      </div>
      {/* Invite Popup */}
    </>
  );
}
