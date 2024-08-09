import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, "Campo obrigatorio."),
  taxNumber: z
    .string()
    .min(1, "Campo obrigatorio.")
    .regex(
      /[(^(\d{2}.\d{3}.\d{3}/\d{4}-\d{2})|(\d{14})$)|(^(\d{3}.\d{3}.\d{3}-\d{2})|(\d{11})$)]/,
      "CPF ou CNPJ invalido"
    ),
  mail: z
    .string()
    .min(1, "Campo obrigatorio.")
    .email("Digite um email valido."),
  phone: z
    .string()
    .min(1, "Campo obrigatorio.")
    .regex(
      /^(1[1-9]|2[12478]|3[1-5]|3[7-8]|4[1-9]|5[1]|5[3-5]|6[1-9]|7[134579]|8[1-9]|9[1-9])9[0-9]{8}$/,
      "Numero de telefone invalido"
    ),
  password: z.string().min(6, "Minimo de 6 caracteres."),
});
