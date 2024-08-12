import "./dashboard.css";

function Card(props) {
  const { children } = props;
  return <div className="dashboard-charts-box">{children}</div>;
}

export default Card;
