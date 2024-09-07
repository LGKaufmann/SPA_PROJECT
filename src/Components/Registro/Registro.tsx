import React, { useState } from "react";
import User from "/assets/user.svg";

interface FormState {
  name: string;
  surname: string;
  email: string;
  dni: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const Registro: React.FC = () => {
  const [formValues, setFormValues] = useState<FormState>({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    dni: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<{ [key in keyof FormState]?: string }>(
    {}
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key in keyof FormState]?: string } = {};

    if (formValues.name.length < 3 || formValues.name.length > 12) {
      newErrors.name = "El nombre debe tener entre 3 y 12 caracteres.";
    }
    if (formValues.surname.length < 3 || formValues.surname.length > 12) {
      newErrors.surname = "El apellido debe tener entre 3 y 12 caracteres.";
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
    if (!/^\d{8,15}$/.test(formValues.dni)) {
      newErrors.dni = "El DNI debe tener entre 8 y 15 dígitos.";
    }
    if (!/^\d{10,15}$/.test(formValues.phoneNumber)) {
      newErrors.phoneNumber =
        "El número de teléfono debe tener entre 10 y 15 dígitos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Lógica para manejar el envío del formulario
      console.log("Formulario enviado", formValues);
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
      <form onSubmit={handleSubmit} className="space-y-4 mx-[500px]">
        <div>
          <label
            htmlFor="name"
            className="block text-xl font-semibold text-gray-700"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
            required
            minLength={3}
            maxLength={12}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label
            htmlFor="surname"
            className="block text-xl font-semibold text-gray-700"
          >
            Apellido:
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formValues.surname}
            onChange={handleChange}
            className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
            required
            minLength={3}
            maxLength={12}
          />
          {errors.surname && (
            <p className="text-red-500 text-sm">{errors.surname}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xl font-semibold text-gray-700"
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
              className="block text-xl font-semibold text-gray-700"
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
              className="block text-xl font-semibold text-gray-700"
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
            className="block text-xl font-semibold text-gray-700"
          >
            DNI:
          </label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formValues.dni}
            onChange={handleChange}
            className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
            required
          />
          {errors.dni && <p className="text-red-500 text-sm">{errors.dni}</p>}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-xl font-semibold text-gray-700"
          >
            Número de Teléfono:
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            className="mt-1 block text-black bg-white w-full p-2 border border-[#cb0c4f] rounded-md"
            required
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
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
