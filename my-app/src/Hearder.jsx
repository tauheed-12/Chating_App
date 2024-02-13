import React from "react";
import {Link} from "react-router-dom"
function Header(props){
    const param = props.IsAuthentic ? "LogOut" : "Login";
    function Change(){
        props.SetAunthentic(false);
    }
    return(
        
        <div className="Head">
            <div className="logo"><Link to='/' className="link">Chating App</Link></div>
            <div className="Login" onClick={Change}><Link to='/login' className="link">{param}</Link></div>
            <div className="About"><Link to='/about' className="link">About</Link></div>
            <div className="Contact"><Link to='/contact' className="link">Contact</Link></div>
            <div className="profile"><Link to='/Userprofile' className="link">Profile</Link></div>
        </div>
    )
}
export default Header;