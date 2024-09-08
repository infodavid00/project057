import React, { useState } from "react";
import Header from "../comps/header/Header";
import ShrugBro from "../assets/svgs/Shrug-bro.svg";
import "../comps/invite/invite.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import { BaseEndpoint } from "../etc/network";
import validator from 'validator';

export default function Support() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const countWords = (str) => {
    return str.trim().split(/\s+/).length;
  };

  const handleSubmit = async () => {
    if (!fullname || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (fullname.length > 50) {
      toast.error("Full Name must not exceed 50 characters.");
      return;
    }
    if (email.length > 50) {
      toast.error("Email must not exceed 50 characters.");
      return;
    }
    if (countWords(message) > 300) {
      toast.error("Message must not exceed 300 words.");
      return;
    }
    if (!validator.isEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(BaseEndpoint + "/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullname,
          message: message,
          email: email
        })
      });
      if (response.ok) {
        const responseData = await response.json();
        toast.success(`Support message sent successfully! Your id is #${responseData.data}`);
        setFullname("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send support message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header
        title={"WOLFX ACADEMY"}
        shouldShowNavigation={false}
        useFullWidth={true}
        titleLink={"/"}
        hideInvite={true}
        showSupport={true}
      />
      {/* Header */}
      <div id="support-leadsection">
        <div id="invitepage-leadtextsections" style={{ width: "100%" }}>
          <div id="invitepage-leadheader" style={{ marginTop: "0.6em" }}>Support Center</div>
          {/* ... */}
          <div className="auth-inputcontainer" style={{ marginTop: "1em" }}>
            <div className="auth-input-title">Full Name<span>*</span></div>
            <div className="auth-inputcontainer-outer">
              <input
                type="text"
                placeholder="Jane Doe"
                autoComplete="off"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                maxLength="50" // Enforce maxlength in input field
              />
            </div>
          </div>
          {/* FULLNAME */}
          <div className="auth-inputcontainer" style={{ marginTop: "0em" }}>
            <div className="auth-input-title">Email<span>*</span></div>
            <div className="auth-inputcontainer-outer">
              <input
                type="email"
                placeholder="mail@extension.com"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength="50" // Enforce maxlength in input field
              />
            </div>
          </div>
          {/* EMAIL */}
          <div className="auth-inputcontainer" style={{ marginTop: "0em" }}>
            <div className="auth-input-title">Message<span>*</span></div>
            <div className="auth-inputcontainer-outer">
              <textarea
                placeholder="Up to 300 words"
                style={{
                  width: "100%",
                  background: "transparent",
                  resize: "none",
                  outline: "none",
                  border: "none"
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          {/* MESSAGE */}
          <button className="auth-submitbtn" onClick={handleSubmit} disabled={loading}>
            {loading ? <TailSpin height="20" width="20" color="#fff" /> : "Submit"}
          </button>
        </div>
        <img src={ShrugBro} alt="Shrug Bro" />
      </div>
      <ToastContainer />
    </>
  );
}
