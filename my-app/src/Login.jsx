import React,{useState} from "react";
import { Link } from "react-router-dom";
function Login({IsAuthentic,SetAunthentic,DisplayName,SetDisplayName,imageName,setImageName}){
    const [display,Setdisplay]=useState("Login");
    const [LoginInfo,SetLoginInfo]=useState({
        UserId:"",
        Password:""
    })
    function handleChange(event){
        const {name,value}=event.target;
        SetLoginInfo(prevValue=>{
         return{...prevValue,
            [name]:value
         }
        })
    }
    async function SendInfo(event){
        event.preventDefault();
        const res=await fetch("http://localhost:3000/login",{
            method:'POST',
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(
                LoginInfo
            )
        });
        if(res.status===201){
            const data = await res.json();
            SetDisplayName(data.Name);
            console.log(data.imageName)
            setImageName(data.imageName);
            Setdisplay(data.Name+" Logged Successfully!!!");
            SetAunthentic(true);
        }
        else{
            Setdisplay("Invalid UserId or Password !!");
        }
    }
    return(
        <div className="Register">
            <div className="RegisterContent" style={{height:"350px"}}>
                <span id="logoName">WatsApp Web</span>
                <span id="Login">{display}</span>
                <form>
                    <input  type="email" placeholder="email" name="UserId" onChange={handleChange} />
                    <input type="password" placeholder="password" name="Password" onChange={handleChange}/>
                    <button type="Submit" onClick={SendInfo}>Login</button>
                </form>
                <p>Don't have a account ?<Link to='/register'>Register</Link></p>
            </div>
        </div>
    )
}
export default Login;