import Banner from "/assets/banner.svg";

const HomeHead = () => {
  return (
    <div className="grid grid-cols-2 bg-gradient-to-l from-green-900 to-[#ffff] min-h-full min-w-full text-left justify-center ">
      <div className="text-[#cb0c4f] tracking-wider mx-auto h-fit my-[20%] flex flex-col">
        <div className="text-lg flex flex-row text-left mr-auto ml-[25%]">
          Bienvenidos a
        </div>
        <div className="font-bold text-4xl flex flex-row text-left mr-auto ml-[25%]">
          SPA SENTIRSE BIEN
        </div>
        <div className="flex flex-row  w-fit gap-2 items-center text-left mr-auto ml-[25%]">
          <div className="text-2xl ">De la</div>
          <div className="font-bold text-4xl">Dra. Ana Felicidad</div>
        </div>
        <div className="py-5 px-20 text-center my-[10%] mx-[15%] border border-dashed border-[#cb0c4f] border-y-2 border-x-0 font-light text-lg">
          Plataforma especializada en{" "}
          <b className="font-bold text-lg">servicios de SPA</b>, diseñada para
          conectar a <b className="font-bold text-lg">los clientes</b> y futuros
          clientes con una amplia gama de servicios profesionales de SPA, desde
          Masajes hasta Belleza y Tratamientos Faciales.
        </div>
      </div>
      <div className="max-w-[860px]">
        <img
          src={Banner}
          alt="Image Landing Desktop"
          className="mask-image object-cover w-[100%] xl:max-w-[950px] h-[100%] xl:max-h-[1000px] float-right"
        />
      </div>
    </div>
  );
};

export default HomeHead;
