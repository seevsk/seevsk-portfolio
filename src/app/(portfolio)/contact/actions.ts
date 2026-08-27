"use server";

import { Resend } from "resend";
import {
  getContactFormSchema,
  type ContactFormField,
} from "@/lib/validations/contact";
import type { Language } from "@/context/LanguageContext";
import { translations, t } from "@/data/translations";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<ContactFormField, string>>;
  values?: Partial<Record<ContactFormField, string>>;
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const language: Language = formData.get("language") === "en" ? "en" : "es";

  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  // Honeypot: real visitors never see or fill this hidden field. If it
  // comes back non-empty, silently report success so the bot moves on.
  if (formData.get("company")) {
    return {
      status: "success",
      message: t(translations.contactActions.sendSuccess, language),
    };
  }

  const parsed = getContactFormSchema(language).safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactFormField;
      if (!fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return {
      status: "error",
      message: t(translations.contactActions.fieldErrorsPrompt, language),
      fieldErrors,
      values: raw,
    };
  }

  const { name, email, subject, message } = parsed.data;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!toEmail || !apiKey) {
    console.error(
      "Contact form is misconfigured: missing CONTACT_TO_EMAIL or RESEND_API_KEY."
    );
    return {
      status: "error",
      message: t(translations.contactActions.formUnavailable, language),
      values: raw,
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio de Sebastian Salas <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `Nuevo contacto: ${subject}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error", error);
      return {
        status: "error",
        message: t(translations.contactActions.sendFailed, language),
        values: raw,
      };
    }
  } catch (error) {
    console.error("Failed to send contact email", error);
    return {
      status: "error",
      message: t(translations.contactActions.sendFailed, language),
      values: raw,
    };
  }

  return {
    status: "success",
    message: t(translations.contactActions.sendSuccess, language),
  };
}
