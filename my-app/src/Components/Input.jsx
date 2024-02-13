export default function  Input(){
   return(
    <div className="EnterMsg">
        <input type="text" placeholder="Enter the message" className="textInput"></input>
        <input type="file" name="file" style={{display:"none"}}></input>
        <label htmlFor="file">🔗</label>
        <button>Send</button>
    </div>
   )
}