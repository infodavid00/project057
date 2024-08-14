import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { X } from "react-feather";
import "./support.css";
import { BaseEndpoint, tokenVault } from "../../etc/network.jsx";
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';

export default function Main() {
  const [showReplyBox, shouldShowReplyBox] = useState(false);
  const [replyInput, setReplyInput] = useState(""); // New state for reply input
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [loadingMoreMessages, setLoadingMoreMessages] = useState(false);
  const [loadingReply, setLoadingReply] = useState(false); // New state for loading reply button
  const [totalMessages, setTotalMessages] = useState(null);
  const [totalReplied, setTotalReplied] = useState(null);
  const [totalPending, setTotalPending] = useState(null);
  const [supportMessages, setSupportMessages] = useState([]);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      const token = Cookies.get(tokenVault);
      if (!token) {
        navigate("/login");
        return;
      }
      try {
        const response = await fetch(`${BaseEndpoint}/support/stats`, {
          method: 'GET',
          headers: {
            'Pass': `${btoa(token)}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 403) {
          navigate("/login");
        } else if (response.ok) {
          let data = await response.json();
          data = data.data;
          if (data === null) {
            setTotalMessages(0);
            setTotalReplied(0);
            setTotalPending(0);
          } else {
            setTotalMessages(data?.total ?? 0);
            setTotalReplied(data?.replied ?? 0);
            setTotalPending((data?.total ?? 0) - (data?.replied ?? 0));
          }
          setLoading(false);
        } else {
          const error = await response.json();
          toast.error(`Error: ${error.message}`);
        }
      } catch (error) {
        toast.error(`Network Error: ${error.message}`);
      }
    };
    fetchStats();
  }, [navigate]);

  const fetchMessages = async () => {
    const token = Cookies.get(tokenVault);
    if (!token) {
      navigate("/login");
      return;
    }

    if (paginationIndex === 0) {
      setLoadingMessages(true);
    } else {
      setLoadingMoreMessages(true);
    }

    try {
      const response = await fetch(`${BaseEndpoint}/support?size=50&page=${paginationIndex}`, {
        method: 'GET',
        headers: {
          'Pass': `${btoa(token)}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 403) {
        navigate("/login");
      } else if (response.ok) {
        let data = await response.json();
        data = data.data;
        if (Array.isArray(data)) {
          setPaginationIndex(paginationIndex + 1);
          if (paginationIndex === 0) {
            setSupportMessages(data);
          } else {
            setSupportMessages([...supportMessages, ...data]);
          }
        } else {
          toast.info("No messages to show");
        }
      } else {
        const error = await response.json();
        toast.error(`Error: ${error.message}`);
      }
    } catch (error) {
      toast.error(`Network Error: ${error.message}`);
    }

    if (paginationIndex === 0) {
      setLoadingMessages(false);
    } else {
      setLoadingMoreMessages(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleReplySubmit = async () => {
  if (replyInput.length > 1 && replyInput.split(" ").length <= 300) {
    const token = Cookies.get(tokenVault);
    if (!token) {
      navigate("/login");
      return;
    }
    setLoadingReply(true);
    try {
      const response = await fetch(`${BaseEndpoint}/support`, {
        method: 'POST',
        headers: {
          'Pass': `${btoa(token)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: showReplyBox._id,
          reply: replyInput,
        }),
      });

      if (response.ok) {
        setSupportMessages(supportMessages.filter(message => message._id !== showReplyBox._id)); // Remove the replied message
        setTotalReplied(totalReplied + 1); 
        setTotalPending(totalPending - 1); 
        toast.success("Reply sent successfully!");
        shouldShowReplyBox(false);
      } else {
        const error = await response.json();
        toast.error(`Error: ${error.message}`);
      }
    } catch (error) {
      toast.error(`Network Error: ${error.message}`);
    } finally {
      setLoadingReply(false);
    }
  } else {
    toast.error("Reply must be between 1 and 300 words.");
  }
  };

  return (
    <>
      <div id="application-body">
        <Header title={"Support center"} />
        <div id="support-body">
          <div id="support-body-supports">
            {loadingMessages ? (
              <div>
                <TailSpin height="40" width="40" color="#00BFFF" ariaLabel="loading" />
              </div>
            ) : supportMessages.length > 0 ? (
              supportMessages.map((message, index) => (
                <div key={index} className="support-lists-cont">
                  <div className="support-list-header">
                    <div>
                      <span className="support-lists-header-name">{message.fullname} - </span>
                      <span className="support-lists-header-email">{message.email}</span>
                    </div>
                    <div className="support-lists-header-reply" onClick={() => {
                      shouldShowReplyBox(message);
                      setReplyInput(""); // Clear input when opening reply box
                    }}>Reply</div>
                  </div>
                  <div className="support-lists-message">{message.message}</div>
                  <div className="support-lists-header-email"
                    style={{ fontSize: "14px", marginTop: "0.5em", color: "white" }}>
                    reported {new Date(message.date).toLocaleString()}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ fontFamily: "poppins"}}>No messages to show</div>
            )}

            {/* Bottom Loader */}
            {loadingMoreMessages && (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <TailSpin height="20" width="20" color="#00BFFF" ariaLabel="loading" />
              </div>
            )}
          </div>
          <div id="support-body-meta">
            <div>
              {loading ? (
                <div>
                  <TailSpin height="20" width="20" color="#00BFFF" ariaLabel="loading" />
                </div>
              ) : (
                <>
                  <div className="support-body-meta-list">
                    <span>Total messages - </span>
                    <span>{totalMessages}</span>
                  </div>
                  <div className="support-body-meta-list">
                    <span>Total replied - </span>
                    <span>{totalReplied}</span>
                  </div>
                  <div className="support-body-meta-list">
                    <span>Total pending - </span>
                    <span>{totalPending}</span>
                  </div>
                </>
              )}
            </div>
            <button className="support-body-meta-btn" onClick={fetchMessages}>Load more messages</button>
          </div>
        </div>
      </div>

      {showReplyBox && (
        <div id="support-reply-body">
          <div id="support-reply-container">
            <div className="auth-inputcontainer" style={{ marginTop: "0em" }}>
              <div className="auth-input-title" style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: "0.2em" }}>
                <X style={{ cursor: "pointer" }} strokeWidth={1.2} onClick={() => shouldShowReplyBox(false)} /> Replying to {showReplyBox.fullname}
              </div>
              <div className="auth-inputcontainer-outer">
                <textarea
                  placeholder="Up to 300 words"
                  value={replyInput}
                  onChange={(e) => setReplyInput(e.target.value)} // Handle input change
                  style={{
                    width: "100%",
                    background: "transparent",
                    resize: "none",
                    outline: "none",
                    border: "none",
                    height: "10em",
                    fontFamily: "poppins"
                  }}
                />
              </div>
            </div>
            <button 
              className="auth-submitbtn" 
              onClick={handleReplySubmit}
              disabled={loadingReply} // Disable button when loading
            >
              {loadingReply ? (
                <TailSpin height="20" width="20" color="#ffffff" ariaLabel="loading" />
              ) : (
                `Send Reply to #${showReplyBox.supportId}`
              )}
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
}
