import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const token = localStorage.getItem("@t-alpha:token");

  return token ? <Navigate to="/home" /> : <Outlet />;
};
