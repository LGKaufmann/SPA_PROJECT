import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../public/assets/logo.png";
import Facebook from "/assets/Facebook Navbar.svg";
import Instagram from "/assets/Instagram Navbar.svg";
import Whatsapp from "/assets/Whatsapp.svg";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/userAction";

const NavbarMobile = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
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

  const iconStyle = "w-8 h-8 cursor-pointer";
  const iconColorStyle = {
    filter:
      "invert(29%) sepia(72%) saturate(3094%) hue-rotate(327deg) brightness(92%) contrast(93%)",
  };

  return (
    <nav className="bg-gradient-to-r from-[#E486A7] to-[#79B250] py-2 px-4 shadow-lg">
      <div className="flex justify-between items-center">
        <Link
          to={
            !token
              ? "/"
              : user?.email === "admin@gmail.com"
              ? "/admin"
              : "/home"
          }
        >
          <img
            src={Logo}
            className="max-h-12 w-auto"
            alt="logo"
            loading="lazy"
          />
        </Link>

        <div className="flex items-center gap-2">
          <a href="https://www.facebook.com">
            <img
              className={iconStyle}
              src={Facebook}
              alt="Facebook"
              style={iconColorStyle}
            />
          </a>
          <a href="https://www.instagram.com">
            <img
              className={iconStyle}
              src={Instagram}
              alt="Instagram"
              style={iconColorStyle}
            />
          </a>
          <a href="https://wa.me/1234567890">
            <img
              className={iconStyle}
              src={Whatsapp}
              alt="Whatsapp"
              style={iconColorStyle}
            />
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        {isHomePage ? (
          <div className="flex gap-2">
            <Link to="/login">
              <button className="bg-[#cb0c4f] text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 hover:shadow-lg">
                Iniciar Sesión
              </button>
            </Link>
            <Link to="/registro">
              <button className="bg-[#cb0c4f] text-white font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105 hover:shadow-lg">
                Registro
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex space-x-3">
            <Link
              to="/quienes-somos"
              className="text-[#cb0c4f] hover:text-gray-300"
            >
              ¿Quiénes Somos?
            </Link>
            <Link to="/noticias" className="text-[#cb0c4f] hover:text-gray-300">
              Noticias
            </Link>
            <Link to="/empleo" className="text-[#cb0c4f] hover:text-gray-300">
              Empleo
            </Link>
            <Link
              to="/opiniones"
              className="text-[#cb0c4f] hover:text-gray-300"
            >
              Opiniones
            </Link>
            <span
              onClick={handleLogout}
              className="text-[#cb0c4f] hover:text-gray-300 cursor-pointer"
            >
              Cerrar Sesión
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarMobile;
