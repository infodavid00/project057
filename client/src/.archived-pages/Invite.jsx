import { useState } from "react";
import Header from "../comps/header/Header";
import Invite_Svg from "../assets/svgs/invite.svg";
import "../comps/invite/invite.css";
import Info from "../comps/invite/Info";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import { BaseEndpoint, tokenVault } from "../etc/network";
import validator from 'validator';
import Cookies from 'js-cookie';

export default function Invite() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInvite = async () => {
    const TOKEN = Cookies.get(tokenVault);
    if (TOKEN) {
    if (!validator.isEmail(email)) {
      toast.error("Invalid email format.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`${BaseEndpoint}/invite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Pass": `${btoa(TOKEN)}`
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.status === 200) {
        setEmail("");
        toast.success("Invite has been sent successfully!");
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Network error. Please try again later.");
    }
    } else window.location.href = "/signin";
  };

  return (
    <> 
      <Header
        title={"WOLFX ACADEMY"}
        shouldShowNavigation={false}
        useFullWidth={true}
        titleLink={"/"}
      />
      {/* Header */}
      <div id="invitepage-leadsection">
        <div id="invitepage-leadtextsections"> 
          <div id="invitepage-leadheader"> WOLFX Academy: your destination for trading courses. </div>
          <div id="invitepage-leadtext">Enter the desired email address to send an invitation. The recipient will be prompted to join WOLFX and will be registered under this account. Help us grow our community!</div>
          <div id="invitepage-inputsection">
            <div className="auth-inputcontainer" style={{ marginTop: "0.5em", width: "70%" }}>
              <div className="auth-input-title">
                Email<span>*</span>
              </div>
              <div className="auth-inputcontainer-outer" style={{width: "100%"}}>
                <input
                  type="email"
                  placeholder="mail@extension.com"
                  autoComplete="off" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <button className="auth-submitbtn" 
              style={{
                padding: "10px 1em",
                width: "30%"
              }} 
              onClick={handleInvite}
              disabled={loading}
            >{loading ? <TailSpin width={20} height={20} /> : "Invite"}</button>
          </div>
          {/* Input */}
        </div>
        <img src={Invite_Svg} />
      </div>
      <ToastContainer />
      {/*<Info />*/}
    </>
  )
}
