import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginForm.schema";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const onSubmit = (formData) => {
    createUser(formData);
  };

  const navigate = useNavigate();

  const createUser = async (payload) => {
    try {
      const { data } = await api.post("/auth/login", payload);

      localStorage.setItem("@t-alpha:token", data.data.token);

      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={"CPF/CNPJ"}
        type="text"
        placeholder="Digite seu CPF ou CNPJ"
        error={errors.taxNumber}
        {...register("taxNumber")}
      />
      <Input
        label={"Senha"}
        type="password"
        placeholder="Digite sua senha"
        error={errors.password}
        {...register("password")}
      />

      <button type="submit">Entrar</button>
    </form>
  );
};
