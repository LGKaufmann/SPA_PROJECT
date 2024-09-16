import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../public/assets/logo.png";
import Facebook from "/assets/NavBar Facebook.svg";
import Instagram from "/assets/NavBar Instagram.svg";
import Whatsapp from "/assets/whatsapp.svg";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/userAction";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  console.log(user);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/registro" ||
    location.pathname === "/loginPersonal" ||
    location.pathname === "/login";

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-[#ffffff] to-[#cb0c4f] p-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex text-white text-lg font-bold">
          <Link
            to={
              !token
                ? "/"
                : user?.email === "admin@gmail.com"
                ? "/admin"
                : "/home"
            }
          >
            <img src={Logo} className="w-28 h-28 rounded-xl" alt="logo" />
          </Link>
        </div>

        {/* Mostrar solo en la página de inicio */}
        {isHomePage ? (
          <div className="flex flex-row gap-3">
            <a href="https://www.facebook.com">
              <img
                className="w-10 cursor-pointer bg-black rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                src={Facebook}
                alt="Facebook Navbar"
              />
            </a>
            <a href="https://www.instagram.com">
              <img
                className="w-10 cursor-pointer rounded-full bg-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                src={Instagram}
                alt="Instagram Navbar"
              />
            </a>
            <a href="https://wa.me/1234567890">
              <img
                href="https://wa.me/1234567890"
                className="w-10 cursor-pointer rounded-full bg-white border-black border-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                src={Whatsapp}
                alt="Whatsapp Navbar"
              />
            </a>
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
              <a href="https://www.facebook.com">
                <img
                  className="w-10 cursor-pointer bg-black rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                  src={Facebook}
                  alt="Facebook Navbar"
                />
              </a>
              <a href="https://www.instagram.com">
                <img
                  className="w-10 cursor-pointer rounded-full bg-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                  src={Instagram}
                  alt="Instagram Navbar"
                />
              </a>
              <a href="https://wa.me/1234567890">
                <img
                  href="https://wa.me/1234567890"
                  className="w-10 cursor-pointer rounded-full bg-white border-black border-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                  src={Whatsapp}
                  alt="Whatsapp Navbar"
                />
              </a>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <Link
                to="/quienes-somos"
                className="text-white hover:text-gray-300"
              >
                ¿Quiénes Somos?
              </Link>

              <Link to="/noticias" className="text-white hover:text-gray-300">
                Noticias
              </Link>

              <Link to="/empleo" className="text-white hover:text-gray-300">
                Empleo
              </Link>
              <Link to="/opiniones" className="text-white hover:text-gray-300">
                Opiniones
              </Link>
              <div>
                <span
                  onClick={handleLogout}
                  className="bg-inherit text-white hover:text-gray-300 font-medium cursor-pointer"
                >
                  Cerrar sesion
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
