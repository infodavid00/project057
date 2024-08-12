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
  return (
    <>
      <div id="application-body">
        <Header title={"News"} />
        <div id="application-container">
           <div id="news-header">
             <button>Publish news</button>
             <div>21 news published</div>
           </div>
           <div id="news-listscont">
           {[1].map((element, index)=> (
             <div key={index}>
                <div className="news-list-header"> 
                  <div className="news-list-header-titles">
                    <span style={{ fontSize: 20, fontFamily: "poppins-semibold"}}>New updates on payment policy - </span>
                    <span> 2 Jul - </span>
                    <span> 201 views</span>
                  </div>
                  <button className="news-list-header-del">Delete</button>
                </div>
                <div>Lorem isposium Dior</div>
             </div>
           ))}
           </div>
        </div>
      </div>
    </>
  );
}
