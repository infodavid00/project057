import { useState, useEffect } from "react";
import { Edit3 } from "react-feather";
import { TailSpin } from 'react-loader-spinner';
import { makeRequest } from "../../etc/network"; // Adjust the import based on your file structure
import "./profile.css";

export default function Info() {
  const [info, setInfo] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeRequest("/user", "GET", (data) => {
      setInfo(data);
      setLoading(false);
    });
  }, []);

  return (
    <div id="profile-info-cont">
      {loading ? (
        <div className="loader-container" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}>
          <TailSpin width={20} height={20} />
        </div>
      ) : (
        <>
          <div id="profile-info-updatecont">
            <button>Update</button>
          </div>
          <div id="profile-info-image-container">
            <img src={info?.profile ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-5Wi8qZXluHi11q-AHGh8riznXRoltGVYQ&s"} id="profile-info-image" alt="Profile" />
            <div id="profile-info-image-editbtn">
              <Edit3 width={15} height={15} />
            </div>
          </div>
          <h2 id="profile-info-name">{info.firstName + " " + info.lastName}</h2>
          <div className="profile-info-metainfo">{info.email}</div>

          <div id="profile-info-credentials">
            <div>
              <div className="profile-info-credentials-lead">
                {info?.points ?? 0}
              </div>
              <div className="profile-info-metainfo">Points</div>
            </div>
            <div>
              <div className="profile-info-credentials-lead">
                {info?.registration ?? 0}
              </div>
              <div className="profile-info-metainfo">Registrations</div>
            </div>
            <div>
              <div className="profile-info-credentials-lead">
                €{info?.deposits ?? 0}
              </div>
              <div className="profile-info-metainfo">Deposits</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
