import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre completo.")
    .max(80, "El nombre es demasiado largo."),
  email: z
    .string()
    .trim()
    .min(1, "Ingresa tu email.")
    .email("Ingresa un email valido."),
  subject: z
    .string()
    .trim()
    .min(5, "Cuentame brevemente el asunto.")
    .max(120, "El asunto es demasiado largo."),
  message: z
    .string()
    .trim()
    .min(20, "El mensaje es muy corto, dame un poco mas de contexto.")
    .max(2000, "El mensaje es demasiado largo."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormField = keyof ContactFormValues;
