import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useContext } from "react";
import { ProductsContext } from "../../../providers/ProductsContext";
import { api } from "../../../services";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductFormSchema } from "./createProductForm.schema";

export const CreateProductForm = () => {
  const onSubmit = (formData) => {
    createProduct(formData);
  };

  const token = localStorage.getItem("@t-alpha:token");

  const createProduct = async (payload) => {
    try {
      const { data } = await api.post("/products/create-product", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Produto criado com sucesso.");
    } catch (error) {
      console.log(error);
    }
  };
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductFormSchema),
  });
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome"
          type="text"
          error={errors.name}
          {...register("name")}
        />
        <Input
          label="Descrição"
          type="text"
          error={errors.description}
          {...register("description")}
        />
        <Input
          label="Preço"
          type="number"
          error={errors.price}
          {...register("price")}
        />
        <Input
          label="Estoque"
          type="number"
          error={errors.stock}
          {...register("stock")}
        />

        <button type="submit">Criar Produto</button>
      </form>
    </div>
  );
};
