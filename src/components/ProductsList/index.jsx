import { useContext } from "react";
import { ProductsContext } from "../../providers/ProductsContext";
import { ProductCard } from "./ProductCard";

export const ProductsList = () => {
  const { productsList } = useContext(ProductsContext);

  return (
    <div>
      <div>
        <h1>Lista de Produtos</h1>
        <ul>
          {productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};
