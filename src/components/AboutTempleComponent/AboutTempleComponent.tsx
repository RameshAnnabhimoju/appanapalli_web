import "./AboutTempleStyles.css";
import logoImage from "../../assets/images/login_banner_image.png";
const AboutTempleComponent = () => {
  return (
    <div id="about-temple-container">
      <img src={logoImage} alt="about-temple-image" id="about-temple-image" />
      <img
        src="https://www.srisailadevasthanam.org/static/media/SD-gallery-04.63cfb6ad.png"
        alt="about-temple-image"
        id="about-temple-image2"
      />
      <div id="about-temple-text-container">
        <div id="about-temple-title">About Temple</div>
        <div id="about-temple-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim sunt
          modi a quos similique fuga eius et. Saepe maiores dignissimos
          voluptates, tempora magnam autem, similique libero aspernatur
          excepturi atque est repellendus maxime nobis possimus labore
          voluptatibus nostrum. Beatae, accusantium recusandae alias a
          architecto id maxime ducimus non sequi nemo quam. Fuga deleniti cumque
          provident totam eius! Maxime corrupti praesentium, quis excepturi,
          earum iste vitae deleniti illo laborum sed ut amet consequuntur
          laudantium et atque iure necessitatibus. Harum corporis nulla aliquid
          corrupti veniam esse ex architecto veritatis error perferendis ad
          earum, voluptas ut, perspiciatis quo quaerat vero illum temporibus
          reiciendis.
        </div>
      </div>
    </div>
  );
};

export default AboutTempleComponent;
