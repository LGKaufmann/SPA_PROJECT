const QuienesSomos = () => {
  return (
    <section
      id="quienes-somos"
      className="py-16 min-h-screen  bg-gradient-to-r from-green-700 to-[#cb0c4f]"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">¿Quiénes Somos?</h2>
        <p className="text-lg text-white mb-8">
          En nuestro spa, nos dedicamos a ofrecer bienestar y relajación a
          través de tratamientos personalizados y un equipo de profesionales
          altamente capacitados.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://serapool.fra1.cdn.digitaloceanspaces.com/media/4752/1700134437065.png"
              alt="Nuestro Equipo"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Nuestro Equipo
            </h3>
            <p className="text-gray-700 mb-4">
              Contamos con un equipo de expertos en bienestar y relajación,
              comprometidos con tu salud y confort.
            </p>
          </div>

          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://expospa.wordpress.com/wp-content/uploads/2016/11/spa-toulouse-centre.jpg?w=680"
              alt="Nuestros Servicios"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl text-gray-700 font-semibold mb-2">
              Nuestros Servicios
            </h3>
            <p className="text-gray-700 mb-4">
              Ofrecemos una variedad de tratamientos diseñados para satisfacer
              tus necesidades de bienestar.
            </p>
          </div>

          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://www.de-paseo.com/queretaro/wp-content/uploads/2024/08/casa-del-naranjo-spa-destacada.jpg"
              alt="Nuestra Misión"
              className="w-full h-48 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-2xl text-gray-700 font-semibold mb-2">
              Nuestra Misión
            </h3>
            <p className="text-gray-700 mb-4">
              Nuestra misión es proporcionar un ambiente de tranquilidad y
              rejuvenecimiento para todos nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
