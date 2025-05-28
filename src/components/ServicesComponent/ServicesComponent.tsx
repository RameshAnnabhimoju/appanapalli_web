import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./ServicesStyles.css";

const ServicesComponent = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="services-container">
      <div id="services-title">Devotee Pooja Services</div>
      <div id="services-cards-container">
        <div className="services-card">
          <img
            src="https://ainavilli.com/static/media/om_2537030%20(1).svg"
            alt="img"
            className="services-card-icon"
          />
          <div className="services-card-title">
            {language == "en" ? "Ashirvachanam" : "ఆశీర్వచనం"}
          </div>
          <div className="services-card-description">Rs.500</div>
          <button className="services-card-button">Book Now</button>
        </div>
        <div className="services-card">
          <img
            src="https://ainavilli.com/static/media/om_2537030%20(1).svg"
            alt="img"
            className="services-card-icon"
          />
          <div className="services-card-title">
            {language == "en" ? "Veda Ashirvachanam" : "వేదాశీర్వచనం"}
          </div>
          <div className="services-card-description">Rs.1116</div>
          <button className="services-card-button">Book Now</button>
        </div>
        <div className="services-card">
          <img
            src="https://ainavilli.com/static/media/om_2537030%20(1).svg"
            alt="img"
            className="services-card-icon"
          />
          <div className="services-card-title">
            {language == "en"
              ? "Sri Lakshmi Narayana Homam"
              : "శ్రీ లక్ష్మి నారాయణ హోమం"}
          </div>
          <div className="services-card-description">Rs.400</div>
          <button className="services-card-button">Book Now</button>
        </div>
        <div className="services-card">
          <img
            src="https://ainavilli.com/static/media/om_2537030%20(1).svg"
            alt="img"
            className="services-card-icon"
          />
          <div className="services-card-title">
            {language == "en"
              ? "Abhishekam to Sri Swami Varu"
              : "అభిషేకం శ్రీ స్వామి వారికీ"}
          </div>
          <div className="services-card-description">Rs.100</div>
          <button className="services-card-button">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
