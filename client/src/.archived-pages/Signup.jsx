import { useState } from "react";
import { ChevronLeft, Eye, EyeOff } from "react-feather";
import { Link } from "react-router-dom";
import Cover from "../assets/svgs/Learning-bro.svg";
import "../comps/auth/auth.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import { BaseEndpoint } from "../etc/network";
import validator from 'validator';

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [mt4, setMt4] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEyeClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async () => {
    // Validate input
    if (!fname || !lname || !validator.isEmail(email) || password.length < 6) {
      toast.error("Please fill out all fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BaseEndpoint}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
          mt4
        }),
      });

      if (response.ok) {
        setFname('');
        setLname('');
        setEmail('');
        setMt4('');
        setPassword('');
        toast.success("Signup successful!");
        setTimeout(()=> window.location.href = "/signin", 1500);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Signup failed.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
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
          <div id="auth-input-body-doublelayer">
            <div className="auth-inputcontainer" style={{ marginBottom: "-1em", width: "45%" }}>
              <div className="auth-input-title">
                First Name<span>*</span>
              </div>
              <div className="auth-inputcontainer-outer">
                <input type="text" placeholder="Jane" autoComplete="off" value={fname} onChange={(e) => setFname(e.target.value)} />
              </div>
            </div>
            <div className="auth-inputcontainer" style={{ marginBottom: "-1em", width: "45%" }}>
              <div className="auth-input-title">
                Last Name<span>*</span>
              </div>
              <div className="auth-inputcontainer-outer">
                <input type="text" placeholder="Doe" autoComplete="off" value={lname} onChange={(e) => setLname(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="auth-inputcontainer" style={{ marginTop: "2em" }}>
            <div className="auth-input-title">
              Email<span>*</span>
            </div>
            <div className="auth-inputcontainer-outer">
              <input type="email" placeholder="mail@extension.com" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="auth-inputcontainer" style={{ marginTop: "2em" }}>
            <div className="auth-input-title">
              MT4<span>*</span>
            </div>
            <div className="auth-inputcontainer-outer">
              <input type="text" placeholder="12345678" autoComplete="off" value={mt4} onChange={(e) => setMt4(e.target.value)} />
            </div>
          </div>
          <div className="auth-inputcontainer">
            <div className="auth-input-title">
              Password <span>*</span>
            </div>
            <div className="auth-inputcontainer-outer" id="auth-inputcontainer-outer-psw">
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
          <button
            className="auth-submitbtn"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? <TailSpin height={24} width={24} color="#fff" /> : "Sign up"}
          </button>
          <div className="auth-footer">
            <div style={{ color: "#bbb" }}>Already have account?</div>
            <Link to="/signin" style={{ textDecoration: "none", color: "#f1f1f1" }}>
              Login
            </Link>
          </div>
        </div>
      </div>
      <div id="auth-coversection">
        <img src={Cover} width={620} />
      </div>
      <ToastContainer />
    </div>
  );
}
