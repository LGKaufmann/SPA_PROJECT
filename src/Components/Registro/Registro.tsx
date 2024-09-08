import React, { useState } from "react";
import User from "/assets/user.svg";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/userAction";
import { useNavigate } from "react-router-dom";

interface FormState {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  confirmPassword: string;
  DNI: string;
  celular: string;
}

const Registro: React.FC = () => {
  const [formValues, setFormValues] = useState<FormState>({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
    DNI: "",
    celular: "",
  });

  const [errors, setErrors] = useState<{ [key in keyof FormState]?: string }>(
    {}
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key in keyof FormState]?: string } = {};

    if (formValues.nombre.length < 3 || formValues.nombre.length > 12) {
      newErrors.nombre = "El nombre debe tener entre 3 y 12 caracteres.";
    }
    if (formValues.apellido.length < 3 || formValues.apellido.length > 12) {
      newErrors.apellido = "El apellido debe tener entre 3 y 12 caracteres.";
    }
    if (!/^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formValues.email)) {
      newErrors.email = "El email no es válido.";
    }
    if (formValues.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }
    if (!/^\d{8,15}$/.test(formValues.DNI)) {
      newErrors.DNI = "El DNI debe tener entre 8 y 15 dígitos.";
    }
    if (!/^\d{10,15}$/.test(formValues.celular)) {
      newErrors.celular =
        "El número de teléfono debe tener entre 10 y 15 dígitos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Envía los datos del formulario a Redux
      dispatch<any>(registerUser(formValues));
      console.log("Formulario enviado", formValues);
      navigate("/login");
    }
  };
  return (
    <div className="max-w-screen mx-auto bg-gradient-to-r py-10 from-green-100 to-[#ffff]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-black mb-6 text-center">
          Registro
        </h2>
        <img src={User} alt="user icon" className="w-80 h-80" />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mx-10 lg:mx-[500px]">
        <div>
          <label
            htmlFor="nombre"
            className="block sm:text-xl font-semibold text-gray-700"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formValues.nombre}
            onChange={handleChange}
            className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
            required
            minLength={3}
            maxLength={12}
          />
          {errors.nombre && (
            <p className="text-red-500 text-sm">{errors.nombre}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="surname"
            className="block sm:text-xl  font-semibold text-gray-700"
          >
            Apellido:
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formValues.apellido}
            onChange={handleChange}
            className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
            required
            minLength={3}
            maxLength={12}
          />
          {errors.apellido && (
            <p className="text-red-500 text-sm">{errors.apellido}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block sm:text-xl  font-semibold text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="password"
              className="block sm:text-xl  font-semibold text-gray-700"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
              required
              minLength={6}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block sm:text-xl  text-nowrap font-semibold text-gray-700"
            >
              Repetir Contraseña:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
              className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="dni"
            className="block sm:text-xl  font-semibold text-gray-700"
          >
            DNI:
          </label>
          <input
            type="text"
            id="DNI"
            name="DNI"
            value={formValues.DNI}
            onChange={handleChange}
            className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
            required
          />
          {errors.DNI && <p className="text-red-500 text-sm">{errors.DNI}</p>}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block sm:text-xl  font-semibold text-gray-700"
          >
            Número de Teléfono:
          </label>
          <input
            type="text"
            id="celular"
            name="celular"
            value={formValues.celular}
            onChange={handleChange}
            className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
            required
          />
          {errors.celular && (
            <p className="text-red-500 text-sm">{errors.celular}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-md hover:bg-green-900"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Registro;
