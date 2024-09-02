import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/public/login/Login";
import ErrorPage from "../pages/Error/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={"/login"} />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
        errorElement={<ErrorPage />}
      />
      <Route element={<PrivateRouter />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
export default AppRoutes;
