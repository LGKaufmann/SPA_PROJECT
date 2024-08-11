const Footer = () => {
  return (
    <footer className="bg-gradient-to-l from-[#ffffff] to-[#cb0c4f] text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Nuestro Spa. Todos los derechos
          reservados.
        </p>
        <p className="mt-2">
          <a href="/privacy-policy" className=" text-white hover:underline">
            Política de Privacidad
          </a>{" "}
          |
          <a
            href="/terms-of-service"
            className="text-white hover:underline ml-2"
          >
            Términos de Servicio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
