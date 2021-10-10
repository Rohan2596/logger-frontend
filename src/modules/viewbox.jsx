import React from "react";
import '../css/viewbox.css'
import{useState,useEffect} from'react'
import axiois from "axios";
function ViewBox() {


   const fetch={}
   const getRequest={}
   const app_context={}
   const[logs,setLogs]=useState([])
   useEffect(() => {
   getRequest.limit="100";
   getRequest.page_no="1";
   app_context.mode="WEB";
   app_context.server="tomcat";
    fetch.request=getRequest;
    fetch.app_context=app_context;

      fetchLogs(fetch)
    });

   function fetchLogs(){
    
      axiois.post("http://localhost:8080/log/fetch",
      fetch,{
         headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
           'token' : localStorage.getItem('token') 
         
      }})
      .then((response)=>{
         if(response.status==200){
           setLogs(response.data.result)
           
         }
         return response
      })
      .catch((error)=>{
         console.error("Error..",error);
   });
   }
   
   const messages=logs.map((message)=>{
      <div className="logger-message-container">
      <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
      <div className="log-message">{message}</div>
   </div>
   })  

 return(
     <div className="viewbox-main-container">
        {messages}
        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Logger message for we  testing</div>
        </div>
         
        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>

        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </div>
        </div>
        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Logger message for we  testing</div>
        </div>
        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Logger message for we  testing</div>
        </div>
        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Logger message for we  testing</div>
        </div>
        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Logger message for we  testing</div>
        </div>
        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Logger message for we  testing</div>
        </div>
        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Logger message for we  testing</div>
        </div>

        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Logger message for we  testing</div>
        </div>
        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Logger message for we  testing</div>
        </div>
        <div className="logger-message-container">
           <div className="log-timestamp">05-10-2021 10:30 Tuesday</div>
           <div className="log-message">Logger message for we  testing</div>
        </div>
        
     </div>
 )
    
}

export default ViewBox; 