import "./NavbarStyles.css";
import logoImage from "../../assets/images/login_banner_image.png";
const NavbarComponent = () => {
  return (
    <div id="navbar-container">
      <div id="navbar-logo-container">
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
      <div id="navbar-links-container">
        <div className="navbar-link">Home</div>
        <div className="navbar-link">Services</div>
        <div className="navbar-link">Sevas & Darshanam</div>
        <div className="navbar-link">Photo Gallery</div>
        <div className="navbar-link">About Temple</div>
      </div>
    </div>
  );
};

export default NavbarComponent;
