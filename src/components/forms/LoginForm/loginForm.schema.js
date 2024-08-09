import { z } from "zod";

export const loginFormSchema = z.object({
  taxNumber: z
    .string()
    .min(1, "Campo obrigatorio.")
    .regex(
      /[(^(\d{2}.\d{3}.\d{3}/\d{4}-\d{2})|(\d{14})$)|(^(\d{3}.\d{3}.\d{3}-\d{2})|(\d{11})$)]/,
      "CPF ou CNPJ invalido"
    ),
  password: z.string().min(6, "Minimo de 6 caracteres."),
});
