// import KalyanamBanner from "../KalyanamBanner/KalyanamBanner";
import "./CarouselComponent.css";
import kalyanamPhoto from "../../assets/images/kalyanam-1.jpeg";
import { useNavigate } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import godhaReel1 from "../../assets/videos/GODHA-REEL-1.mp4";
// import godhaReel2 from "../../assets/videos/GODHA-REEL-2.mp4";

const CarouselComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="kalyanam-container">
      <img
        src={kalyanamPhoto}
        alt="Kalyanam 2026"
        className="kalyanam-image"
        onClick={() => navigate("/kalyanam-2026")}
      />
    </div>
    // <Carousel
    //   controls={true}
    //   indicators={true}
    //   slide
    //   interval={5000}
    //   pause={false}
    //   touch
    //   style={{ width: "90%", margin: "0 auto" }}
    // >
    //   {/* Slide 1 – Poster (entire poster image) */}
    //   <Carousel.Item>
    //     <KalyanamBanner />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div
    //       style={{
    //         backgroundColor: "#fffde6",
    //         height: "100%",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <video
    //         style={{ height: "100%" }}
    //         autoPlay
    //         loop
    //         muted
    //         playsInline
    //         src={godhaReel1}
    //       />
    //     </div>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div
    //       style={{
    //         backgroundColor: "#fffde6",
    //         height: "100%",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <video
    //         style={{ height: "100%" }}
    //         autoPlay
    //         loop
    //         muted
    //         playsInline
    //         src={godhaReel2}
    //       />
    //     </div>
    //   </Carousel.Item>
    // </Carousel>
  );
};

export default CarouselComponent;