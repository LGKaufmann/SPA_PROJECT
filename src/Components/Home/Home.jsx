import { HomeBody } from "./HomeBody";
import HomeHead from "./HomeHead";
import Scroll from "/assets/scroll.svg";

const Home = () => {
  return (
    <div className="hidden lg:flex lg:flex-col">
      <HomeHead />
      <HomeBody />

      {scroll && (
        <div className="fixed bottom-5 right-0 z-50  animate-fade-in">
          <button
            className="bg-[#1C2681] text-white p-3 rounded-l-lg hover:bg-[#736CED]"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={Scroll} alt="scroll" className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
