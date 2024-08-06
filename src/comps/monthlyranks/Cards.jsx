import "./monthlyranks.css";
import cards from "./cards.jsx"
import { useLocation } from 'react-router-dom';

export default function Cards() {
  const queryParams = new URLSearchParams(location.search);
  const uname = queryParams.get('test.uname');

  return (
    <div id="monthlyranks-cards-body">
      {cards.map((element, index) => (
        <div key={index} className={
           element.name === uname ? "monthlyranks-card monthlyranks-isUser-card" : "monthlyranks-card"
          }>
          {/*<div> 
            <h1>{index + 1} </h1>
          </div>*/}
          <div className="monthlyranks-card-padded">
            <h1 className="monthlyranks-card-title">{index + 1} -  {element.name} </h1>
            {/*
            <h1 className="monthlyranks-card-title">
              {"Jane .M. Doe"} - 
              <div className="monthlyranks-card-name">{element.deposits} Deposits</div>
            </h1>
            */}
            {/* section1 */}

            <div style={{ marginTop: "1em" }}>
              <div className="monthlyranks-card-footer-text" style={{
                display: "flex",
                alignItems: "center",
                gap: 10
              }}> <div className="monthlyranks-card-name">{element.deposits} Deposits - </div>
               <span style={{ fontSize: 18 }}> {element.points} Points </span>
              </div>
              {/*  
              <div className="monthlyranks-card-footer-text">
               943 Points
              </div>
              */}
               { element.name === uname &&
                 <button className="monthlyranks-card-footer-btn">Swap</button>
               }
            </div>
            {/* section2 */}
          </div>
        </div>
      ))}
    </div>
  );
}

//  <div className="monthlyranks-card-catalog">
//    <img src={element.images[0]} style={{ marginRight: "-7px", zIndex: 3 }} />
//    <img src={element.images[1]} style={{ marginRight: "-7px", zIndex: 2 }} />
//    <img src={element.images[2]} style={{ marginRight: "-7px", zIndex: 1 }} />
//    <img src={element.images[3]} style={{ marginRight: "-7px", zIndex: 0 }} />
//  </div>;
