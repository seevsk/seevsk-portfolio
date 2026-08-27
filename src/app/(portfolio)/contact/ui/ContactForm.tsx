"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage, type ContactFormState } from "../actions";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/data/translations";

const initialContactFormState: ContactFormState = { status: "idle" };

const SubmitButton = () => {
  const { pending } = useFormStatus();
  const { language } = useLanguage();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-[#891AD5] px-10 py-3 text-[15px] font-bold tracking-wide text-white transition-colors hover:bg-[#6e15aa] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto lg:py-2"
    >
      {pending
        ? t(translations.contact.submitting, language)
        : t(translations.contact.submit, language)}
    </button>
  );
};

export const ContactForm = () => {
  const { language } = useLanguage();
  const [state, formAction] = useActionState(
    sendContactMessage,
    initialContactFormState
  );

  return (
    <div className="rounded-lg bg-white text-[#101010] shadow-lg mx-4 my-4 p-7 sm:mx-6 sm:my-6 sm:p-8 md:mx-auto md:my-8 md:max-w-2xl md:p-10 lg:mx-20 lg:my-6 lg:max-w-none lg:p-8">
      <h3 className="text-3xl font-mono font-bold tracking-[-0.3px] sm:text-4xl lg:text-3xl">
        {t(translations.contact.formHeading1, language)}{" "}
        <span className="text-[#891AD5]">
          {t(translations.contact.formHeading2, language)}
        </span>
      </h3>
      <p
        className="mt-3 font-mono text-[15px] leading-6 text-slate-600 sm:text-base
      md:max-w-md lg:max-w-lg lg:mt-2"
      >
        {t(translations.contact.formIntro, language)}
      </p>

      <form action={formAction} className="mt-8 space-y-5 font-mono lg:mt-6 lg:space-y-4">
        {/* Honeypot: hidden from real visitors, bots that autofill every
            field will trip it. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="sr-only"
        />
        <input type="hidden" name="language" value={language} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold tracking-wide"
            >
              {t(translations.contact.nameLabel, language)}{" "}
              <span className="text-blue-900">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              defaultValue={state.values?.name}
              placeholder={t(translations.contact.namePlaceholder, language)}
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900 lg:py-2"
            />
            {state.fieldErrors?.name && (
              <p className="mt-1 text-xs text-red-600">{state.fieldErrors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold tracking-wide"
            >
              {t(translations.contact.emailLabel, language)}{" "}
              <span className="text-blue-900">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              defaultValue={state.values?.email}
              placeholder="tu@email.com"
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900 lg:py-2"
            />
            {state.fieldErrors?.email && (
              <p className="mt-1 text-xs text-red-600">{state.fieldErrors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold tracking-wide"
          >
            {t(translations.contact.subjectLabel, language)}{" "}
            <span className="text-blue-900">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            defaultValue={state.values?.subject}
            placeholder={t(translations.contact.subjectPlaceholder, language)}
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900 lg:py-2"
          />
          {state.fieldErrors?.subject && (
            <p className="mt-1 text-xs text-red-600">{state.fieldErrors.subject}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold tracking-wide"
          >
            {t(translations.contact.messageLabel, language)}{" "}
            <span className="text-blue-900">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            defaultValue={state.values?.message}
            placeholder={t(translations.contact.messagePlaceholder, language)}
            className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900 lg:h-24"
          />
          {state.fieldErrors?.message && (
            <p className="mt-1 text-xs text-red-600">{state.fieldErrors.message}</p>
          )}
        </div>

        {state.status !== "idle" && state.message && (
          <p
            className={`text-sm font-semibold ${
              state.status === "success" ? "text-green-700" : "text-red-600"
            }`}
            role="status"
          >
            {state.message}
          </p>
        )}

        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};
