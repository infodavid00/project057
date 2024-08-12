import { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "react-feather";
import { Link } from "react-router-dom";
import CustomCheckbox from "../comps/auth/checkBox";
import Cover from "../assets/svgs/Learning-bro.svg";
import "../comps/auth/auth.css";

export default function Signin() {
  const [isChecked, setIsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
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
          <div id="auth-title">Sign IN</div>
          <div className="auth-inputcontainer" style={{ marginTop: "2em" }}>
            <div className="auth-input-title">
              Email<span>*</span>
            </div>
            <div className="auth-inputcontainer-outer">
              <input
                type="email"
                placeholder="mail@extension.com"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="auth-inputcontainer">
            <div className="auth-input-title">
              Password <span>*</span>
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
          <div className="auth-input-footer">
            <CustomCheckbox
              label=""
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div>Keep me logged in</div>
          </div>
          <button
            className="auth-submitbtn"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Sign In
          </button>
          <div className="auth-footer">
            <div style={{ color: "#bbb" }}>Not registered yet?</div>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#f1f1f1" }}
            >
              Create an Account
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
