import { z } from "zod";

export const createProductFormSchema = z.object({
  name: z.string().min(3, { message: "Coloque todo o nome do produto" }),
  description: z.string(),
  price: z.string().min(1),
  stock: z.string().min(1),
});
