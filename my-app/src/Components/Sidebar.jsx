import img from "../images/DP.jpeg"
export default function Sidebar(){
    return(
       <div className="Sidebar">
           <div className="Chats">
            <img src={img}></img>
            <div className="msg">
            <span>Arslan</span>
            <span id="history">hello good morning</span>
            </div>
           </div>
           <div className="Chats">
            <img src={img}></img>
            <div className="msg">
            <span>Arslan</span>
            <span id="history">hello good morning</span>
            </div>
           </div>
           <div className="Chats">
            <img src={img}></img>
            <div className="msg">
            <span>Arslan</span>
            <span id="history">hello good morning</span>
            </div>
           </div>
       </div>
    )
}