import { z } from "zod";
import type { Language } from "@/context/LanguageContext";
import { translations, t } from "@/data/translations";

export const getContactFormSchema = (language: Language) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(2, t(translations.contactValidation.nameRequired, language))
      .max(80, t(translations.contactValidation.nameTooLong, language)),
    email: z
      .string()
      .trim()
      .min(1, t(translations.contactValidation.emailRequired, language))
      .email(t(translations.contactValidation.emailInvalid, language)),
    subject: z
      .string()
      .trim()
      .min(5, t(translations.contactValidation.subjectTooShort, language))
      .max(120, t(translations.contactValidation.subjectTooLong, language)),
    message: z
      .string()
      .trim()
      .min(20, t(translations.contactValidation.messageTooShort, language))
      .max(2000, t(translations.contactValidation.messageTooLong, language)),
  });

export type ContactFormValues = z.infer<
  ReturnType<typeof getContactFormSchema>
>;

export type ContactFormField = keyof ContactFormValues;
