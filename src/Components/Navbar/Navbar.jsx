import { Link, useLocation } from "react-router-dom";
import Logo from "../../../public/assets/logo.png";
import Facebook from "/assets/NavBar Facebook.svg";
import Instagram from "/assets/NavBar Instagram.svg";
import Whatsapp from "/assets/whatsapp.svg";

const Navbar = () => {
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/registro" ||
    location.pathname === "/login";

  return (
    <nav className="bg-gradient-to-r from-[#ffffff] to-[#cb0c4f] p-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex text-white text-lg font-bold">
          <Link to="/">
            <img src={Logo} className="w-28 h-28 rounded-xl" alt="logo" />
          </Link>
        </div>

        {/* Mostrar solo en la página de inicio */}
        {isHomePage ? (
          <div className="flex flex-row gap-3">
            <img
              className="w-10 cursor-pointer bg-black rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              src={Facebook}
              alt="Facebook Navbar"
            />
            <img
              className="w-10 cursor-pointer rounded-full bg-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              src={Instagram}
              alt="Instagram Navbar"
            />
            <img
              className="w-10 cursor-pointer rounded-full bg-white border-black border-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              src={Whatsapp}
              alt="Whatsapp Navbar"
            />
            <div className="flex gap-x-2 ml-4">
              <Link to="/login">
                <button className="bg-white border-2 border-green-700 text-[#cb0c4f] font-semibold py-2 px-4 rounded">
                  Iniciar Sesión
                </button>
              </Link>
              <Link to="/registro">
                <button className="bg-white border-2 border-green-700 text-[#cb0c4f] font-semibold py-2 px-4 rounded">
                  Registro
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Mostrar solo en otras páginas */}
            <div className="flex flex-row gap-3">
              <img
                className="w-10 cursor-pointer bg-black rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                src={Facebook}
                alt="Facebook Navbar"
              />
              <img
                className="w-10 cursor-pointer rounded-full bg-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                src={Instagram}
                alt="Instagram Navbar"
              />
              <img
                className="w-10 cursor-pointer rounded-full bg-white border-black border-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                src={Whatsapp}
                alt="Whatsapp Navbar"
              />
            </div>
            <div className="space-x-4">
              <Link
                to="/quienes-somos"
                className="text-white hover:text-gray-300"
              >
                ¿Quiénes Somos?
              </Link>
              <Link to="/servicios" className="text-white hover:text-gray-300">
                Servicios
              </Link>
              <Link to="/noticias" className="text-white hover:text-gray-300">
                Noticias
              </Link>
              <Link
                to="/acceso-personal"
                className="text-white hover:text-gray-300"
              >
                Personal
              </Link>
              <Link
                to="/acceso-clientes"
                className="text-white hover:text-gray-300"
              >
                Clientes
              </Link>
              <Link to="/empleo" className="text-white hover:text-gray-300">
                Empleo
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
