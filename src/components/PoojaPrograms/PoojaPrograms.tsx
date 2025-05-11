import "./PoojaProgramsStyles.css";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import {
  PoojaDataTypes,
  poojasDummyData,
  poojasDummyDataTelugu,
} from "../../utils/dummyData.ts";
const PoojaPrograms = () => {
  const { language } = useContext(LanguageContext);
  let currentData = {} as PoojaDataTypes[];
  if (language == "en") {
    currentData = poojasDummyData;
  } else {
    currentData = poojasDummyDataTelugu;
  }
  return (
    <div id="PoojaDataTypes">
      <div id="pooja-programs-title">Pooja Programs</div>
      <div id="pooja-programs-card-container">
        {currentData.map((data: PoojaDataTypes) => {
          return (
            <div className="pooja-programs-card">
              <div className="pooja-programs-name">{data.poojaName}</div>
              <div className="pooja-programs-price">Rs.{data.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PoojaPrograms;
