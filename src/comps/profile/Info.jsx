import { Edit3 } from "react-feather";
import "./profile.css";

export default function Info() {
  const info = {
    profile:
      "https://react-horizon-ui-chakra.appseed-srv1.com/static/media/avatar4.54d5c1de851c273b2cd9.png",
    name: "Adela Parkson",
    email: "infoexample123@outlook.com",
    creationDate: "10 August 2023",
    digits: {
      points: "6.2K",
      invites: 60,
      deposits: 574.34,
    },
  };
  return (
    <div id="profile-info-cont">
      <div id="profile-info-updatecont">
        <button>Update</button>
      </div>
      <div id="profile-info-image-container">
        <img src={info.profile} id="profile-info-image" />
        <div id="profile-info-image-editbtn">
          <Edit3 width={15} height={15} />
        </div>
      </div>
      <h2 id="profile-info-name">{info.name}</h2>
      <div className="profile-info-metainfo">{info.email}</div>
      <div className="profile-info-metainfo">Joined {info.creationDate}</div>

      <div id="profile-info-credentials">
        <div>
          <div className="profile-info-credentials-lead">
            {info.digits.points}
          </div>
          <div className="profile-info-metainfo">Points</div>
        </div>
        <div>
          <div className="profile-info-credentials-lead">
            {info.digits.invites}
          </div>
          <div className="profile-info-metainfo">Invites</div>
        </div>
        <div>
          <div className="profile-info-credentials-lead">
            ${info.digits.deposits}
          </div>
          <div className="profile-info-metainfo">Deposits</div>
        </div>
      </div>
    </div>
  );
}
