import { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "react-feather";
import { Link } from "react-router-dom";
import Cover from "../assets/svgs/Learning-bro.svg";
import "../comps/auth/auth.css";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleEyeClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div id="auth-container">
      <div id="auth-infosection">
        <div id="auth-infosection-inner">
          <Link id="auth-backLink" to="/dashboard">
            <ChevronLeft width={19} />
            Dashboard
          </Link>
          <div id="auth-title">Sign UP</div>
          {/* title */}
          <div id="auth-input-body-doublelayer">
            <div
              className="auth-inputcontainer"
              style={{ marginBottom: "-1em", width: "45%" }}
            >
              <div className="auth-input-title">
                First Name<span style={{ color: "blue" }}>*</span>
              </div>
              <div className="auth-inputcontainer-outer">
                <input type="text" placeholder="Jane" autoComplete="off" />
              </div>
            </div>
            <div
              className="auth-inputcontainer"
              style={{ marginBottom: "-1em", width: "45%" }}
            >
              <div className="auth-input-title">
                Last Name<span style={{ color: "blue" }}>*</span>
              </div>
              <div className="auth-inputcontainer-outer">
                <input type="text" placeholder="Doe" autoComplete="off" />
              </div>
            </div>
          </div>
          {/* names */}
          <div className="auth-inputcontainer" style={{ marginTop: "2em" }}>
            <div className="auth-input-title">
              Email<span style={{ color: "blue" }}>*</span>
            </div>
            <div className="auth-inputcontainer-outer">
              <input
                type="email"
                placeholder="mail@extension.com"
                autoComplete="off"
              />
            </div>
          </div>
          {/* email */}
          <div className="auth-inputcontainer">
            <div className="auth-input-title">
              Password <span style={{ color: "blue" }}>*</span>
            </div>
            <div
              className="auth-inputcontainer-outer"
              id="auth-inputcontainer-outer-psw"
            >
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Min. 8 characters"
                autoComplete="new-password"
              />
              {passwordVisible ? (
                <EyeOff
                  strokeWidth={1}
                  width={18}
                  style={{ cursor: "pointer" }}
                  onClick={handleEyeClick}
                />
              ) : (
                <Eye
                  strokeWidth={1}
                  width={18}
                  style={{ cursor: "pointer" }}
                  onClick={handleEyeClick}
                />
              )}
            </div>
          </div>
          {/* password */}
          <button
            className="auth-submitbtn"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Sign up
          </button>
          <div className="auth-footer">
            <div style={{ color: "#bbb" }}>Already have account?</div>
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "#f1f1f1" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* container 1 */}
      <div id="auth-coversection">
        {" "}
        <img src={Cover} width={620} />
      </div>
    </div>
  );
}
