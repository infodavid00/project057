import { Link } from "react-router-dom";
import "./landing.css";
import section9 from "../../assets/images/section9.png";
import section9A from "../../assets/landing/5.png";
import section9B from "../../assets/landing/3.png";
import section9D from "../../assets/landing/6.png";

export default function Section9() {
  return (
    <div id="landing-section9-wrapper">
      <div className="landing-section9">
        <div className="landing-section9-textwrapper"> 
          <div className="landing-section9-headercont"> 
             <div className="landing-section9-header-riskbtn" style={{  border: "1px solid #3B2A11", backgroundColor: "#211814", color: "#F7D100" }}>High Risk</div>
             <div className="landing-section9-header-risk">Penny (€250 Investment)</div>
          </div>
          <div className="landing-section9-feature">FEATURES - This level is designed for those who want to start with a minimum investment. WOLFXBOT uses more aggressive strategies to try to obtain quick returns with limited capital.</div>
          <div className="landing-section9-howitrisky"><span style={{ fontFamily: "poppins-semibold", color: "white" }}>Why it is risky</span> - The limited capital means that any loss has a significant impact on the total invested. In addition, the trades followed may adopt more speculative strategies, increasing the potential for losses.</div>
        </div>
        <img src={section9A} className="landing-section9-image" />
      </div>

      <div className="landing-section9 landing-section9-reverse">
        <div className="landing-section9-textwrapper"> 
          <div className="landing-section9-headercont"> 
             <div className="landing-section9-header-riskbtn" style={{ border: "1px solid #1D3712", backgroundColor: "#131E14", color: "#85F921"}}>Medium-High Risk</div>
             <div className="landing-section9-header-risk">Blue (€500 Investment)</div>
          </div>
          <div className="landing-section9-feature">FEATURES - With a larger investment, WOLFXBOT adopts a combination of balanced strategies to balance risk and return. This level is suitable for those who have a little more capital and are looking for greater stability.</div>
          <div className="landing-section9-howitrisky"><span style={{ fontFamily: "poppins-semibold", color: "white" }}>Why it is risky</span> - Although the larger capital allows for better risk management, market volatility and the decisions of the trade followed can still lead to significant losses. Market fluctuations can have a considerable impact on this investment level.</div>
        </div>
        <img src={section9B} className="landing-section9-image" />
      </div>

      <div className="landing-section9">
        <div className="landing-section9-textwrapper"> 
          <div className="landing-section9-headercont"> 
             <div className="landing-section9-header-riskbtn" style={{ border: "1px solid #3F0A50", backgroundColor: "#1F0C25", color: "#D100FF"}}>Medium Risk</div>
             <div className="landing-section9-header-risk">Alpha (€1000 Investment)</div>
          </div>
          <div className="landing-section9-feature">FEATURES - This tier allows WOLFXBOT to implement sophisticated and diversified strategies. Investors at this level benefit from more advanced risk management and greater resistance to market volatility.</div>
          <div className="landing-section9-howitrisky"><span style={{ fontFamily: "poppins-semibold", color: "white" }}>Why it is risky</span> - Even though the strategies are more sophisticated and diversified, market risk remains. Incorrect trade decisions can still lead to losses, and the complexity of the strategies can increase risk if not well understood.</div>
        </div>
        <img src={section9} className="landing-section9-image" />
      </div>

      <div className="landing-section9 landing-section9-reverse">
        <div className="landing-section9-textwrapper"> 
          <div className="landing-section9-headercont"> 
             <div className="landing-section9-header-riskbtn" style={{ border: "1px solid #07344A", backgroundColor: "#08182A", color: "#03C0E2"}}>Medium-Low Risk</div>
             <div className="landing-section9-header-risk">Elite (€3000 Investment)</div>
          </div>
          <div className="landing-section9-feature">FEATURES - With the highest investment level, WOLFXBOT uses highly diversified and professionally managed strategies. This tier offers greater protection against market volatility thanks to advanced risk management.</div>
          <div className="landing-section9-howitrisky"><span style={{ fontFamily: "poppins-semibold", color: "white" }}>Why it is risky</span> -  Despite the diversification and professionalism of the trades followed, the risk of losses cannot be completely eliminated. Unpredictable market events and macroeconomic changes can still negatively impact performance.</div>
        </div>
        <img src={section9D} className="landing-section9-image" />
      </div>
    </div>
  )
}
