import "./Hero.css";
import handicon from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";
import hero from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
        
        <div>
            <div className="hero-hand-icon">
            <p>new</p>
            <img src={handicon} alt="handicon" />            
            </div>
            <div className="new">
            <p>collection</p>
            <p>for everyone</p>
            </div>
           
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt="arrow" />
      </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="hero" />

      </div>
    </div>
  );
};

export default Hero;
