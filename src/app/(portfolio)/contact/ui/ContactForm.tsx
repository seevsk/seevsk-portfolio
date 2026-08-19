export const ContactForm = () => {
  return (
    <div className="rounded-lg bg-white text-[#101010] shadow-lg mx-4 my-4 p-7 sm:mx-6 sm:my-6 sm:p-8 md:mx-auto md:my-8 md:max-w-2xl md:p-10 lg:mx-20 lg:my-6 lg:max-w-none lg:p-8">
      <h3 className="text-3xl font-mono font-bold tracking-[-0.3px] sm:text-4xl lg:text-3xl">
        Cuéntame sobre <span className="text-[#891AD5]">tu proyecto</span>
      </h3>
      <p
        className="mt-3 font-mono text-[15px] leading-6 text-slate-600 sm:text-base
      md:max-w-md lg:max-w-lg lg:mt-2"
      >
        Cuéntame brevemente en qué estás pensando y te responderé personalmente
        para ver cómo puedo ayudarte.
      </p>

      <form className="mt-8 space-y-5 font-mono lg:mt-6 lg:space-y-4">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-4">
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
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900 lg:py-2"
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
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900 lg:py-2"
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
            placeholder="Ej: E-commerce online para mi empresa de ropa"
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900 lg:py-2"
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
            className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-[#101010] placeholder:text-slate-400 outline-none focus:border-blue-900 lg:h-24"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full rounded-md bg-[#891AD5] px-10 py-3 text-[15px] font-bold tracking-wide text-white transition-colors hover:bg-[#6e15aa] sm:w-auto lg:py-2"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};
