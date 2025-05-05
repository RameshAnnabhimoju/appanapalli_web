import AboutTempleComponent from "../../components/AboutTempleComponent/AboutTempleComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import GalleryCompoent from "../../components/GalleryComponent/GalleryCompoent";
import LivestreamComponent from "../../components/LivestreamComponent/LivestreamComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import "./HomeStyles.css";
const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <LivestreamComponent />
      <ServicesComponent />
      <GalleryCompoent />
      <AboutTempleComponent />
      <FooterComponent />
    </div>
  );
};

export default Home;
