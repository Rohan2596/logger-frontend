import React from 'react';
import {useHistory } from 'react-router-dom';
import '../css/user.css'
import{useState} from'react'
import axiois from "axios";
function User() {
  let history = useHistory();

  const user={}
  const request={};
  const baseUrl="http://localhost:8080/user/login"
  const appcontext={};


  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('')
  
  function onChangeUserName(event){
    setUsername(event.target.value)

  }
  function onChangePassword(event){
    setPassword(event.target.value)

  }
  function uselogin(value) {
    appcontext.mode="WEB";
    appcontext.server="tomcat"
    user.request=value;
    user.app_context=appcontext
    console.log(user);
      
       axiois.post(baseUrl,user)
       .then((response)=>{
         if(response.status==200 ){   
             localStorage.setItem("token",response.data.result);
             history.push('/dashboard')
            }
           return response
       }).catch((error)=>console.error(error));
       
   }


      function submit(){
        
        request.username=username;
        request.password=password;
        console.log(request);
        uselogin(request)
        
       
      }
     return(
       <div className="main-user-container" >
         <div className="auth-container">
           <div className="auth-image-container"></div>
           <div className="auth-input-container">

           <img alt="avatar" src="https://img.icons8.com/color/108/000000/circled-user-male-skin-type-3--v2.png"/>
           <input className="username" type="text" value={username} onChange={(e)=>onChangeUserName(e)} placeholder="What's your username?"></input>
           <input className="password" type="text" id={password} onChange={(e)=>onChangePassword(e)} placeholder="What's your password?"></input>
           <div className="sign-in" onClick={()=>submit()}>Sign In</div>
           </div>
         </div>
       </div>
      );
}
export default User; 