import { useState } from "react";
import "../comps/auth/auth.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import { BaseEndpoint, tokenVault } from "../etc/network"; 
import Cookies from 'js-cookie';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!username || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      console.log(BaseEndpoint + "/auth")
      const response = await fetch(BaseEndpoint + "/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      const responseData = await response.json();
      if (response.ok) {
        const TOKEN = atob(responseData.data);
        Cookies.set(tokenVault, TOKEN, { expires: 1 }); 
        setUsername("");
        setPassword(""); 
        window.location.href = "/";
      } else {
        const errorMessage = responseData.message || "Failed to authenticate. Please try again.";
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="auth-wrapper">
      <div id="auth-body">
        <div id="auth-title">Sign In</div>
        <div className="auth-inputcontainer" style={{ marginTop: "2em" }}>
          <div className="auth-input-title">Username<span>*</span></div>
          <div className="auth-inputcontainer-outer">
            <input type="text" 
              placeholder="Admin username" 
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength="50" 
            />
          </div>
        </div>
        <div className="auth-inputcontainer">
          <div className="auth-input-title">Password<span>*</span></div>
          <div className="auth-inputcontainer-outer">
            <input type="password" 
              placeholder="Admin password" 
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength="50"
            />
          </div>
        </div>
        <button className="auth-submitbtn" onClick={handleSubmit} disabled={loading}>
          {loading ? <TailSpin height="20" width="20" color="#fff" /> : "Sign In"}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}
