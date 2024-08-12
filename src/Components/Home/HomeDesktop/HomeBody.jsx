import SPA from "/assets/spa.svg";

export const HomeBody = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full h-[700px]">
        <img
          src={SPA}
          alt="Banner Desktop"
          className="object-cover w-[28%] max-w-[629px] h-[85%] max-h-[694px] float-left"
        />
        <div className="flex flex-col mx-6 my-28 max-w-screen justify-left">
          <span className="text-[#cb0c4f] text-2xl mb-5 font-medium font-['Inter'] uppercase tracking-wide">
            <b className="font-extrabold">Conoce más</b> de nosotros
          </span>
          <p className="text-wrap text-[#cb0c4f] text-lg mb-5">
            En nuestro spa, ofrecemos una variedad de tratamientos diseñados
            para tu <b className="text-xl">bienestar y belleza</b>.
          </p>
          <p className="text-wrap text-[#cb0c4f] text-lg mb-5">
            Nuestros masajes incluyen opciones anti-estrés, descontracturantes,
            con piedras calientes y circulatorios, todos diseñados para aliviar
            tensiones y revitalizar tu cuerpo.
          </p>
          <p className="text-wrap text-[#cb0c4f] text-lg mb-5">
            En belleza, realizamos lifting de pestañas, depilación facial y
            tratamientos para manos y pies que garantizan un cuidado completo y
            radiante. Nuestros tratamientos faciales incluyen microexfoliación
            con punta de diamante, limpieza profunda e hidratación, y
            criofrecuencia para un efecto lifting instantáneo. Para el cuerpo,
            ofrecemos VelaSlim para reducir la circunferencia y combatir la
            celulitis, DermoHealth para estimular la microcirculación,
            criofrecuencia para reafirmar la piel, y ultracavitación para la
            reducción de grasa
            <b>
              Ven a nuestro spa y disfruta de una experiencia de alta calidad
              adaptada a tus necesidades.
            </b>
          </p>
          <p className="items-center text-[#cb0c4f] self-center text-center font-light text-2xl text-wrap mx-[15%] my-5">
            <b className="font-extrabold">Únase a nosotros</b> en este viaje
            hacia{" "}
            <b className="font-extrabold">
              un futuro más saludable y eficiente
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};
