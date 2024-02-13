import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";
function Chat({DisplayName}) {
    const [messages, Setmessage] = useState([]);
    const [messageInput, setMessageInput] = useState('');
  
    useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy('timestamp'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        Setmessage(snapshot.docs.map((doc) => doc.data()));
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    const sendMessage = async () => {
        if (messageInput.trim() === '') {
            return;
          }
        
          const newMessage = {
            text: messageInput,
            timestamp: new Date(),
          };
          const messagesRef = collection(db, 'messages');
          await addDoc(messagesRef, newMessage);
          setMessageInput('');
        }
    return (
      <div>
        <div className="MsgSection">
        {messages.map((message) => (
          <div key={message.timestamp}>{message.text}</div>
        ))}
        </div>
        <div className="EnterMsg">
        <input   type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..." className="textInput">
        </input>
        <input type="file" name="file" style={{display:"none"}}></input>
        <label htmlFor="file">🔗</label>
        <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    );
  }
  export default Chat;