import "./PoojaProgramsStyles.css";
import { PoojaDataTypes, poojasDummyData } from "../../utils/dummyData.ts";
const PoojaPrograms = () => {
  return (
    <div id="PoojaDataTypes">
      <div id="pooja-programs-title">Pooja Programs</div>
      <div id="pooja-programs-card-container">
        {poojasDummyData.map((data: PoojaDataTypes) => {
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
