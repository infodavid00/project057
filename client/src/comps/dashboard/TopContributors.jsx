import { useState, useEffect } from "react";
import { TailSpin } from 'react-loader-spinner';
import "./dashboard.css";
import { makeRequest } from "../../etc/network";

export default function TopContributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeRequest("/user/contributors", "GET", (response) => {
      // Ensure that the response is an array, even if the request fails
      setContributors(Array.isArray(response) ? response : []);
      setLoading(false);
    }, () => {
      // Handle request error here
      setContributors([]); // Set to an empty array on error
      setLoading(false);
    });
  }, []);

  return (
    <div
      className="dashboard-charts-box dashboard-charts-box-scrollable"
      style={{ padding: 0 }}
    >
      <div id="dashboard-topcontrib-body">Top Contributors</div>
      <div style={{ padding: "1.4em" }}>
        <div id="dashboard-topcontrib-headers">
          <div id="dashboard-topcontrib-headers-headers1">POSITION</div>
          <div id="dashboard-topcontrib-headers-headers2">USERNAME</div>
          <div id="dashboard-topcontrib-headers-headers3">POINTS</div>
        </div>
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "2em" }}>
            <TailSpin width={30} height={30} />
          </div>
        ) : contributors.length > 0 ? (
          contributors.map((element, index) => (
            <div key={index} className="dashboard-topcontrib-body">
              <div className="dashboard-topcontrib-body-namespace-contrib">
                {index + 1}
              </div>
              <div className="dashboard-topcontrib-body-namespace">
                <img
                  src={element.profile ??  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-5Wi8qZXluHi11q-AHGh8riznXRoltGVYQ&s"}
                  className="dashboard-topcontrib-body-namespace-profile"
                  alt={`${element.username}'s profile`}
                />
                {element.firstName} {element.lastName}
              </div>
              <div className="dashboard-topcontrib-body-namespace-rating">
                {element.points ?? 0}
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", marginTop: "2em" }}>
            No contributors found.
          </div>
        )}
      </div>
    </div>
  );
}
