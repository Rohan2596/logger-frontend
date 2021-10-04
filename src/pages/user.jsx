import React from 'react';
import '../css/user.css'
function User() {
     return(
       <div className="main-user-container" >
         <div className="auth-container">
           <div className="auth-image-container"></div>
           <div className="auth-input-container">

           <img alt="avatar" src="https://img.icons8.com/color/96/000000/circled-user-male-skin-type-3--v2.png"/>
           <input class="username" type="text" placeholder="What's your username?"></input>
           <input class="password" type="text" placeholder="What's your password?"></input>
           <div className="sign-in">Sign In</div>
           </div>
         </div>
       </div>
      );
}
export default User; 