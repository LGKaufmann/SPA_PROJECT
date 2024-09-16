import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServicesAction } from "../../redux/servicesAction";
import CardLanding from "./CardLanding";

export const Landing = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((state: any) => state.services);
  const { user } = useSelector((state: any) => state.users);

  useEffect(() => {
    dispatch<any>(getServicesAction());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-700 to-[#cb0c4f] p-8 flex flex-col items-center">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Bienvenido a Nuestro Spa
        </h1>
        <p className="text-2xl text-white font-light">
          Descubre nuestros exclusivos servicios de relajación y bienestar
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.length > 0 ? (
          services.map((serv) => (
            <CardLanding
              id={serv._id}
              key={serv._id}
              nombre={serv.nombre}
              descripcion={serv.descripcion}
              precio={serv.precio}
            />
          ))
        ) : (
          <p className="text-white">
            No hay servicios disponibles en este momento.
          </p>
        )}
      </div>
    </div>
  );
};
