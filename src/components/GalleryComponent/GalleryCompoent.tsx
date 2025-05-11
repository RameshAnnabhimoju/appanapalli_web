import "./GalleryStyles.css";
import templeImage1 from "../../assets/images/poojari2.jpg";
import templeImage2 from "../../assets/images/poojari.jpg";
import templeImage3 from "../../assets/images/poojari3.jpg";
import templeImage4 from "../../assets/images/god4.jpg";
import templeImage5 from "../../assets/images/god5.jpg";
import templeImage6 from "../../assets/images/Appanapalli-Temple.png";
const GalleryCompoent = () => {
  return (
    <div id="gallery-container">
      <div id="gallery-title">Temple Gallery</div>
      <div id="gallery-divider" />
      <div id="gallery-images-container">
        <img src={templeImage1} alt="gallery-image" className="gallery-image" />
        <img src={templeImage2} alt="gallery-image" className="gallery-image" />
        <img src={templeImage3} alt="gallery-image" className="gallery-image" />
        <img src={templeImage4} alt="gallery-image" className="gallery-image" />
        <img src={templeImage5} alt="gallery-image" className="gallery-image" />
        <img src={templeImage6} alt="gallery-image" className="gallery-image" />
      </div>
      <div id="gallery-divider" />
      <button id="gallery-button">See More</button>
    </div>
  );
};

export default GalleryCompoent;
