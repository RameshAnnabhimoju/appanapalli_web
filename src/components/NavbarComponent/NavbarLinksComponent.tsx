import "./NavbarStyles.css";
import kalyanamPdf from "../../assets/kalyanam-pdf.pdf";
import donationsPdf from "../../assets/donationspdf.pdf";
import { useNavigate } from "react-router-dom";
const NavbarLinksComponent = () => {
  const navigate = useNavigate();
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
    <div id="navbar-links-container">
      <div className="navbar-link" onClick={() => handleOpenPdf("")}>
        Home
      </div>
      {/* <div className="navbar-link">Services</div> */}
      <div className="navbar-link">Sevas & Darshanam</div>
      <div className="navbar-link" onClick={() => handleOpenPdf("gallery")}>
        Photo Gallery
      </div>
      <div className="navbar-link">About Temple</div>
      {/* <div className="navbar-link" onClick={() => handleOpenPdf("kalyanam")}>
        Kalyanam 2025
      </div> */}
      <div className="navbar-link" onClick={() => handleOpenPdf("donations")}>
        Donations
      </div>
    </div>
  );
};

export default NavbarLinksComponent;
