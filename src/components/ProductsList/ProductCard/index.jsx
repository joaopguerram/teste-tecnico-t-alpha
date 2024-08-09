import { useContext, useEffect, useState } from "react";
import { api } from "../../../services";
import { ProductsContext } from "../../../providers/ProductsContext";

export const ProductCard = ({ product }) => {
  const { deleteProduct } = useContext(ProductsContext);

  return (
    <li>
      <div>
        <button onClick={() => deleteProduct(product.id)}>X</button>
        <button>Editar</button>
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <p>{product.price}</p>
    </li>
  );
};
