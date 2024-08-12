import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import "./profile.css";
import "../auth/auth.css";

export default function Passwordspace() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleEyeClick = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="profile-passwordspace">
      <h1 id="profile-passwordspace-header">Update Password</h1>
      <div id="profile-passwordspace-inputbody">
        {/* names input */}
        <div className="auth-inputcontainer">
          <div className="auth-input-title">
            Current Password<span>*</span>
          </div>
          <div
            className="auth-inputcontainer-outer"
            id="auth-inputcontainer-outer-psw"
            style={{
              width: "100%",
            }}
          >
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Your current password"
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
        {/* current password */}

        <div className="auth-inputcontainer">
          <div className="auth-input-title">
            New password<span>*</span>
          </div>
          <div
            className="auth-inputcontainer-outer"
            style={{
              width: "100%",
            }}
          >
            <input
              type="text"
              placeholder="Min. 8 characters"
              autoComplete="off"
            />
          </div>
        </div>
        {/* new password */}

        <button
          className="auth-submitbtn"
          onClick={() => window.location.reload()}
          style={{
            width: "100% ",
            marginTop: "1em",
          }}
        >
          Change
        </button>
        {/*  update btn */}
      </div>
    </div>
  );
}
