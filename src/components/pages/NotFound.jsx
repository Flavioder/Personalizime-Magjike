import React from 'react'
import "../styles/InnerPages.css";
function NotFound() {
  return (
    <div className='not-found-container'>
        <h1 className='not-found-error'>404</h1>
        <p className='not-found-text'>Faqja qe po kerkoni nuk ekziston!!!</p>
        <div className='not-found-redirect'>
            <p className='redirect-text'>Shkoni te faqja kryesore </p>
            <a href="/">HOME</a>
        </div>
    </div>
  )
}

export default NotFound