import "./header.css";

export default function Header({ title }) {
  return (
    <>
      <div className="application-header">
        <div className="application-header-container">
          <div id="application-header-container1">
            <div>{title}</div>
          </div>
        </div>
      </div>
    </>
  );
}
