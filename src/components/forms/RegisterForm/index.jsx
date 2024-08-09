import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { registerFormSchema } from "./registerForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const onSubmit = (formData) => {
    createUser(formData);
  };
  const navigate = useNavigate();

  const createUser = async (payload) => {
    try {
      const { data } = await api.post("/auth/register", payload);

      toast.success("Usuario cadastrado com sucesso!");

      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={"Nome"}
        type="text"
        placeholder="Digite seu nome"
        error={errors.name}
        {...register("name")}
      />

      <Input
        label={"CPF/CNPJ"}
        type="text"
        placeholder="Digite seu CPF ou CNPJ"
        error={errors.taxNumber}
        {...register("taxNumber")}
      />

      <Input
        label={"E-mail"}
        type="email"
        placeholder="Digite seu email"
        error={errors.email}
        {...register("mail")}
      />

      <Input
        label={"Telefone"}
        type="text"
        placeholder="Digite seu telefone"
        error={errors.phone}
        {...register("phone")}
      />

      <Input
        label={"Senha"}
        type="password"
        placeholder="Digite sua senha"
        error={errors.password}
        {...register("password")}
      />

      <button type="submit">Criar conta</button>
    </form>
  );
};
