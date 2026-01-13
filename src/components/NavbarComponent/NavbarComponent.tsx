import "./NavbarStyles.css";
import logoImage from "../../assets/images/login_banner_image.png";
import { LanguageContext } from "../../contexts/LanguageContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import kalyanamPdf from "../../assets/kalyanam-pdf.pdf";
import donationsPdf from "../../assets/donationspdf.pdf";
const NavbarComponent = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 1000) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const languageChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setLanguage(value);
  };
  function handleLinkClick(link: string) {
    navigate("/" + link);
  }
  const handleOpenPdf = (text: string) => {
    if (text == "kalyanam") {
      window.open(kalyanamPdf, "_blank"); // opens in new tab
    } else if (text == "donations") {
      window.open(donationsPdf, "_blank");
    } else {
      navigate("/" + text);
    }
  };
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
        {screenWidth <= 1000 && (
          <div className="mobile-menu-btn" onClick={() => setShowMenu(true)}>
            ☰
          </div>
        )}
      </div>
      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body
          style={{
            display: "flex",
            flexDirection: "column",
            maxHeight: "100%",
            gap: "15px",
          }}
        >
          <select
            onChange={languageChangeHandler}
            value={language}
            id="navbar-select-language-mobile"
          >
            <option value="en">English</option>
            <option value="te">తెలుగు</option>
          </select>

          <div
            className="navbar-link-mobile"
            onClick={() => handleLinkClick("login")}
          >
            Login
          </div>
          <div className="navbar-link-mobile" onClick={() => handleOpenPdf("")}>
            Home
          </div>
          {/* <div className="navbar-link">Services</div> */}
          <div className="navbar-link-mobile">Sevas & Darshanam</div>
          <div
            className="navbar-link-mobile"
            onClick={() => handleOpenPdf("gallery")}
          >
            Photo Gallery
          </div>
          <div className="navbar-link-mobile">About Temple</div>
          {/* <div className="navbar-link" onClick={() => handleOpenPdf("kalyanam")}>
        Kalyanam 2025
      </div> */}
          <div
            className="navbar-link-mobile"
            onClick={() => handleOpenPdf("donations")}
          >
            Donations
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavbarComponent;
