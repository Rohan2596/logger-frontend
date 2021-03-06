import React from "react";
import '../css/navbar.css'
function Navbar() {
   function openSideNav(){
       console.log("Side Nav Opened..");
        document.getElementById("sideBar-container").style.width = "50%";
        document.getElementById("sideBar-container").style.display = "flex";
        document.getElementById("sideBar-container").style.height = "100vh";
      }
      function closeSideNav(){
        console.log("Side Nav Opened..");
         document.getElementById("sideBar-container").style.width = "0%";
         document.getElementById("sideBar-container").style.display="none"
          }
       return(
     <div className="navbar-container">   
     <div id="sideBar-container" className="sideBar-container">
     <span className="material-icons close-icon" onClick={()=>closeSideNav()}>cancel</span>

         <div className="project-name" >Project Name</div>
         <div className="menu" ><span class="material-icons">dashboard</span>Dashboard</div>
     </div>
 
     <div className="navbar-main-container">
         <span className="material-icons menu nav" onClick={()=>openSideNav()}>segment</span>
         <span className="title" >Logger Platfrom</span>
     </div>
         </div>
     
 )
    
}

export default Navbar; 