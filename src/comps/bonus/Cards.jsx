import { useState } from "react";
import "../monthlyranks/monthlyranks.css";
import "./bonus.css";

export default function Cards() {
  const [preview, shouldpreview] = useState("");
  // Flash Sale, New offer, Bundle Deal, Hot Deal
  const cards = [
    {
      tag: 0,
      item: "$30 USD",
      points: "5k",
      exp: "10 Aug 2024",
    },
    {
      tag: 1,
      item: "iPhone 14 Pro",
      points: "30k",
      exp: "15 Sep 2024",
    },
    {
      tag: 1,
      item: "$15 EURO",
      points: "2k",
      exp: "30 Sep 2024",
    },
    {
      tag: 0,
      item: "$70 USD",
      points: "9k",
      exp: "10 Sep 2024",
    },
    {
      tag: 2,
      item: "$50 STEAM CARD + $10 USD",
      points: "10k",
      exp: "20 Jul 2024",
    },
    {
      tag: 3,
      item: "Samsung Galaxy S23",
      points: "40k",
      exp: "05 Oct 2024",
    },
    {
      tag: 0,
      item: "PlayStation 5 Console",
      points: "45k",
      exp: "01 Aug 2024",
    },
    {
      tag: 2,
      item: "$20 USD + $10 Amazon Gift Card",
      points: "8k",
      exp: "12 Aug 2024",
    },
    {
      tag: 3,
      item: "Dell XPS 13 Laptop",
      points: "50k",
      exp: "28 Sep 2024",
    },
    {
      tag: 3,
      item: "GoPro HERO10 Black",
      points: "38k",
      exp: "04 Oct 2024",
    },
    {
      tag: 1,
      item: "Nintendo Switch OLED",
      points: "25k",
      exp: "18 Oct 2024",
    },
    {
      tag: 2,
      item: "4k TV + $50 Netflix Gift Card",
      points: "35k",
      exp: "23 Sep 2024",
    },
  ];

  return (
    <>
      <div id="monthlyranks-cards-body">
        {cards.map((element, index) => (
          <div key={index} className="monthlyranks-card">
            <div className="monthlyranks-card-index">
              <div
                className={`bonus-card-index-btn ${
                  element.tag === 0
                    ? "bonus-card-index-btn-flashsale"
                    : element.tag === 3
                    ? "bonus-card-index-btn-hotdeal"
                    : element.tag === 2
                    ? "bonus-card-index-btn-bundledeal"
                    : ""
                }`}
              >
                {element.tag === 0
                  ? "Flash Sale"
                  : element.tag === 3
                  ? "Hot Deal"
                  : element.tag === 2
                  ? "Bundle Deal"
                  : "Bonus"}
              </div>
            </div>
            {/* ... */}
            <div className="bonus-card-padded">
              <h1 className="monthlyranks-card-title">{element.item}</h1>
              <div className="monthlyranks-card-name">
                {element.points} Points
              </div>
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
                <span style={{ color: "white" }}>
                  4k TV + $50 Netflix Gift Card{" "}
                </span>
                <span style={{ color: "#bbb", fontFamily: "poppins" }}>
                  - 35k Points
                </span>
              </div>
            </div>
            <div id="dashboard-news-preview-content" style={{ color: "white" }}>
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
