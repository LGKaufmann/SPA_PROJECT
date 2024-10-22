import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import background from "/assets/background.jpg";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

interface FormData {
  nombre: string;
  email: string;
  metodoPago: string;
  cantidad: string;
  servicio: string;
}

const RegistrarPago: React.FC = () => {
  const location = useLocation();
  const { precio, servicio: servicioLocation } = location.state || {};
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => state.users);
  const [formData, setFormData] = useState<FormData>({
    nombre: `${user.nombre} ${user.apellido}`, // Combinar nombre y apellido
    email: user.email || "", // Rellenar con el email del usuario
    metodoPago: "tarjetaDebito",
    cantidad: precio || "",
    servicio: servicioLocation.nombre || "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (precio) {
      setFormData((prev) => ({
        ...prev,
        cantidad: precio,
      }));
    }
    if (servicioLocation) {
      setFormData((prev) => ({
        ...prev,
        servicio: servicioLocation.nombre,
      }));
    }
  }, [precio, servicioLocation]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validarFormulario = (): string => {
    const { nombre, email, cantidad, servicio } = formData;
    if (!nombre || !email || !cantidad || !servicio) {
      return "Todos los campos son obligatorios";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "El correo electrónico no es válido";
    }
    if (parseFloat(cantidad) <= 0) {
      return "La cantidad debe ser mayor a 0";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validarFormulario();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/servicios/pagos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Pago registrado con éxito:", data);

      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: "success",
        title: "Pago registrado con éxito",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        // Redirigir a /home después de cerrar la alerta
        navigate("/home");
      });

      // Limpiar formulario después de enviar
      setFormData({
        nombre: "",
        email: "",
        metodoPago: "tarjetaDebito",
        cantidad: precio || "",
        servicio: "",
      });
      setError("");
    } catch (error) {
      console.error("Hubo un problema al registrar el pago:", error);
      setError("Hubo un problema al registrar el pago.");
    }
  };

  return (
    <main className="flex items-center justify-center h-screen mx-auto relative">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${background})`,
          filter: "brightness(0.5)",
        }}
      ></div>
      <div className="relative w-full max-w-lg p-8 bg-white bg-opacity-15 rounded-3xl backdrop-blur-lg border border-[#cb0c4f] shadow-lg">
        <h2
          className="text-3xl font-semibold text-center text-[#cb0c4f] mb-4"
          style={{ fontFamily: "Playball, sans-serif" }}
        >
          Registrar Pago
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#cb0c4f] transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#cb0c4f] transition"
            required
          />
          <select
            name="metodoPago"
            value={formData.metodoPago}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#cb0c4f] transition"
          >
            <option value="tarjetaDebito">Tarjeta de Débito</option>
            <option value="tarjetaCredito">Tarjeta de Crédito</option>
            <option value="efectivo">Efectivo</option>
          </select>
          <input
            type="number"
            name="cantidad"
            placeholder="Cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#cb0c4f] transition"
            required
          />
          <input
            type="text"
            name="servicio"
            placeholder="Servicio"
            value={formData.servicio}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#cb0c4f] transition"
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full p-3 bg-[#cb0c4f] text-white rounded-md hover:bg-green-700 transition-colors shadow-md"
          >
            Pagar
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegistrarPago;
