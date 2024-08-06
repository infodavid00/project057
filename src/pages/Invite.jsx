import Header from "../comps/header/Header";
import Invite_Svg from "../assets/svgs/invite.svg";
import "../comps/invite/invite.css";
import Info from "../comps/invite/Info";

export default function Invite() {
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
              <div id="invitepage-leadheader">Lorem ipsum dolor sit amet consectetur, adipisicing elit </div>
              <div id="invitepage-leadtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint rerum fuga laboriosam dolor, magnam molestias dolorem.</div>
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
                       />
                    </div>
                 </div>
                 <button className="auth-submitbtn" 
                   onClick={() => (window.location.href = "/invite")}
                    style={{
                      padding: "10px 1em",
                      width: "30%"
                    }}>Invite</button>
               </div>
              {/* Input */}
           </div>
           <img src={Invite_Svg} />
        </div>
        {/* Banner section */}
        <Info />
    </>
  )
}