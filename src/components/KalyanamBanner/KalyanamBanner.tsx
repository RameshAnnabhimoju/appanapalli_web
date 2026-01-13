import "./KalyanamBanerStyles.css";
import GODDESS_IMAGE_URL from "../../assets/images/godha devi.png";
import whatsappIcon from "../../assets/images/whatsapp.png";
const KalyanamBanner = () => {
  return (
    <div className="poster-page">
      <div className="poster-container">
        <div className="thoranam" />
        <div className="poster-main">
          <img
            src={GODDESS_IMAGE_URL}
            alt="Goda Devi"
            className="goddess-image"
          />
          {/* Header */}

          {/* Goddess Section */}
          <div className="poster-body">
            <div className="poster-details">
              <div className="poster-header">
                శ్రీ గోదా రంగనాథుల కళ్యాణం విశిష్టత
              </div>
              <ul className="benefits-list">
                <li>1. యువతి యువకులకు సత్వర వివాహ యోగం.</li>
                <li>2. దంపతులకు అనోన్యమైన సుఖం.</li>
                <li>3. సంతానం ఆరంభ వాకి సంతానప్రాప్తి.</li>
                <li>4. వృత్తి విద్య, వ్యాపార, ఉద్యోగ అభివృద్ధి.</li>
                <li>5. ఆయురారోగ్యం, దౌర్భాగ్య నివారణ.</li>
                <li>6. గోచార రీత్యా గ్రహబల నివృత్తి.</li>
              </ul>
              <div className="highlight-bar">
                శ్రీ గోదా రంగనాథుల కళ్యాణ సేవ అత్యంత శుభప్రదం.
              </div>
            </div>
          </div>
        </div>
        {/* Highlight */}

        {/* Event Details */}
        <div className="event-details">
          <h2>శ్రీ బాల బాలాజీ దేవస్థానం</h2>
          <p>(బాలతీర్పతి)</p>
          <p className="small">అప్పనపల్లి – 533247, ఆంధ్రప్రదేశ్</p>
          <p className="date">తేదీ: 14-01-2026</p>
          <p className="contact-bar">
            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />{" "}
            Whatsapp +91 72072 40444{" "}
          </p>
        </div>

        {/* Contact */}
      </div>
    </div>
  );
};

export default KalyanamBanner;
