import AboutTempleComponent from "../../components/AboutTempleComponent/AboutTempleComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import GalleryCompoent from "../../components/GalleryComponent/GalleryCompoent";
import KalyanamBanner from "../../components/KalyanamBanner/KalyanamBanner";
import LivestreamComponent from "../../components/LivestreamComponent/LivestreamComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
// import PoojaPrograms from "../../components/PoojaPrograms/PoojaPrograms";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import TempleTimings from "../../components/TempleTimings/TempleTimings";
import TravelFacilities from "../../components/TravelFacilities/TravelFacilities";
import "./HomeStyles.css";
const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <KalyanamBanner />
      <TempleTimings />
      <ServicesComponent />
      <LivestreamComponent />
      <AboutTempleComponent />
      <GalleryCompoent />
      <TravelFacilities />
      {/* <PoojaPrograms /> */}
      <FooterComponent />
    </div>
  );
};

export default Home;
