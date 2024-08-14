import "./dashboard.css";

export default function TopContributors() {
    /* const contributors = [
  {
      image:
        "https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80",
      username: "Jane Doe",
      points: 70,
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
      username: "Jane's Brother",
      points: 50,
    },
    {
      image:
        "https://images.unsplash.com/photo-1573766064535-6d5d4e62bf9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80",
      username: "Jane's Cousin",
      points: 72,
    },
    {
      image:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
      username: "Jane's Stepmom",
      points: 36,
    },
    {
      image: "https://i.ibb.co/7p0d1Cd/Frame-24.png",
      username: "Dan Nooki",
      points: 63,
    },
    {
      image:
        "https://react-horizon-ui-chakra.appseed-srv1.com/static/media/Nft2.7897c45d2601ee3adfb5.png",
      username: "One Man",
      points: 61,
    },
    {
      image:
        "https://react-horizon-ui-chakra.appseed-srv1.com/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
      username: "Dan's Dad",
      points: 78,
    },
    {
      image:
        "https://react-horizon-ui-chakra.appseed-srv1.com/static/media/Nft1.0fea34cca5aed6cad72b.png",
      username: "Dan's Friend",
      points: 36,
    },
    {
      image:
        "https://react-horizon-ui-chakra.appseed-srv1.com/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
      username: "Kell Noname",
      points: 34,
    },
    {
      image:
        "https://react-horizon-ui-chakra.appseed-srv1.com/static/media/avatar3.9f646ac5920fa40adf00.png",
      username: "Kell's Mom",
      points: 22,
    },
  ]; */
  const contributors = [
        {
      image:
        "https://react-horizon-ui-chakra.appseed-srv1.com/static/media/Nft3.3b3e6a4b3ada7618de6c.png",
      username: "Dan's Dad",
      points: 78,
    },
    {
      image:
        "https://react-horizon-ui-chakra.appseed-srv1.com/static/media/Nft1.0fea34cca5aed6cad72b.png",
      username: "Dan's Friend",
      points: 36,
    },
    {
      image:
        "https://react-horizon-ui-chakra.appseed-srv1.com/static/media/avatar1.eeef2af6dfcd3ff23cb8.png",
      username: "Kell Noname",
      points: 34,
    },
  ]
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
        {contributors.map((element, index) => (
          <div key={index} className="dashboard-topcontrib-body">
            <div className="dashboard-topcontrib-body-namespace-contrib">
              {index + 1}
            </div>
            <div className="dashboard-topcontrib-body-namespace">
              <img
                src={element.image}
                className="dashboard-topcontrib-body-namespace-profile"
              />
              {element.username}
            </div>
            <div className="dashboard-topcontrib-body-namespace-rating">
              {/* <div
                className="dashboard-topcontrib-body-namespace-rating-inner"
                style={{
                  width: `${element.rating}%`,
                }}
              ></div> */}
              {element.points}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
