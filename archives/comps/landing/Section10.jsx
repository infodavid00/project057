import "./landing.css";

export default function Section10() {
  return (
    <div id="landing-section10-container">
       <div id="landing-section10-title">Customer Support</div>
       <div>
          <div className="auth-inputcontainer">
             <div className="auth-input-title">What would you like to ask?</div>
             <div className="auth-inputcontainer-outer" style={{width: "100%"}}>
              <textarea 
                placeholder="Up to 300 words" 
                autoComplete="off" 
                id="landing-section10-textarea"
              />
             </div>
          </div>
         {/* Question */}
          <div className="auth-inputcontainer">
             <div className="auth-input-title">How should we contact you?</div>
             <div className="auth-inputcontainer-outer" style={{width: "100%"}}>
              <input type="text" placeholder="Your email address" autoComplete="off" />
             </div>
          </div>
         {/* Email */}
          <button
            className="auth-submitbtn"
            onClick={() => window.location.reload()}
            style={{ width: "100%", marginTop: "1em" }}>Submit</button>
         {/*  Send BTN */}
       </div>
    </div>
  )
}
