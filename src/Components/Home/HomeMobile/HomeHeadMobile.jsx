import { Link } from "react-router-dom";
import Banner from "/assets/banner.svg";
// import Info from "/assets/landing/info.svg";

const HomeHeadMobile = () => {
  return (
    <div className="flex flex-col w-full items-center  bg-gradient-to-l from-green-900 to-[#ffff] h-[100vh] text-nowrap">
      <div className="flex flex-row items-center justify-center gap-4 w-full mx-auto bg-gradient-to-r from-[#ffffff] to-[#ad4268] rounded-b-[20px]">
        <Link to="/login/select-user">
          <button className="font-bold bg-green-500 rounded-full text-white text-xs px-7 py-2 mx-3 my-2">
            INICIAR SESIÓN
          </button>
        </Link>
        <Link to="/about">
          <button className="font-bold bg-yellow-500 rounded-full text-white text-xs sm:px-7 px-2 py-2 mx-3 my-2">
            CONÓCENOS
          </button>
        </Link>
      </div>
      <div className="text-white tracking-wider mx-auto w-full mt-[10%] sm:mt-[5%] h-full flex flex-col">
        <div className="text-xl text-[#cb0c4f] opacity-50 flex flex-row text-left mr-auto ml-[10%] md:ml-[25%]">
          Bienvenidos a
        </div>
        <div className="font-bold text-[#cb0c4f] sm:text-4xl text-2xl flex flex-row text-left mr-auto ml-[10%] md:ml-[25%]">
          SPA SENTIRSE BIEN
        </div>
        <div className="flex flex-row border-b-[#cb0c4f] border-b-2 w-fit gap-2 items-center text-left mr-auto ml-[10%] md:ml-[25%]">
          <div className="text-xl text-[#cb0c4f] sm:text-2xl ">De la</div>
          <div className="text-2xl text-[#cb0c4f] font-bold sm:text-4xl">
            Dra. Ana Felicidad
          </div>
        </div>
        <div className="py-5 text-wrap text-[#cb0c4f] min-w-screen text-center my-[10%] mx-[15%] border border-dashed border-[#cb0c4f] border-y-2 border-x-0 font-light text-lg">
          Plataforma especializada en{" "}
          <b className="font-bold text-[#cb0c4f] text-lg">servicios de SPA</b>,
          diseñada para conectar a{" "}
          <b className="font-bold text-lg">los clientes</b> y futuros clientes
          con una amplia gama de servicios profesionales de SPA, desde Masajes
          hasta Belleza y Tratamientos Faciales.
        </div>
        <div className="flex flex-col mx-0  items-center">
          <img src={Banner} className="sm:w-96 sm:h-96" alt="No Profesional" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeadMobile;
