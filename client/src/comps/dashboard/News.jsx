import { useState, useEffect } from "react";
import { X } from "react-feather";
import "./dashboard.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import { BaseEndpoint, tokenVault } from "../../etc/network";
import Cookies from 'js-cookie';

export default function News() {
  const [loadingNews, setLoadingNews] = useState(true);
  const [news, setNews] = useState([]);
  const [previewNews, shouldpreviewNews] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      setLoadingNews(true);
      try {
        const response = await fetch(`${BaseEndpoint}/news`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (!response.ok) {
          toast.error(data.message || "An error occurred while fetching news.");
        } else {
          setNews(data.data || []);
        }
      } catch (error) {
        toast.error("An unexpected error occurred while fetching news.");
      } finally {
        setLoadingNews(false);
      }
    };
    fetchNews();
  }, []);

  const handlePreviewNews = async (newsItem) => {
    const token = Cookies.get(tokenVault);
    if (!token) {
      window.location.href = "/signin";
      return;
    }
    shouldpreviewNews(newsItem);
    try {
      const response = await fetch(`${BaseEndpoint}/news/uview/${newsItem._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Pass': btoa(token),
        },
      });
      if (response.status === 403) {
        Cookies.remove(tokenVault);
        window.location.href = "/signin";
      }
    } catch (error) {
      console.error("Error making patch request:", error);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <>
      {news.length > 0 && (
        <div
          className="dashboard-charts-box dashboard-charts-box-scrollable"
          style={{ padding: 0 }}
        >
          <div id="dashboard-topcontrib-body">NEWS</div>
          <div style={{ padding: "1.4em" }}>
            {news.map((element, index) => (
              <div
                key={index}
                onClick={() => handlePreviewNews(element)}
                className="dashboard-topcontrib-body dashboard-news-body"
              >
                <div
                  style={{
                    width: "70%",
                    textAlign: "left",
                    fontFamily: "poppins-semibold",
                  }}
                >
                  {element.headline}
                </div>
                <div
                  style={{
                    width: "30%",
                    textAlign: "center",
                  }}
                >
                  {formatDate(element.date)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* overview */}

      {typeof previewNews === "object" && (
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
                <span style={{ color: "white" }}>{previewNews.headline} </span>
                <span style={{ color: "#bbb", fontFamily: "poppins" }}>
                  - {formatDate(previewNews.date)}
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
              {previewNews.content}
            </div>
          </div>
        </div>
      )}
      {/* preview */}
      <ToastContainer />
    </>
  );
}
