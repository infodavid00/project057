import { useState } from "react";
import { X } from "react-feather";
import "./dashboard.css";

export default function News() {
  const [previewNews, shouldpreviewNews] = useState("");
  const news = [
    {
      title: "Local Hero Saves Cat",
      date: "3 Jul ",
    },
    {
      title: "New Art Exhibit Opening",
      date: "31 Jul ",
    },
    {
      title: "Tech Giant Update",
      date: "1 Aug ",
    },
    {
      title: "Weather Alert: Heatwave",
      date: "1 Aug ",
    },
    {
      title: "Breaking: Market Surge",
      date: "2 Aug ",
    },
    {
      title: "Sports Team Wins",
      date: "2 Aug ",
    },
    {
      title: "Cultural Festival Highlights",
      date: "2 Aug ",
    },
    {
      title: "Innovative Startup Launch",
      date: "2 Aug ",
    },
    {
      title: "City Traffic Update",
      date: "2 Aug ",
    },
    {
      title: "Health & Wellness Tips",
      date: "2 Aug ",
    },
    {
      title: "Local Library Fundraiser",
      date: "3 Aug ",
    },
    {
      title: "New Park Opening",
      date: "3 Aug ",
    },
    {
      title: "Educational Workshop Success",
      date: "4 Aug ",
    },
    {
      title: "New Restaurant Opens",
      date: "4 Aug ",
    },
    {
      title: "Celebrity Visits Town",
      date: "5 Aug ",
    },
  ];

  return (
    <>
      <div
        className="dashboard-charts-box dashboard-charts-box-scrollable"
        style={{ padding: 0 }}
      >
        <div id="dashboard-topcontrib-body">NEWS</div>
        <div style={{ padding: "1.4em" }}>
          {news.map((element, index) => (
            <div
              key={index}
              onClick={() => shouldpreviewNews(0)}
              className="dashboard-topcontrib-body dashboard-news-body"
            >
              <div
                style={{
                  width: "70%",
                  textAlign: "left",
                  fontFamily: "poppins-semibold",
                }}
              >
                {element.title}
              </div>
              <div
                style={{
                  width: "30%",
                  textAlign: "center",
                }}
              >
                {element.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* overview */}

      {previewNews === 0 && (
        <div id="dashboard-news-preview-body">
          <div
            id="dashboard-news-preview-cont"
            className={
              previewNews === 0
                ? "show-news"
                : previewNews === 1
                ? "hide-news"
                : ""
            }
          >
            <div id="dashboard-news-preview-header">
              <div>
                <span style={{ color: "white" }}>Local Hero Saves Cat </span>
                <span style={{ color: "#bbb", fontFamily: "poppins" }}>
                  - 2 Aug
                </span>
              </div>
              <X
                strokeWidth={1}
                color="white"
                style={{ cursor: "pointer" }}
                onClick={() => shouldpreviewNews(1)}
              />
            </div>
            <div id="dashboard-news-preview-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium corrupti recusandae labore error unde dolores sunt
              consectetur placeat. Delectus illum fuga ipsa cupiditate, vel
              consequatur tempore alias voluptatem nostrum dolorem?
            </div>
          </div>
        </div>
      )}
      {/* preview */}
    </>
  );
}
