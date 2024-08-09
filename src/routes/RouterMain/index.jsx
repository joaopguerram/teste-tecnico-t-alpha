import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/Login";
import { Home } from "../../pages/Home";
import { Error } from "../../pages/Error";
import { Register } from "../../pages/Register";
import { PrivateRoutes } from "../PrivateRoutes";
import { PublicRoutes } from "../PublicRoutes";
import { ProductsProvider } from "../../providers/ProductsContext.jsx";
import { CreateProductPage } from "../../pages/CreateProductPage/index.jsx";

export const RouterMain = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route
          path="/home"
          element={
            <ProductsProvider>
              <Home />
            </ProductsProvider>
          }
        />
        <Route
          path="/create"
          element={
            <ProductsProvider>
              <CreateProductPage />
            </ProductsProvider>
          }
        />
      </Route>

      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
