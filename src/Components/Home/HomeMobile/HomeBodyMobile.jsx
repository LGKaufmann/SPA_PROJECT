import SPA from "/assets/spa.svg";

const HomeBodyMobile = () => {
  return (
    <div className="bg-white h-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center h-full mt-5 text-center">
        <span className="text-[#cb0c4f] text-2xl font-black font-['Inter'] uppercase tracking-wide">
          Conoce más
          <br />
        </span>
        <span className="text-[#cb0c4f] text-2xl font-semibold font-['Inter'] uppercase tracking-wide">
          {" "}
          de nosotros
        </span>
        <p className="text-[#cb0c4f] text-lg px-9 justify-center text-center my-5">
          En nuestro spa, ofrecemos una variedad de tratamientos diseñados para
          tu <b className="text-xl">bienestar y belleza</b>. Nuestros masajes
          incluyen opciones anti-estrés, descontracturantes, con piedras
          calientes y circulatorios, todos diseñados para aliviar tensiones y
          revitalizar tu cuerpo.
        </p>
        <img src={SPA} alt="Banner Mobile" className="w-96 object-cover" />
        <p className="text-[#cb0c4f] text-lg px-9 justify-center text-center my-5">
          En belleza, realizamos lifting de pestañas, depilación facial y
          tratamientos para manos y pies que garantizan un cuidado completo y
          radiante. Nuestros tratamientos faciales incluyen limpieza profunda e
          hidratación, y criofrecuencia para un efecto lifting instantáneo. Para
          el cuerpo ofrecemos desde DermoHealth para estimular la
          microcirculación hasta criofrecuencia para reafirmar la piel, y
          ultracavitación para la reducción de grasa y mucho mas! Ven a nuestro
          spa y disfruta de una experiencia de alta calidad adaptada a tus
          necesidades.
        </p>
      </div>
      <div className="flex flex-col w-full h-full my-5 text-center">
        <span className="text-3xl mb-5 text-[#cb0c4f]">
          <b>Únase a nosotros</b>
          <br />
          en este viaje hacia
          <br />
          <b>
            un futuro más
            <br />
            saludable y eficiente
          </b>
        </span>
      </div>
    </div>
  );
};

export default HomeBodyMobile;
