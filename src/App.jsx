import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";
import Registro from "./Components/Registro/Registro";
import Login from "./Components/Login/Login";
import { Landing } from "./Components/Landing/Landing";

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-slate-100 w-screen">
        <div className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Landing />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
