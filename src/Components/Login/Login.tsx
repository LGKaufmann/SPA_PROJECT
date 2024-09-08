import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "/assets/user.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/userAction";
import { Spinner } from "../Spinner/Spinner";

interface LoginState {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, token } = useSelector((state: any) => state.users);
  const [user, setUser] = useState<LoginState>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token, navigate]);

  const inputsStyle =
    "h-7 w-[268px] pl-6 rounded-3xl bg-white text-black shadow-inner shadow-gray-300 font-semibold text-xs md:w-[536px] md:h-12 md:text-xl placeholder:text-[#cb0c4f] placeholder:font-semibold md:placeholder:text-xl";

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch<any>(loginUser(user));
    resetForm();
  };

  useEffect(() => {
    setUser({ email, password });
  }, [email, password]);

  return (
    <main className="max-w-screen flex flex-col items-center mx-auto bg-gradient-to-r py-10 from-green-100 to-[#ffff]">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center gap-4 mb-20"
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold text-black mb-6 text-center">
            Iniciar sesión
          </h2>
          <img src={User} alt="user icon" className="w-80 h-80" />
        </div>
        <section className="w-[304px] p-4 flex flex-col items-center gap-4 rounded-3xl bg-[#cb0c4f] md:h-[343px] md:w-[656px] md:justify-center md:gap-y-6">
          <input
            type="text"
            value={email}
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
            className={inputsStyle}
          />
          <div className="relative">
            <input
              type="password"
              value={password}
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              className={inputsStyle}
            />
          </div>
          <button
            className="w-[156px] h-9 bg-green-700 rounded-3xl text-base text-white font-semibold md:h-14 md:w-72 md:text-2xl"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? <Spinner /> : "Iniciar Sesión"}
          </button>
        </section>
      </form>
      <Link to="/registro">
        <button className="w-[188px] h-10 my-6 bg-green-700 rounded-3xl text-lg text-white font-semibold md:h-14 md:w-72 md:text-2xl">
          Crear cuenta
        </button>
      </Link>
    </main>
  );
};

export default Login;
