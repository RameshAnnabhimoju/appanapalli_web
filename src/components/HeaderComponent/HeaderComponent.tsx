import govt_logo from "../../assets/images/govt_logo.png";
import endow_logo from "../../assets/images/endow_logo.png";
import "./HeaderComponent.css";
const HeaderComponent = () => {
  return (
    <div id="header-container">
      <img
        src={endow_logo}
        alt="endowment logo"
        id="header_endow_logo"
        className="header_logos"
      />
      <div>
        <div id="header-title">శ్రీ బాల బాలాజీ దేవస్థానం (బాల తిరుపతి)</div>
        <div id="header-subtext">
          అప్పన్నపల్లి, మామిడికుదురు మండలం, డా|| బి.ఆర్. అంబేద్కర్ జిల్లా, ఆంధ్ర
          ప్రదేశ్. 533247
        </div>
      </div>
      <img
        src={govt_logo}
        alt="govt logo"
        id="header_govt_logo"
        className="header_logos"
      />
    </div>
  );
};

export default HeaderComponent;
