import "./Footer.css"
import footer from "../assets/logo_big.png"
import instgram from "../assets/instagram_icon.png"
import pintester from "../assets/pintester_icon.png"
import whatsapp from "../assets/whatsapp_icon.png"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer} alt="footer" />
            <p>KHALID</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instgram} alt="instagram" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester} alt="pintester" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="whatsappp" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer