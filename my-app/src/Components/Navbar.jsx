import img1 from "../images/phone-call-button.png"
import img2 from "../images/zoom.png"
import img3 from "../images/th.jpeg"
export default function Navbar(){
    return(
        <div className="Nav">
            <div className="TalkingPerson">
             <div className="talkerImage"><img src={img3}></img></div>
             <div className="talkerName"><span>Tauheed</span></div>
            </div>
            <div className="CallsWay">
               <div className="Call"><img src={img1}></img></div>
               <div className="Call"><img src={img2}></img></div>
            </div>
        </div>
    )
}