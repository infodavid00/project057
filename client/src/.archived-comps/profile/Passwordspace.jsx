import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { ToastContainer, toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import "./profile.css";
import "../auth/auth.css";
import { BaseEndpoint, tokenVault } from "../../etc/network";

export default function Passwordspace() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleEyeClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChangePassword = async () => {
    // Validate passwords
    if (currentPassword.length < 6 || newPassword.length < 6) {
      toast.error("Both passwords must be at least 6 characters long.");
      return;
    }

    // Prepare data for API call
    const payload = {
      current: currentPassword,
      new: newPassword,
    };

    const token = Cookies.get(tokenVault);
    if (!token) {
      window.location.href = "/signin";
      return;
    }

    try {
      const options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Pass': btoa(token),
        },
        body: JSON.stringify(payload),
      };

      const response = await fetch(`${BaseEndpoint}/auth/changePsw`, options);
      const data = await response.json();

      if (response.ok) {
        toast.success("Password changed successfully.");
        setCurrentPassword("");
        setNewPassword("");
      } else {
        toast.error(data.message || "Failed to change password.");
      }
    } catch (error) {
      toast.error(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="profile-passwordspace">
      <h1 id="profile-passwordspace-header">Update Password</h1>
      <div id="profile-passwordspace-inputbody">
        {/* Current password input */}
        <div className="auth-inputcontainer">
          <div className="auth-input-title">
            Current Password<span>*</span>
          </div>
          <div className="auth-inputcontainer-outer" id="auth-inputcontainer-outer-psw" style={{ width: "100%" }}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Your current password"
              autoComplete="new-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            {passwordVisible ? (
              <EyeOff strokeWidth={1} width={18} style={{ cursor: "pointer" }} onClick={handleEyeClick} />
            ) : (
              <Eye strokeWidth={1} width={18} style={{ cursor: "pointer" }} onClick={handleEyeClick} />
            )}
          </div>
        </div>

        {/* New password input */}
        <div className="auth-inputcontainer">
          <div className="auth-input-title">
            New Password<span>*</span>
          </div>
          <div className="auth-inputcontainer-outer" style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="Min. 6 characters"
              autoComplete="off"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Update button */}
        <button
          className="auth-submitbtn"
          onClick={handleChangePassword}
          style={{ width: "100%", marginTop: "1em" }}
        >
          Change
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
