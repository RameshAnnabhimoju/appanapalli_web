import "./KalyanamBanerStyles.css";
import kalyanamBanner from "../../assets/images/kalyanam banner.png";
import kalyanamPdf from "../../assets/kalyanam-pdf.pdf";
import { Button } from "react-bootstrap";
const KalyanamBanner = () => {
  const handleOpenPdf = () => {
    window.open(kalyanamPdf, "_blank"); // opens in new tab
  };
  return (
    <div id="kalyanam-banner-container">
      <img
        src={kalyanamBanner}
        alt="Kalyanam Banner"
        id="kalyanam-banner-image"
      />
      <div id="kalyanam-banner-content">
        <div id="kalyanam-title">శ్రీ స్వామి వారి తిరు కళ్యాణ మహోత్సవం</div>
        <div id="kalyanam-description">
          శ్రీ స్వామి వారి తిరు కళ్యాణ మహోత్సవం 2025 డి. 05–06–2025 బుధవారం
          నుండి డి. 09–06–2025 సోమవారం వరకు <br />
          డి. 06–06–2025 జ్యేష్ఠ శుద్ధ వాదశి శుక్రవారం రాత్రి 9 గంటల 15 నిమిషముల
          నుండి. <br />
          భక్తులు ఈ మహోత్సవంలో పాల్గొనడానికి స్వాగతం.
        </div>
        <Button variant="success" onClick={handleOpenPdf}>
          Read More
        </Button>
      </div>
    </div>
  );
};

export default KalyanamBanner;
