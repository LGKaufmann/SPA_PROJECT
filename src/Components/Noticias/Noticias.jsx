const Noticias = () => {
  return (
    <section
      id="noticias"
      className="py-16 min-h-screen  bg-gradient-to-r from-green-700 to-[#cb0c4f]"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Últimas Noticias</h2>
        <p className="text-lg text-white mb-8">
          Mantente informado sobre nuestras últimas ofertas, eventos especiales
          y noticias importantes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Screenshot_2022-04-25_3.49.10_PM.width-1000.format-webp.webp"
              alt="Noticia 1"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mb-2 text-black">
              Noticia Destacada 1
            </h3>
            <p className="text-gray-700 mb-4">
              Resumen breve de la noticia destacada que captura la esencia del
              contenido y llama a la acción.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Leer más
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Screenshot_2022-04-25_3.49.10_PM.width-1000.format-webp.webp"
              alt="Noticia 2"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mb-2">Noticia Destacada 2</h3>
            <p className="text-gray-700 mb-4">
              Resumen breve de la noticia destacada que captura la esencia del
              contenido y llama a la acción.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Leer más
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Screenshot_2022-04-25_3.49.10_PM.width-1000.format-webp.webp"
              alt="Noticia 3"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold mb-2 text-black">
              Noticia Destacada 3
            </h3>
            <p className="text-gray-700 mb-4">
              Resumen breve de la noticia destacada que captura la esencia del
              contenido y llama a la acción.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Leer más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Noticias;
