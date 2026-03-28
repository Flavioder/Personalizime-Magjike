import React, { useEffect, useState } from "react";
import "../styles/CookiePopUp.css";

function CookiePopUp() {
  const [showCookie, setShowCookie] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);

  useEffect(() => {
    const cookieChoice = localStorage.getItem("cookieConsent");

    if (!cookieChoice) {
      // ⏳ delay 1.5 sekonda para se të shfaqet
      setTimeout(() => {
        setShowCookie(true);

        setTimeout(() => {
          setAnimatePopup(true); // fade-in
        }, 100);
      }, 1500);
    }
  }, []);

  const closePopup = (type) => {
    localStorage.setItem("cookieConsent", type);

    setAnimatePopup(false); // fade-out

    setTimeout(() => {
      setShowCookie(false);
    }, 400);
  };

  if (!showCookie) return null;

  return (
    <div className={`pop-up-container ${animatePopup ? "show" : "hide"}`}>
      <h1 className="pop-up-header">Your privacy is important to us.</h1>

      <p className="pop-up-text">
        We process your personal information to measure and improve our sites
        and service, to assist our marketing campaigns and to provide
        personalised content and advertising.
      </p>

      <div className="pop-up-btn-container">
        <button onClick={() => closePopup("declined")} className="decline-btn">
          Decline
        </button>

        <button onClick={() => closePopup("accepted")} className="accept-btn">
          Accept Cookie
        </button>
      </div>
    </div>
  );
}

export default CookiePopUp;
