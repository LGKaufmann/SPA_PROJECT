import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Navbar/Header";

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-slate-100 w-screen">
        <div className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
