import "./monthlyranks.css";

export default function Cards() {
  const uname = "Bob Johnson"
  const cards = [
    {
      name: "Jane Doe",
      deposits: 320,
      points: "10K"
    },
    {
      name: "Alice Smith",
      deposits: 315,
      points: "9.6K"
    },
    {
      name: "Bob Johnson",
      deposits: 298,
      points: "7.2K"
    },
    {
      name: "Carol White",
      deposits: 278,
      points: "6.8K"
    },
    {
      name: "David Brown",
      deposits: 245,
      points: "5.0K"
    },
    {
      name: "Emma Davis",
      deposits: 203,
      points: "4.9K"
    },
    {
      name: "Frank Wilson",
      deposits: 197,
      points: "3.6K"
    },
    {
      name: "Starry Night",
      deposits: 156,
      points: "2.6K"
    },
    {
      name: "Hannah Martinez",
      deposits: 107,
      points: "2.1K"
    },
    {
      name: "Bob Johnson",
      deposits: 96,
      points: "1.6K"
    },
  ];

  return (
    <div id="monthlyranks-cards-body">
      {cards.map((element, index) => (
        <div key={index} className={
           element.name === uname ? "monthlyranks-card monthlyranks-isUser-card" : "monthlyranks-card"
          }>
          {/*<div> 
            <h1>{index + 1} </h1>
          </div>*/}
          <div className="monthlyranks-card-padded">
            <h1 className="monthlyranks-card-title">{index + 1} -  {element.name} </h1>
            {/*
            <h1 className="monthlyranks-card-title">
              {"Jane .M. Doe"} - 
              <div className="monthlyranks-card-name">{element.deposits} Deposits</div>
            </h1>
            */}
            {/* section1 */}

            <div style={{ marginTop: "1em" }}>
              <div className="monthlyranks-card-footer-text" style={{
                display: "flex",
                alignItems: "center",
                gap: 10
              }}> <div className="monthlyranks-card-name">{element.deposits} Deposits - </div>
               <span style={{ fontSize: 18 }}> {element.points} Points </span>
              </div>
              {/*  
              <div className="monthlyranks-card-footer-text">
               943 Points
              </div>
              */}
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
