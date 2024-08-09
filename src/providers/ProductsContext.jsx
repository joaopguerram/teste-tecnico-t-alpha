import { createContext, useEffect, useState } from "react";
import { api } from "../services";
import { toast } from "react-toastify";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  console.log(productsList);

  const token = localStorage.getItem("@t-alpha:token");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("/products/get-all-products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductsList(data.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const createProduct = async (payload) => {
    try {
      const token = localStorage.getItem("@t-alpha:token");
      const { data } = await api.post("/products/create-product", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProductsList([...productsList, data]);
      toast.success("Produto criado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const token = localStorage.getItem("@t-alpha:token");

      await api.delete(`/products/delete-product/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const filteredProducts = productsList.filter(
        ({ id }) => id !== productId
      );
      setProductsList(filteredProducts);
      toast.success("Produto deletado com sucesso.");
    } catch (error) {}
  };

  return (
    <ProductsContext.Provider
      value={{ productsList, createProduct, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
