
import { User } from "react-feather"

export default function Section6() {
  return (
    <div id="landing-section6">
       <div id="landing-section6-title"><span style={{ fontFamily: "helvetica" }}>Fits together:</span> your goals and your broker</div>
       <div id="landing-section6-text">Effectively shape your own financial future – with a broker that suits you.</div>
       <div id="landing-section6-cardsection">
           <div className="landing-section6-card"> 
             <div className="landing-section6-card-a">Economy <button style={{ border: "1px solid #3B2A11", backgroundColor: "#211814", color: "#F7D100"}} className="landing-section6-card-a-btn">High risk</button></div>
             <div className="landing-section6-card-b">💵 Investment of €250+ </div>
             <div className="landing-section6-card-c">We give you a PDF with instructions for setting up the Santin Bot™.</div>
             <div className="landing-section6-card-d"><span className="landing-section6-card-d1">€39</span> <span className="landing-section6-card-d2">€29</span></div>
             <div className="landing-section6-card-e">Buy now</div>
             <div className="landing-section6-card-e"><User fill="white" /> Request information </div>
           </div>
           {/*CARD 1*/}
           <div className="landing-section6-card"> 
             <div className="landing-section6-card-a">Business <button style={{ border: "1px solid #1D3712", backgroundColor: "#131E14", color: "#85F921"}} className="landing-section6-card-a-btn">Medium/high risk</button></div>
             <div className="landing-section6-card-b">💵 💵 Investment of €500+ </div>
             <div className="landing-section6-card-c">In addition to the PDF, you will have videos with instructions and tips to create your trading account.</div>
             <div className="landing-section6-card-d"><span className="landing-section6-card-d1">€79</span> <span className="landing-section6-card-d2">€69</span></div>
             <div className="landing-section6-card-e">Buy now</div>
             <div className="landing-section6-card-e"><User fill="white" /> Request information </div>
           </div>
           {/*CARD 2*/}
           <div className="landing-section6-card landing-section6-card-mp"> 
             <div className="landing-section6-card-beforeA-mp">MOST PURCHASED</div>
             <div className="landing-section6-card-a landing-section6-card-a-mp">First Class <button style={{ border: "1px solid #3F0A50", backgroundColor: "#1F0C25", color: "#D100FF"}} className="landing-section6-card-a-btn">Medium risk</button></div>
             <div className="landing-section6-card-b">💰💰 Investment of €1000+</div>
             <div className="landing-section6-card-c">You have both the PDF and the Videos available, and you can interface directly with the Team.</div>
             <div className="landing-section6-card-d"><span className="landing-section6-card-d1">€179</span> <span className="landing-section6-card-d2">€129</span></div>
             <div className="landing-section6-card-e landing-section6-card-e-mp">Buy now</div>
             <div className="landing-section6-card-e"><User fill="white" /> Request information </div>
           </div>
           {/*CARD 3*/}
           <div className="landing-section6-card"> 
             <div className="landing-section6-card-a">Private Jet <button style={{ border: "1px solid #07344A", backgroundColor: "#08182A", color: "#03C0E2"}} className="landing-section6-card-a-btn">Weighted risk</button></div>
             <div className="landing-section6-card-b">💎 💎 Investment of €3000+</div>
             <div className="landing-section6-card-c">For you, everything that others have but with a true VIP treatment!</div>
             <div className="landing-section6-card-d"><span className="landing-section6-card-d1">€299</span> <span className="landing-section6-card-d2">€259</span></div>
             <div className="landing-section6-card-e">Buy now</div>
             <div className="landing-section6-card-e"><User fill="white" /> Request information </div>
           </div>
           {/*CARD 4*/}
       </div>
    </div>
  )
}
