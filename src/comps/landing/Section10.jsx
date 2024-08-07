import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "react-feather";
import "./landing.css";

export default function Section10() {
  const [collapsedTopics,  setCollapedTopics] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
  return (
    <div id="landing-section4-container">
       <div id="landing-section10-title">frequently asked Questions </div>
       <div id="landing-section10-rows-cont">
         <div className="landing-section10-rows">
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[0] = collapsedTopics[0] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>Is it possible to transfer a securities account to Scalable Broker?</div>
                    {collapsedTopics[0] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[0] === 1 ? "block" : "none" }}>
                    You are welcome to transfer your portfolio to Scalable Broker. You can find all important information here .<br /><br />To do this, log in to the Scalable app or on the web and request the securities account transfer digitally under Profile {'>'} Products {'>'} Securities account transfer. Once the securities account transfer has been submitted, you can check the status of the transfer here .<br /><br />If you have any questions about the status, please contact your transferring depository bank as soon as the status “Transferring depository bank has been contacted” is reached. The name and BIC of the transferring depository bank will be displayed in the detailed view.<br/><br/>Deposit transfers initiated by your main bank cannot be accepted. Please note that it may take a few weeks for the entire transfer process to be completed.
                  </div>
               </div>
            </div>
            {/*TOPIC A*/}
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[1] = collapsedTopics[1] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>Is there a minimum deposit amount?</div>
                    {collapsedTopics[1] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[1] === 1 ? "block" : "none" }}>
                    When you register, you select an amount for your first deposit. This must be at least 1 euro. Available funds can be paid out in full or in part at any time. A higher deposit is recommended so that you can start trading stocks, ETFs and funds immediately.
                  </div>
               </div>
            </div>
            {/*TOPIC B*/}      
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[2] = collapsedTopics[2] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>How does the registration process work?</div>
                    {collapsedTopics[2] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[2] === 1 ? "block" : "none" }}>
                    Registration takes place online and only takes a few minutes. Registration via iOS or Android mobile app is also possible. You then identify yourself using the POSTIDENT identification process from our partner Deutsche Post (you do not need to do this step if you already use our asset management with securities account management at Baader Bank).<br /><br />It usually takes up to three banking days for the depository bank to open your account. As soon as your account has been opened and the initial deposit has been made, you can start trading.
                  </div>
               </div>
            </div>
            {/*TOPIC C*/}    
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[3] = collapsedTopics[3] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>Which stock exchanges are available?</div>
                    {collapsedTopics[3] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[3] === 1 ? "block" : "none" }}>
                    You can have your order executed via gettex (Munich Stock Exchange) or Xetra (German Stock Exchange) .<br /><br />gettex is a stock exchange of Bayerische Börse AG. There are no brokerage fees or exchange fees 1 . The public law structure guarantees the neutrality that is essential for protecting the interests of market participants, investors and issuers.<br /><br />Xetra, a stock exchange of Deutsche Börse AG, is the most important trading venue in Germany. The order fee is a flat rate of 3.99 euros, including in the PRIME+ Broker 1 .<br /><br />In addition, there is the trading venue fee. This is only 0.01% of the executed volume (minimum EUR 1.50). The trading venue fee covers all third-party costs for trading and settlement. Billing is carried out by the depository bank. <br /><br />1 . Product costs, spreads, contributions and crypto fees may apply. All costs at a glance .<br /><br />Securities that cannot be traded on the available stock exchanges are sold manually via Baader Bank and billed in accordance with the price/service list .
                  </div>
               </div>
            </div>
            {/*TOPIC D*/}  
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[4] = collapsedTopics[4] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>What are the trading hours on gettex and Xetra?</div>
                    {collapsedTopics[4] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[4] === 1 ? "block" : "none" }}>
                    gettex: On trading days, Monday to Friday, from 8:00 a.m. to 10:00 p.m. Stock exchange holidays<br /><br />are excluded .<br /><br />Xetra: On trading days, Monday to Friday, from 9:00 a.m. to 5:30 p.m.<br /><br />Except on stock exchange holidays .<br /><br />On trading days, the Scalable Broker even allows orders to be placed around the clock. From 00:15 to 23:30 you can create or cancel orders via the customer area. Stop and limit orders created outside of trading hours are executed at the next possible time during trading hours. Market orders are generally only valid for the day on which they are created. If they are created before the stock exchange opens, they are executed at the next possible time during trading hours. Market orders placed after the stock exchange closes expire.<br /><br />Outside of trading hours, a moon symbol appears next to the last price in the security view. This is an indicator that the stock exchanges are closed and trading is currently not possible.<br /><br />Please note that different trading times may apply for individual derivatives. Further information can be found in the “Key Investor Information” and on the issuers’ websites.
                  </div>
               </div>
            </div>
            {/*TOPIC E*/}  
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[5] = collapsedTopics[5] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>Which financial products can I invest in?</div>
                    {collapsedTopics[5] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[5] === 1 ? "block" : "none" }}>
                    Basically, all ETFs, stocks, funds and crypto ETPs that are traded on the gettex or Xetra stock exchanges are available to you .<br /><br />You can also buy registered shares through the Scalable Broker. The custodian bank Baader Bank will take care of the registration for you. Of course, there are no costs involved.<br /><br />You can also trade over 375,000 derivatives from providers such as Goldman Sachs, HSBC and HypoVereinsbank onemarkets. You can easily find out whether a security can be traded using the search function in your customer area . Simply enter the name, the securities identification number (WKN) or ISIN. You can check the availability of a specific derivative using our derivatives search.<br /><br />Scalable Broker offers you a variety of financial products with which you can invest in the gold market. For example, you can invest in ETCs that invest in physical gold.<br /><br />You can also trade fixed-interest bonds in the Scalable Broker. We are gradually expanding our bond offering .<br /><br />New issues (IPOs) cannot currently be subscribed to via the Scalable Broker. We are doing everything we can to ensure that shares can be listed on gettex and traded via our platform on the first day of trading following a successful IPO.
                  </div>
               </div>
            </div>
            {/*TOPIC F*/}  
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[6] = collapsedTopics[6] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner" style={{ border: "none"}}>
                  <div className="landing-section10-topiccollapsed-title">
                    <div>Can I trade fractions?</div>
                    {collapsedTopics[6] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[6] === 1 ? "block" : "none" }}>
                    You cannot buy fractions directly. However, with all savings plans we also buy fractions of ETFs for you so that your monthly savings can be fully invested. As long as the savings plan is running, these fractions are repeatedly combined to form whole securities.<br /><br />If you want to sell a security that has been saved and therefore contains fractions, you can of course sell the resulting fractions again. Please note that individual fractions cannot be sold; in this case the entire position must be sold.
                  </div>
               </div>
            </div>
            {/*TOPIC G*/}  
         </div>
         {/* SECTION 1*/}



         <div className="landing-section10-rows">
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[7] = collapsedTopics[7] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>Which order types are available to me?</div>
                    {collapsedTopics[7] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[7] === 1 ? "block" : "none" }}>
                    You are welcome to transfer your portfolio to Scalable Broker. You can find all important information here .<br /><br />To do this, log in to the Scalable app or on the web and request the securities account transfer digitally under Profile {'>'} Products {'>'} Securities account transfer. Once the securities account transfer has been submitted, you can check the status of the transfer here .<br /><br />If you have any questions about the status, please contact your transferring depository bank as soon as the status “Transferring depository bank has been contacted” is reached. The name and BIC of the transferring depository bank will be displayed in the detailed view.<br/><br/>Deposit transfers initiated by your main bank cannot be accepted. Please note that it may take a few weeks for the entire transfer process to be completed.
                  </div>
               </div>
            </div>
            {/*TOPIC H*/}
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[8] = collapsedTopics[8] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>How can I adjust or suspend a savings plan?</div>
                    {collapsedTopics[8] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[8] === 1 ? "block" : "none" }}>
                    When you register, you select an amount for your first deposit. This must be at least 1 euro. Available funds can be paid out in full or in part at any time. A higher deposit is recommended so that you can start trading stocks, ETFs and funds immediately.
                  </div>
               </div>
            </div>
            {/*TOPIC I*/}      
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[9] = collapsedTopics[9] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>Will I receive a tax certificate at the end of the year?</div>
                    {collapsedTopics[9] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[9] === 1 ? "block" : "none" }}>
                    Registration takes place online and only takes a few minutes. Registration via iOS or Android mobile app is also possible. You then identify yourself using the POSTIDENT identification process from our partner Deutsche Post (you do not need to do this step if you already use our asset management with securities account management at Baader Bank).<br /><br />It usually takes up to three banking days for the depository bank to open your account. As soon as your account has been opened and the initial deposit has been made, you can start trading.
                  </div>
               </div>
            </div>
            {/*TOPIC J*/}    
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[10] = collapsedTopics[10] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>How can I set up or change an exemption order?</div>
                    {collapsedTopics[10] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[10] === 1 ? "block" : "none" }}>
                    You can have your order executed via gettex (Munich Stock Exchange) or Xetra (German Stock Exchange) .<br /><br />gettex is a stock exchange of Bayerische Börse AG. There are no brokerage fees or exchange fees 1 . The public law structure guarantees the neutrality that is essential for protecting the interests of market participants, investors and issuers.<br /><br />Xetra, a stock exchange of Deutsche Börse AG, is the most important trading venue in Germany. The order fee is a flat rate of 3.99 euros, including in the PRIME+ Broker 1 .<br /><br />In addition, there is the trading venue fee. This is only 0.01% of the executed volume (minimum EUR 1.50). The trading venue fee covers all third-party costs for trading and settlement. Billing is carried out by the depository bank. <br /><br />1 . Product costs, spreads, contributions and crypto fees may apply. All costs at a glance .<br /><br />Securities that cannot be traded on the available stock exchanges are sold manually via Baader Bank and billed in accordance with the price/service list .
                  </div>
               </div>
            </div>
            {/*TOPIC K*/}  
            <div className="landing-section10-topiccollapsedcont" onClick={()=> {
                const newCollapsedTopics = [...collapsedTopics]
                newCollapsedTopics[11] = collapsedTopics[11] === 1 ? 0 : 1
                setCollapedTopics(newCollapsedTopics)}}>
               <div className="landing-section10-topiccollapsed-inner">
                  <div className="landing-section10-topiccollapsed-title">
                    <div>What fees does Scalable Broker charge?</div>
                    {collapsedTopics[4] === 0 ? 
                      <Plus color="#747575" style={{ cursor: "pointer" }} /> :
                      <Minus color="#747575" style={{ cursor: "pointer" }} />
                    }
                  </div>
                  <div className="landing-section10-topiccollapsed-text" style={{ display: collapsedTopics[11] === 1 ? "block" : "none" }}>
                    gettex: On trading days, Monday to Friday, from 8:00 a.m. to 10:00 p.m. Stock exchange holidays<br /><br />are excluded .<br /><br />Xetra: On trading days, Monday to Friday, from 9:00 a.m. to 5:30 p.m.<br /><br />Except on stock exchange holidays .<br /><br />On trading days, the Scalable Broker even allows orders to be placed around the clock. From 00:15 to 23:30 you can create or cancel orders via the customer area. Stop and limit orders created outside of trading hours are executed at the next possible time during trading hours. Market orders are generally only valid for the day on which they are created. If they are created before the stock exchange opens, they are executed at the next possible time during trading hours. Market orders placed after the stock exchange closes expire.<br /><br />Outside of trading hours, a moon symbol appears next to the last price in the security view. This is an indicator that the stock exchanges are closed and trading is currently not possible.<br /><br />Please note that different trading times may apply for individual derivatives. Further information can be found in the “Key Investor Information” and on the issuers’ websites.
                  </div>
               </div>
            </div>
            {/*TOPIC L*/}  
         </div>
         {/* SECTION 2*/}
       </div>
    </div>
  )
}
