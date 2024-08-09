import Header from "../comps/header/Header";
import ShrugBro from "../assets/svgs/Shrug-bro.svg";
import "../comps/invite/invite.css";

export default function Support() {
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
           <div id="invitepage-leadtextsections" style={{ width: "100%"}}> 
              <div id="invitepage-leadheader" style={{ marginTop: "0.6em" }}>Support Center </div>
              {/* ... */}
              <div className="auth-inputcontainer" style={{ marginTop: "1em" }}>
                <div className="auth-input-title">Full Name<span>*</span></div>
                <div className="auth-inputcontainer-outer">
                  <input type="name" placeholder="Jane Doe" autoComplete="off" />
                </div>
              </div>
             {/* FULLNAME */}
             <div className="auth-inputcontainer" style={{ marginTop: "0em" }}>
                <div className="auth-input-title">Email<span>*</span></div>
                <div className="auth-inputcontainer-outer">
                  <input type="email" placeholder="mail@extension.com" autoComplete="off" />
                </div>
             </div>
             {/* EMAIL */}
             <div className="auth-inputcontainer" style={{ marginTop: "0em" }}>
                <div className="auth-input-title">Message<span>*</span></div>
                <div className="auth-inputcontainer-outer">
                  <textarea placeholder="Up to 300 words" style={{
                    width: "100%",
                    background: "transparent",
                    resize: "none",
                    outline: "none",
                    border: "none"
                  }}/>
                </div>
             </div>
             {/* MESSAGE */}
             <button className="auth-submitbtn" onClick={() => (window.location.reload())}> Submit </button>
           </div>
           <img src={ShrugBro} />
        </div>
    </>
  )
}