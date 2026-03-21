import { useState } from "react";
import { Link ,useLocation,useNavigate} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const navigate=useNavigate();
  const currentLocation=useLocation();
  const foreignPage=["about","our-story","contact","faq"];

  function homeFont(){
    for(let i=0;i<foreignPage.length;i++){    
      if(currentLocation.pathname.includes(`/${foreignPage[i]}`)){
        return true
      }
    }
    return false
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="./images/logoED.png" alt="Logo Personalizime Magjike" />
          Personalizime <span>Magjike</span>
        </Link>
            
        {
          homeFont()==true?(<>
          <button style={{background:"linear-gradient(90deg, #d9a46a, #edc28f)",borderRadius:"999px",padding:"10px 20px 10px 20px",fontSize:"1rem",
            lineHeight:"1.25rem",color:"white",border:"none",fontFamily:"Inter"}} onClick={()=>{navigate("/")}}>Home</button>
          </>):(<>
                    <button
                      className={`nav-toggle ${isOpen ? "active" : ""}`}
                      onClick={() => setIsOpen(!isOpen)}
                      aria-label="Hap menunë"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>

          <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
            <a href="#OurCollection" onClick={closeMenu}>
              Produktet
            </a>
            <a href="#Gallery" onClick={closeMenu}>
              Galeria
            </a>
            <a href="#how-it-works" onClick={closeMenu}>
              Si Funksionon
            </a>
            <a href="#Reviews" onClick={closeMenu}>
              Reviews
            </a>
          </nav>
          </>

          )
        }

      </div>
    </header>
  );
}

export default Navbar;
