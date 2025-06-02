import AboutTempleComponent from "../../components/AboutTempleComponent/AboutTempleComponent";
import GalleryCompoent from "../../components/GalleryComponent/GalleryCompoent";
import KalyanamBanner from "../../components/KalyanamBanner/KalyanamBanner";
import LivestreamComponent from "../../components/LivestreamComponent/LivestreamComponent";
// import PoojaPrograms from "../../components/PoojaPrograms/PoojaPrograms";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import TempleTimings from "../../components/TempleTimings/TempleTimings";
import TravelFacilities from "../../components/TravelFacilities/TravelFacilities";
import "./HomeStyles.css";
const Home = () => {
  return (
    <div>
      <KalyanamBanner />
      <TempleTimings />
      <ServicesComponent />
      <LivestreamComponent />
      <AboutTempleComponent />
      <GalleryCompoent />
      <TravelFacilities />
      {/* <PoojaPrograms /> */}
    </div>
  );
};

export default Home;
