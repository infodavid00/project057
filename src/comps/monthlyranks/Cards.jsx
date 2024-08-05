import "./monthlyranks.css";

export default function Cards() {
  const cards = [
    {
      index: "1st",
      title: "Abstract Colors",
      name: "Jane Doe",
      digit: "0.90 ETH",
    },
    {
      index: "2nd",
      title: "Vintage Home",
      name: "Alice Smith",
      digit: "1.25 ETH",
    },
    {
      index: "3rd",
      title: "Modern Art",
      name: "Bob Johnson",
      digit: "2.10 ETH",
    },
    {
      index: "4th",
      title: "Sunset Views",
      name: "Carol White",
      digit: "0.75 ETH",
    },
    {
      index: "5th",
      title: "City Lights",
      name: "David Brown",
      digit: "1.85 ETH",
    },
    {
      index: "6st",
      title: "Ocean Breeze",
      name: "Emma Davis",
      digit: "1.00 ETH",
    },
    {
      index: "7th",
      title: "Dreamy Forest",
      name: "Frank Wilson",
      digit: "0.65 ETH",
    },
    {
      index: "8th",
      title: "Starry Night",
      name: "Grace Lee",
      digit: "2.50 ETH",
    },
    {
      index: "9th",
      title: "Futuristic Vision",
      name: "Hannah Martinez",
      digit: "3.00 ETH",
    },
    {
      index: "10th",
      title: "Modern Art",
      name: "Bob Johnson",
      digit: "2.10 ETH",
    },
  ];

  return (
    <div id="monthlyranks-cards-body">
      {cards.map((element, index) => (
        <div key={index} className="monthlyranks-card">
          <div className="monthlyranks-card-padded">
            <h1 className="monthlyranks-card-title">
              {"Jane .M. Doe"} - 
              <div className="monthlyranks-card-name">{"102"} Deposists</div>
            </h1>
            {/* section1 */}
            <div style={{ marginTop: "1em" }}>
              <div className="monthlyranks-card-footer-text">
               943 Points
              </div>
              <button className="monthlyranks-card-footer-btn">Swap</button>
            </div>
            {/* section2 */}
          </div>
        </div>
      ))}
    </div>
  );
}

//  <div className="monthlyranks-card-catalog">
//    <img src={element.images[0]} style={{ marginRight: "-7px", zIndex: 3 }} />
//    <img src={element.images[1]} style={{ marginRight: "-7px", zIndex: 2 }} />
//    <img src={element.images[2]} style={{ marginRight: "-7px", zIndex: 1 }} />
//    <img src={element.images[3]} style={{ marginRight: "-7px", zIndex: 0 }} />
//  </div>;
