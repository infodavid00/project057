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
  const [showPublishBox, shouldShowPublishBox] = useState(false);
  const [publishInput, setpublishInput] = useState(""); 
  const [publishHeadlineInput, setpublishHeadlineInput] = useState(""); 
  const [loadingPublish, setPublish] = useState(false); 
  const [newsCount, setNewsCount] = useState('-'); 
  const [newsList, setNewsList] = useState([]); 
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    const fetchNewsStats = async () => {
      const token = Cookies.get(tokenVault);
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const response = await fetch(`${BaseEndpoint}/news/stats`, {
          method: 'GET',
          headers: {
            'Pass': `${btoa(token)}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        if (!response.ok) {
          toast.error(data.message || "An error occurred while fetching news stats.");
          setNewsCount(0);
        } else {
          setNewsCount(data.data.len || 0); 
        }
      } catch (error) {
        toast.error("An unexpected error occurred while fetching news stats.");
        setNewsCount(0);
      }
    };

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
          setNewsList(data.data || []); 
        }
      } catch (error) {
        toast.error("An unexpected error occurred while fetching news.");
      } finally {
        setLoadingNews(false);
      }
    };

    fetchNewsStats();
    fetchNews();
  }, []);

  const handleNewsPublish = async () => {
    const token = Cookies.get(tokenVault);
    if (!token) {
      navigate("/login");
      return;
    }
    if (publishHeadlineInput.trim().split(' ').length < 2) {
      toast.error("The headline must be more than 2 words.");
      return;
    }
    const contentWords = publishInput.trim().split(' ').length;
    if (contentWords < 3) {
      toast.error("The news content must be more than 2 words.");
      return;
    }
    if (contentWords > 3000) {
      toast.error("The news content cannot exceed 3000 words.");
      return;
    }
    setPublish(true);
    try {
      const response = await fetch(`${BaseEndpoint}/news`, {
        method: 'POST',
        headers: {
          'Pass': `${btoa(token)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          headline: publishHeadlineInput,
          content: publishInput,
        }),
      });
      const data = await response.json();  
      if (!response.ok) {
        toast.error(data.message || "An error occurred while publishing news.");
      } else {
        toast.success("News published successfully!");
        setpublishInput("");
        setpublishHeadlineInput("");
        shouldShowPublishBox(false);
        setNewsCount(prevCount => prevCount + 1);
        window.location.reload();
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setPublish(false);
    }
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <>
      <div id="application-body">
        <Header title={"News"} />
        <div id="application-container">
           <div id="news-header">
             <button onClick={() => shouldShowPublishBox(true)}>Publish news</button>
             <div>{newsCount} news published</div>
           </div>
           {loadingNews ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1em"}}>
              <TailSpin height="20" width="20" color="#ffffff" ariaLabel="loading" />
            </div>
           ) : (
             newsList.length > 0 ? newsList.map((newsItem, index) => (
               <div id="news-listscont" key={index}>
                 <div>
                   <div className="news-list-header"> 
                     <div className="news-list-header-titles">
                       <span style={{ fontSize: 20, fontFamily: "poppins-semibold" }}>{newsItem.headline} - </span>
                       <span>{formatDate(newsItem.date)} - </span>
                       <span>{newsItem.views} views</span>
                     </div>
                   </div>
                   <div className="news-list-contents">{newsItem.content}</div>
                 </div>
               </div>
             )) : (
               <div style={{ fontFamily: "poppins", textAlign: "center", marginTop: "1em" }}>No news available.</div>
             )
           )}
        </div>
      </div>

      {showPublishBox && (
        <div id="support-reply-body" style={{ position: "absolute", zIndex: 40}}>
          <div id="support-reply-container">
            <div className="auth-inputcontainer" style={{ marginTop: "0em" }}>
              <div className="auth-input-title" style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: "0.2em" }}>
                <X style={{ cursor: "pointer" }} strokeWidth={1.2} onClick={() => shouldShowPublishBox(false)} /> Publish news
              </div>
              <div className="auth-inputcontainer-outer">
                <input 
                   type="text" 
                   placeholder="News Headline"                   
                   value={publishHeadlineInput}
                   onChange={(e) => setpublishHeadlineInput(e.target.value)} />
              </div>
              <div className="auth-inputcontainer-outer" style={{ marginTop: "0.5em" }}>
                <textarea
                  placeholder="News content: Up to 5000 words"
                  value={publishInput}
                  onChange={(e) => setpublishInput(e.target.value)}
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
              onClick={handleNewsPublish}
              disabled={loadingPublish} 
            >{loadingPublish ? (
               <TailSpin height="20" width="20" color="#ffffff" ariaLabel="loading" />
              ) : "Publish news"}
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
}
