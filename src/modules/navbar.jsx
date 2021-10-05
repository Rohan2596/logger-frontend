import React from "react";
import '../css/navbar.css'
function Navbar() {
   function openSideNav(){
       console.log("Side Nav Opened..");
   
      }
       return(
     <div className="navbar-main-container">
         <span className="material-icons" onClick={()=>openSideNav()}>segment</span>
         <span className="title" >Logger Platfrom</span>
     </div>
 )
    
}

export default Navbar; 