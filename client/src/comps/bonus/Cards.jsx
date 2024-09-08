import { useState } from "react";
import "../monthlyranks/monthlyranks.css";
import "./bonus.css";

export default function Cards() {
  const [preview, shouldpreview] = useState("");
  const cards = [
    {
      item: "$30 USD",
      points: "5k",
      exp: "10 Aug 2024",
    },
    {
      item: "iPhone 14 Pro",
      points: "30k",
      exp: "15 Sep 2024",
    },
    {
      item: "€15 EURO",
      points: "2k",
      exp: "30 Sep 2024",
    },
    {
      item: "$70 USD",
      points: "9k",
      exp: "10 Sep 2024",
    },
    {
      item: "€50 STEAM CARD",
      points: "10k",
      exp: "20 Jul 2024",
    },
    {
      item: "Iphone XR",
      points: "40k",
      exp: "05 Oct 2024",
    },
    {
      item: "PlayStation 5",
      points: "45k",
      exp: "01 Aug 2024",
    },
    {
      item: "€10 EURO",
      points: "8k",
      exp: "12 Aug 2024",
    }
  ];

  return (
    <>
      <div id="monthlyranks-cards-body">
        {cards.map((element, index) => (
          <div key={index} className="monthlyranks-card">
            <div className="bonus-card-padded">
              <h1 className="monthlyranks-card-title">
                {element.item} - 
                <div className="monthlyranks-card-name">{element.points} Points</div>
              </h1>
              {/* section1 */}
              <div style={{ marginTop: "1em" }}>
                <div className="monthlyranks-card-footer-text">
                  Expires - {element.exp}
                </div>
                <button
                  className="monthlyranks-card-footer-btn"
                  onClick={() => shouldpreview(0)}
                >
                  Withdraw
                </button>
              </div>
              {/* section2 */}
            </div>
          </div>
        ))}
      </div>
      {/* Cards */}

      {preview === 0 && (
        <div id="dashboard-news-preview-body">
          <div
            id="bonus-preview-cont"
            className={
              preview === 0 ? "show-news" : preview === 1 ? "hide-news" : ""
            }
          >
            <div id="dashboard-news-preview-header">
              <div>
                <span style={{ color: "var(--color)" }}>
                  4k TV + $50 Netflix Gift Card{" "}
                </span>
                <span style={{ color: "#bbb", fontFamily: "poppins" }}>
                  - 35k Points
                </span>
              </div>
            </div>
            <div id="dashboard-news-preview-content" style={{ color: "var(--color)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium corrupti recusandae labore error unde dolores sunt
              consectetur placeat. Delectus illum fuga ipsa cupiditate, vel
              consequatur tempore alias voluptatem nostrum dolorem?
            </div>
            <div id="bonus-preview-footer">
              <button
                className="bonus-preview-footer-btn bonus-preview-footer-btn-cancel"
                onClick={() => shouldpreview(1)}
              >
                Cancel
              </button>
              <button
                className="bonus-preview-footer-btn bonus-preview-footer-btn-ok"
                onClick={() => window.location.reload()}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Preview  */}
    </>
  );
}
