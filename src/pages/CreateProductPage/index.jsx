import { Link } from "react-router-dom";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { CreateProductForm } from "../../components/forms/CreateProductForm";

export const CreateProductPage = () => {
  return (
    <>
      <DefaultTemplate>
        <div>
          <Link to="/home">Voltar</Link>
          <h2>Criar Produto</h2>
        </div>
        <CreateProductForm />
      </DefaultTemplate>
    </>
  );
};
