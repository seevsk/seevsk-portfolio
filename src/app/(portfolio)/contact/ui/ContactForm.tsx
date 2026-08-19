export const ContactForm = () => {
  return (
    <div className="w-[95%] mx-auto px-4 py-12 bg-white text-[#101010] shadow-lg sm:max-w-md sm:p-8 md:max-w-lg md:rounded-lg md:p-10 lg:w-full lg:max-w-none lg:mx-0 lg:my-16">
      <h3 className="text-3xl font-mono font-bold tracking-[-0.3px] sm:text-4xl">
        Cuéntame sobre tu proyecto
      </h3>
      <p className="mt-3 font-mono text-[15px] leading-6 text-slate-600 sm:text-base">
        Cuéntame brevemente en qué estás pensando y te responderé personalmente
        para ver cómo puedo ayudarte.
      </p>

      <form className="mt-8 space-y-5 font-mono">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold tracking-wide"
            >
              Nombre <span className="text-blue-900">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Tu nombre"
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold tracking-wide"
            >
              Email <span className="text-blue-900">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tu@email.com"
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold tracking-wide"
          >
            Asunto <span className="text-blue-900">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="E-commerce online para mi empresa de ropa"
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold tracking-wide"
          >
            Mensaje <span className="text-blue-900">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Cuéntame brevemente qué necesitas, en qué etapa estás y para cuándo te gustaría tenerlo."
            className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full rounded-md bg-blue-900 px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blue-800 sm:w-auto"
          >
            Solicitar Propuesta
          </button>
        </div>
      </form>
    </div>
  );
};
