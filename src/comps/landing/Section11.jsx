import book1 from "../../assets/images/section11books.png"
import Appstore from "../../assets/images/section11Appstore.svg"
import Playstore from "../../assets/images/section11playstore.svg"

export default function Section11() {
  return (
     <div id="landing-section11">
        <img src={book1} />
        <div id="landing-section11-text">Register directly via app</div>
        <div id="landing-section11-btnflexed">
           <img src={Appstore} />
           <img src={Playstore} />
        </div>
     </div>
  )
} 