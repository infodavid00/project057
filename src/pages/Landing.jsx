import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        to="/dashboard"
        style={{
          color: "white",
          textDecoration: "none",
          fontFamily: "poppins",
        }}
      >
        Go To Dashboard
      </Link>
    </div>
  );
}
