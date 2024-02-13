import img from "./images/th.jpeg"
import React,{useState} from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase.js";
import { GoogleAuthProvider} from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import ImageUpload from "./ImageUpload";
function Register({imageName,setImageName}){
async function Verify() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider); 
    const user = result.user;
    console.log("Logged in as", user.displayName);
  } catch (error) {
    console.log("Error signing in", error);
  }
} 
  const [contact,setContact]=useState({
    Name:"",
    Email:"",
    Password:""
  })
  const [head,Sethead]=useState("Register")
  function handleChange(event){
    
      const {name,value}=event.target;
      setContact(preValue=>{
        return {
          ...preValue,
          [name]: value
        }
      })
  }
 async function showResult(event){
  event.preventDefault();
  const res=await fetch("http://localhost:3000/register",{
  method:'POST',
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify(
      {contact,imageName}
  )
})
 if(res.status===201){
  Sethead("Register Succesful,Now login");
 }
 
 }
  return(
    <div className="Register">
        <div className="RegisterContent">
            <span id="logoName">WatsApp Web</span>
            <span id="Login">{head}</span>
            <button onClick={Verify} id="SignGoggle">Sign-In with google</button>
            <h1>{imageName}</h1>
            <form method="POST">
                <input onChange={handleChange} id="nameINPUT" type="text" placeholder="Your Name" name="Name"/>
                <input onChange={handleChange} type="email" placeholder="email" name="Email" />
                <input onChange={handleChange} type="password" placeholder="password" name="Password"/>
                <input onChange={handleChange} type="password" placeholder="Confirm Password" name="Confirm" />
                <button onClick={showResult} type="Submit" id="Reg">Register</button>
            </form>
            <ImageUpload imageName={imageName} setImageName={setImageName} />
            <p>Already have a account ?<Link to="/login">LogIn</Link></p>
        </div>
    </div>
  )
}
export default Register;