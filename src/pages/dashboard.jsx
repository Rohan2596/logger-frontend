import React from "react";
import '../css/dashboard.css'
import Navbar from "../modules/navbar";
import ViewBox from "../modules/viewbox";
function Dashboard() {
 return(
     <div className="dashboard-main-container">
         <Navbar/>
         <div className="view-box-container">
         <ViewBox/>
         </div>
     </div>
 )
    
}

export default Dashboard; 