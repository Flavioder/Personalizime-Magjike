import React from 'react'
import "../styles/CookiePopUp.css"
import { useEffect ,useState} from "react";
function CookiePopUp() {
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-up1");
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        });
    
        elements.forEach((el) => observer.observe(el));
      }, []);
      const [showCookie,updateShowCookie]=useState(true);
  return (
    <div className={`pop-up-container fade-up1  ${showCookie==true?" ":"inv-animation show"}`} style={{transitionDelay:"1s"}}>
            <h1 className='pop-up-header'>Your privacy is important to us.</h1>
            <p className='pop-up-text'>We process your personal information to measure and improve our sites and service, to assist our marketing 
                campaigns and to provide personalised content and advertising. For more information see our Privacy Policy</p>
            <div className='pop-up-btn-container'>
                <button className='decline-btn ' onClick={()=>{updateShowCookie(false)}}>Decline</button>
                <button className='accept-btn' onClick={()=>{updateShowCookie(false)}}>Accept Cookie</button>
            </div>
        
    </div>
  )
}

export default CookiePopUp