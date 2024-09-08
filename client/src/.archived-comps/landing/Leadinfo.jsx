
import "./landing.css";
import { Star } from "react-feather";

export default function Leadinfo() {
  return (
    <div id="landing-leadinfo-body">
       <div className="landing-leadinfo-cont">
         <div className="landing-leadinfo-cont-title">+4,000</div>
         <div className="landing-leadinfo-cont-text">Students</div>
       </div>
       <div className="landing-leadinfo-cont">
         <div className="landing-leadinfo-cont-title">+1.2 million $</div>
         <div className="landing-leadinfo-cont-text">Earned by students</div>
       </div>
       <div className="landing-leadinfo-cont">
         <div style={{ display: "flex", gap: "0.5em", alignItems: "center", marginBottom: 15, marginTop: 12}}>
            <Star fill="var(--color)" width={33} height={33} />
            <Star fill="var(--color)" width={33} height={33} />
            <Star fill="var(--color)" width={33} height={33} />
            <Star fill="var(--color)" width={33} height={33} />
            <Star fill="var(--color)" width={33} height={33} />
         </div>
         <div className="landing-leadinfo-cont-text">Top rated academy</div>
       </div>
       <div className="landing-leadinfo-cont">
         <div className="landing-leadinfo-cont-title" style={{ border: "none" }}>Customer Service</div>
         <div className="landing-leadinfo-cont-text">Always active for every problem.</div>
       </div>
    </div>
  )
}