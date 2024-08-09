import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const token = localStorage.getItem("@t-alpha:token");

  return !token ? <Navigate to="/" /> : <Outlet />;
};
