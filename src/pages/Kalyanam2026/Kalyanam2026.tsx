import "./Kalyanam2026.css";

import img2 from "../../assets/images/kalyanam-2.jpeg";
import img3 from "../../assets/images/kalyanam-3.jpeg";
import img4 from "../../assets/images/kalyanam-4.jpeg";
import img5 from "../../assets/images/kalyanam-5.jpeg";

const Kalyanam2026 = () => {
  const images = [img2, img3, img4, img5];

  return (
    <div className="kalyanam-container">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img
            src={image}
            alt={`Kalyanam ${index + 1}`}
            className="kalyanam-image"
          />
        </div>
      ))}
    </div>
  );
};

export default Kalyanam2026;