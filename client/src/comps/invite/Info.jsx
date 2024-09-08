
import "./invite.css";

export default function Info() {
  const info = [
    ["329,220", "Total Points"],
    ["355,392", "Total invitations made"],
    ["120,830", "Total invitations accepted"],
    ["194,493", "Total users"],
    ["73,956", "Total Depositors"],
  ]
  return (
    <div id="invitepage-pointsection">
      <div id="invitepage-pointsection-title">Wolfx Statistics </div>
      <div id="invitepage-pointsection-cardsection"> 
        {info.map((element, index)=> (
          <div key={index}>  
             <div className="invitepage-pointsection-cardtitle">{element[0]}</div>
             <div className="invitepage-pointsection-cardtext">{element[1]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}