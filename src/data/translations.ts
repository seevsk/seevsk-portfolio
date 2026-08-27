import type { Language } from "@/context/LanguageContext";

type Dict = Record<Language, string>;

export const translations = {
  nav: {
    home: { es: "Inicio", en: "Home" },
    experience: { es: "Experiencia", en: "Experience" },
    projects: { es: "Proyectos", en: "Projects" },
    contact: { es: "Contacto", en: "Contact" },
    copyright: {
      es: "© 2026. Hecho por Sebastian Salas. Todos los derechos reservados.",
      en: "© 2026. Made by Sebastian Salas. All rights reserved.",
    },
    languageLabel: { es: "Idioma", en: "Language" },
  },
  footer: {
    copyrightLine1: {
      es: "© 2026. Hecho por Sebastian Salas.",
      en: "© 2026. Made by Sebastian Salas.",
    },
    copyrightLine2: {
      es: "Todos los derechos reservados.",
      en: "All rights reserved.",
    },
  },
  hero: {
    role: {
      es: "Desarrollador de Software Full-Stack & Aplicaciones Móviles",
      en: "Full-Stack Software Developer & Mobile App Developer",
    },
    toolsHeading: {
      es: "Herramientas y tecnologías",
      en: "Tools and technologies",
    },
  },
  skills: {
    heading: { es: "Áreas de Experiencia", en: "Areas of Experience" },
  },
  filterNav: {
    all: { es: "Todo", en: "All" },
    web: { es: "Desarrollo Web", en: "Web Development" },
    mobile: { es: "Desarrollo Móvil", en: "Mobile Development" },
  },
  projectCard: {
    showProject: { es: "Mostrar proyecto", en: "Show project" },
  },
  projectDetail: {
    home: { es: "Inicio", en: "Home" },
    portfolio: { es: "Portafolio", en: "Portfolio" },
    project: { es: "Proyecto", en: "Project" },
    technologies: { es: "Tecnologías", en: "Technologies" },
    openProject: { es: "Abrir Proyecto", en: "Open Project" },
    nextProjectLabel: { es: "Siguiente Proyecto", en: "Next Project" },
    prevProjectAria: { es: "Proyecto anterior", en: "Previous project" },
    nextProjectAria: { es: "Siguiente proyecto", en: "Next project" },
    footerLine1: {
      es: "© 2026. Hecho por Sebastian Salas.",
      en: "© 2026. Made by Sebastian Salas.",
    },
    footerLine2: {
      es: "Todos los derechos reservados.",
      en: "All rights reserved.",
    },
    scrollToTopAria: { es: "Volver arriba", en: "Back to top" },
  },
  contact: {
    formHeading1: { es: "Cuéntame sobre", en: "Tell me about" },
    formHeading2: { es: "tu proyecto", en: "your project" },
    formIntro: {
      es: "Cuéntame brevemente en qué estás pensando y te responderé personalmente para ver cómo puedo ayudarte.",
      en: "Briefly tell me what you have in mind and I'll get back to you personally to see how I can help.",
    },
    nameLabel: { es: "Nombre", en: "Name" },
    namePlaceholder: { es: "Tu nombre", en: "Your name" },
    emailLabel: { es: "Email", en: "Email" },
    subjectLabel: { es: "Asunto", en: "Subject" },
    subjectPlaceholder: {
      es: "Ej: E-commerce online para mi empresa de ropa",
      en: "E.g: Online store for my clothing brand",
    },
    messageLabel: { es: "Mensaje", en: "Message" },
    messagePlaceholder: {
      es: "Cuéntame brevemente qué necesitas, en qué etapa estás y para cuándo te gustaría tenerlo.",
      en: "Briefly tell me what you need, what stage you're at, and when you'd like it ready.",
    },
    submit: { es: "Enviar Mensaje", en: "Send Message" },
    submitting: { es: "Enviando...", en: "Sending..." },
    infoHeading: {
      es: "Disponible para proyectos, estas son mis redes sociales",
      en: "Available for projects — here are my social channels",
    },
    infoParagraph: {
      es: "Si tu proyecto requiere dedicación y resultados, estaré dispuesto a conversar. Puedes contactarme personalmente por los siguientes medios.",
      en: "If your project needs dedication and results, I'm glad to talk it through. You can reach me directly through any of the channels below.",
    },
  },
  contactValidation: {
    nameRequired: {
      es: "Ingresa tu nombre completo.",
      en: "Enter your full name.",
    },
    nameTooLong: {
      es: "El nombre es demasiado largo.",
      en: "The name is too long.",
    },
    emailRequired: { es: "Ingresa tu email.", en: "Enter your email." },
    emailInvalid: {
      es: "Ingresa un email válido.",
      en: "Enter a valid email.",
    },
    subjectTooShort: {
      es: "Cuéntame brevemente el asunto.",
      en: "Briefly tell me the subject.",
    },
    subjectTooLong: {
      es: "El asunto es demasiado largo.",
      en: "The subject is too long.",
    },
    messageTooShort: {
      es: "El mensaje es muy corto, dame un poco más de contexto.",
      en: "The message is too short, give me a bit more context.",
    },
    messageTooLong: {
      es: "El mensaje es demasiado largo.",
      en: "The message is too long.",
    },
  },
  contactActions: {
    fieldErrorsPrompt: {
      es: "Revisa los campos marcados.",
      en: "Please check the marked fields.",
    },
    formUnavailable: {
      es: "El formulario no está disponible en este momento.",
      en: "The form is not available right now.",
    },
    sendFailed: {
      es: "No se pudo enviar el mensaje. Intenta de nuevo en unos minutos o escríbeme directo por WhatsApp/LinkedIn.",
      en: "The message could not be sent. Try again in a few minutes or message me directly on WhatsApp/LinkedIn.",
    },
    sendSuccess: {
      es: "Mensaje enviado. Te responderé pronto.",
      en: "Message sent. I'll get back to you soon.",
    },
  },
} satisfies Record<string, Record<string, Dict>>;

export const t = (dict: Dict, language: Language) => dict[language];
