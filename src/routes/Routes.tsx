import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/public/login/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Gallery from "../pages/gallery/Gallery";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
import NavbarLinksComponent from "../components/NavbarComponent/NavbarLinksComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import Kalyanam2026 from "../pages/Kalyanam2026/Kalyanam2026";

const AppRoutes = () => {
  return (
    <>
      <NavbarComponent />
      <NavbarLinksComponent />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="/login"
          element={<LoginPage />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/gallery"
          element={<Gallery />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/kalyanam-2026"
          element={<Kalyanam2026 />}
        />
        <Route element={<PrivateRouter />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterComponent />
    </>
  );
};
export default AppRoutes;
