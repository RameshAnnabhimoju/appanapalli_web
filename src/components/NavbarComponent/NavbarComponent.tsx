import "./NavbarStyles.css";
import logoImage from "../../assets/images/login_banner_image.png";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const NavbarComponent = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const languageChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setLanguage(value);
  };
  function handleLinkClick(link: string) {
    navigate("/" + link);
  }
  return (
    <div id="navbar-container">
      <div id="navbar-multi-container">
        <div id="navbar-logo-container" onClick={() => handleLinkClick("")}>
          <img src={logoImage} alt="navbar-logo-image" id="navbar-logo-image" />
          <div id="navbar-logo-title-container">
            <div id="navbar-logo-title">
              Sri Balabalaji Devastanam (Bala Tirupati)
            </div>
            <div id="navbar-logo-title-telugu">
              శ్రీ బాల బాలాజీ దేవస్థానం (బాల తిరుపతి)
            </div>
          </div>
        </div>

        <div id="navbar-top-navlinks">
          <div className="navbar-links">
            <select
              onChange={languageChangeHandler}
              value={language}
              id="navbar-select-language"
            >
              <option hidden>Language</option>
              <option value="en" className="navbar-select-language-option">
                English
              </option>
              <option value="te" className="navbar-select-language-option">
                తెలుగు
              </option>
            </select>
            <div
              className="navbar-login"
              onClick={() => {
                handleLinkClick("login");
              }}
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
