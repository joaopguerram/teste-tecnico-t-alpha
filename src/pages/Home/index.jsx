import { useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { ProductsList } from "../../components/ProductsList";
import { CreateProductForm } from "../../components/forms/CreateProductForm";
import Modal from "react-modal";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <DefaultTemplate>
      <div className="home">
        <Link to="/create">Adicionar Produto</Link>

        <ProductsList />
      </div>
    </DefaultTemplate>
  );
};
