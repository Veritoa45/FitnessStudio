import LineaCorta from "./LineaCorta";

const Contacto = () => {
  return (
    <section className="mt-[60px]">
      <LineaCorta />
      <h2 className="text-center text-2xl italic">Contactanos</h2>
      <LineaCorta />
      <form
        action="#"
        className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md space-y-8"
      >
        <div>
          <label htmlFor="email" className="block mb-4 text-base text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white shadow-sm-light text-base rounded-lg block w-full p-2.5 outline-none"
            placeholder="email@ejemplo.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-4 text-base text-gray-300"
          >
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            className="block p-2.5 w-full text-base rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white shadow-sm-light outline-none"
            placeholder="¿En qué podemos ayudarte?"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-4 text-base text-gray-300 "
          >
            Mensaje
          </label>
          <textarea
            id="message"
            rows="6"
            className="block p-2.5 w-full text-base outline-none rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="Deje su mensaje..."
          />
        </div>
        <button
          type="submit"
          className="block mx-auto py-3 px-5 text-base text-center text-white rounded-lg bg-gray-700 cursor-pointer hover:bg-gray-800"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
