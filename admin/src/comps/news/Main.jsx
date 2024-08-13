import { useState, useEffect } from "react";
import Header from "../header/Header";
import { X } from "react-feather";
import "./news.css";
import { BaseEndpoint, tokenVault } from "../../etc/network.jsx";
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';

export default function Main() {
  const c = `We would like to inform you of recent updates to our payment policy, which are effective immediately. These changes are aimed at enhancing the clarity and efficiency of our billing process. Invoices must now be settled within 15 days of receipt, with a late fee of 2% of the outstanding amount applied each month for overdue payments. Additionally, we have expanded our accepted payment methods to include major credit cards, PayPal, and direct bank transfers. Please make sure your payment method is current in our system to avoid any disruptions. Refunds will be processed within 7-10 business days.`;
  return (
    <>
      <div id="application-body">
        <Header title={"News"} />
        <div id="application-container">
           <div id="news-header">
             <button>Publish news</button>
             <div>21 news published</div>
           </div>
           {[1].map((element, index)=> (
           <div id="news-listscont">
             <div key={index}>
                <div className="news-list-header"> 
                  <div className="news-list-header-titles">
                    <span style={{ fontSize: 20, fontFamily: "poppins-semibold"}}>New updates on payment policy - </span>
                    <span> 2 Jul - </span>
                    <span> 201 views</span>
                  </div>
                  <button className="news-list-header-del">Delete</button>
                </div>
                <div className="news-list-contents">{c}</div>
             </div>
           </div>
          ))}
        </div>
      </div>
      {/* MAIN */}


      {true && (
        <div id="support-reply-body" style={{ position: "absolute", zIndex: 40}}>
          <div id="support-reply-container">
            <div className="auth-inputcontainer" style={{ marginTop: "0em" }}>
              <div className="auth-input-title" style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: "0.2em" }}>
                <X style={{ cursor: "pointer" }} strokeWidth={1.2} onClick={() => "shouldShowReplyBox(false)"} /> Publish news
              </div>
              <div className="auth-inputcontainer-outer">
                <input type="text" placeholder="News Headline" />
              </div>
              <div className="auth-inputcontainer-outer" style={{ marginTop: "0.5em" }}>
                <textarea
                  placeholder="News content: Up to 5000 words"
                  //value={replyInput}
                  //onChange={(e) => setReplyInput(e.target.value)} // Handle input change
                  style={{
                    width: "100%",
                    background: "transparent",
                    resize: "none",
                    outline: "none",
                    border: "none",
                    height: "19em",
                    fontFamily: "poppins"
                  }}
                />
              </div>
            </div>
            <button 
              className="auth-submitbtn" 
              //onClick={handleReplySubmit}
              //disabled={loadingReply} // Disable button when loading
            >{false ? (
               // <TailSpin height="20" width="20" color="#ffffff" ariaLabel="loading" />
               ""
              ) : "Publish news"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
