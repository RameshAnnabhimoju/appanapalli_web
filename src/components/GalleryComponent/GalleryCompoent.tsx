import "./GalleryStyles.css";

const GalleryCompoent = () => {
  return (
    <div id="gallery-container">
      <div id="gallery-title">Temple Gallery</div>
      <div id="gallery-divider" />
      <div id="gallery-images-container">
        <img
          src="https://www.srisailadevasthanam.org/static/media/SD-gallery-04.63cfb6ad.png"
          alt="gallery-image"
          className="gallery-image"
        />
        <img
          src="https://www.srisailadevasthanam.org/static/media/SD-gallery-04.63cfb6ad.png"
          alt="gallery-image"
          className="gallery-image"
        />
        <img
          src="https://www.srisailadevasthanam.org/static/media/SD-gallery-04.63cfb6ad.png"
          alt="gallery-image"
          className="gallery-image"
        />
        <img
          src="https://www.srisailadevasthanam.org/static/media/SD-gallery-04.63cfb6ad.png"
          alt="gallery-image"
          className="gallery-image"
        />
        <img
          src="https://www.srisailadevasthanam.org/static/media/SD-gallery-04.63cfb6ad.png"
          alt="gallery-image"
          className="gallery-image"
        />
        <img
          src="https://www.srisailadevasthanam.org/static/media/SD-gallery-04.63cfb6ad.png"
          alt="gallery-image"
          className="gallery-image"
        />
      </div>
      <div id="gallery-divider" />
      <button id="gallery-button">See More</button>
    </div>
  );
};

export default GalleryCompoent;
