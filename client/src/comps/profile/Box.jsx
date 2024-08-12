import Info from "./Info";
import Passwordspace from "./Passwordspace";
import "./profile.css";

export default function Box() {
  return (
    <div className="profile-body">
      <Info />
      <Passwordspace />
    </div>
  );
}
