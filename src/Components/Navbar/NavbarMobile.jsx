import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../public/assets/logo.png";
import Facebook from "/assets/NavBar Facebook.svg";
import Instagram from "/assets/NavBar Instagram.svg";
import Whatsapp from "/assets/whatsapp.svg";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userAction";

const NavbarMobile = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "/registro" ||
    location.pathname === "/login";

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <nav className="flex items-center lg:hidden w-full h-20 justify-evenly px-4 bg-gradient-to-r from-[#ffffff] to-[#cb0c4f]">
      <Link to="/">
        <div className="flex flex-row justify-evenly items-center gap-2">
          <img className="w-20 h-16" src={Logo} alt="Logo" />
        </div>
      </Link>
      <div className="mx-2 flex items-center self-center w-0.5 h-[41px] mix-blend-overlay bg-white rounded" />
      <div className="flex gap-3 items-center justify-evenly">
        <img
          className="w-8 bg-black rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          src={Facebook}
          alt="Facebook Navbar"
        />
        <img
          className="w-8 bg-white border-black border-2 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          src={Whatsapp}
          alt="Whatsapp Navbar"
        />
        <img
          className="w-8 rounded-full bg-black shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
          src={Instagram}
          alt="Instagram Navbar"
        />
      </div>
      {!isHomePage && (
        <div className="flex ml-3">
          <button onClick={handleLogout} className="text-xs text-nowrap">
            Cerrar sesion
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
