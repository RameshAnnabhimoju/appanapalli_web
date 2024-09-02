import { Navigate, Outlet } from "react-router-dom";
import { storageService } from "../services/storageService";
import { storageKeys } from "../configs/appConfigs";

const PrivateRouter = () => {
  const { getItem } = storageService;
  const { AUTH } = storageKeys;
  const auth = getItem(AUTH);
  // const auth = true;
  return auth && auth?.isLoggedin && auth?.token?.length > 0 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
