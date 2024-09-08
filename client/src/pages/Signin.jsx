import { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import CustomCheckbox from "../comps/auth/checkBox";
import Cover from "../assets/svgs/Learning-bro.svg";
import "../comps/auth/auth.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import { BaseEndpoint, tokenVault } from "../etc/network";
import validator from 'validator';
import Cookies from 'js-cookie';

export default function Signin() {
  const [isChecked, setIsChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleEyeClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = async () => {
    if (!validator.isEmail(email)) {
      toast.error("Invalid email format.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BaseEndpoint}/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.status === 200) {
        const decodedData = atob(data.data);
        const cookieExpiry = isChecked ? 3 : 1 / 144; 
        Cookies.set(tokenVault, decodedData, { expires: cookieExpiry });
        navigate("/dashboard");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Network error. Please try again later.");
    }
  };

  return (
    <div id="auth-container">
      <ToastContainer />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Min. 6 characters"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            onClick={handleSignIn}
            disabled={loading}
          >
            {loading ? <TailSpin width={20} height={20} /> : "Sign In"}
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
