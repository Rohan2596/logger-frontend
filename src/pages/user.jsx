import React from 'react';
import {useHistory } from 'react-router-dom';
import '../css/user.css'
function User() {
  let history = useHistory();

      function submit(){
        console.log("Submit");
        localStorage.setItem("token","success");
        history.push('/dashboard')
      }
     return(
       <div className="main-user-container" >
         <div className="auth-container">
           <div className="auth-image-container"></div>
           <div className="auth-input-container">

           <img alt="avatar" src="https://img.icons8.com/color/96/000000/circled-user-male-skin-type-3--v2.png"/>
           <input className="username" type="text" placeholder="What's your username?"></input>
           <input className="password" type="text" placeholder="What's your password?"></input>
           <div className="sign-in" onClick={()=>submit()}>Sign In</div>
           </div>
         </div>
       </div>
      );
}
export default User; 