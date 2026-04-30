import React from 'react'
import { Link } from 'react-router-dom';

const Header=() =>{
    return(
        <div style={{display:"flex",border:"1px solid black",height:"80px",padding:"5px",backgroundColor:"yellow"}}>
        <ul style={{width:"100% ",display:"flex",alignItems:"center",
            justifyContent:"space-evenly",gap:"5px",textDecoration:"none",listStyle:"none"}}>
            {/* <li><img src="" alt="" /></li> */}
            <li><Link to={"/"}>Home</Link> </li>
            <li><Link to={"/contactus"}>Contact us</Link> </li>
            <li><Link to={"/about"}>About</Link> </li>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/signup"}>Signup</Link></li>
         </ul>
        </div>
    )
}
export default Header;
