import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";
import Registro from "./Components/Registro/Registro";
import Login from "./Components/Login/Login";
import { Landing } from "./Components/Landing/Landing";
import Empleo from "./Components/Empleo/Empleo";
import Noticias from "./Components/Noticias/Noticias";
import QuienesSomos from "./Components/QuienesSomos/QuienesSomos";
import Servicios from "./Components/Servicios/Servicios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserData } from "./redux/userAction";
import { LoginPersonal } from "./Components/Login/LoginPersonal";
import LandingAdmin from "./Components/Landing/LandingAdmin";
import Opiniones from "./Components/Opiniones/Opiniones";
import { ProtectedRoutes } from "./Components/ProtectedRoutes/ProtectedRoutes";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const tokenRef = { current: token }; // Referencia mutable
    if (tokenRef?.current) {
      dispatch(fetchUserData(tokenRef?.current));
    }
  }, [dispatch, token]);

  return (
    <Router>
      <div className="flex flex-col bg-slate-100 w-screen">
        <div className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginPersonal" element={<LoginPersonal />} />
            <Route
              path="/home"
              element={
                <ProtectedRoutes>
                  {" "}
                  <Landing />{" "}
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoutes>
                  <LandingAdmin />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/empleo"
              element={
                <ProtectedRoutes> element={<Empleo />} </ProtectedRoutes>
              }
            />
            <Route
              path="/noticias"
              element={
                <ProtectedRoutes>
                  {" "}
                  <Noticias />{" "}
                </ProtectedRoutes>
              }
            />
            <Route
              path="/quienes-somos"
              element={
                <ProtectedRoutes>
                  <QuienesSomos />{" "}
                </ProtectedRoutes>
              }
            />
            <Route
              path="/servicios"
              element={
                <ProtectedRoutes>
                  {" "}
                  <Servicios />{" "}
                </ProtectedRoutes>
              }
            />
            <Route path="/opiniones" element={<Opiniones />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
