import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
    return (
      <div className="flex flex-col justify-center items-center gap-10 p-15">
        <h1 className="text-[#3B82F6] text-5xl font-bold">
          Organize. Acompanhe. Evolua.
        </h1>
        <p className="w-[33%] text-center text-wrap">
          Controle completo dos treinos e alimentação, para alunos e professores
          de academia. Tudo de forma simples, rápida e conectada.
        </p>
        <button
          className="bg-[#60A5FA] hover:bg-[#4373AF] p-6 rounded-2xl text-white text-lg font-extrabold cursor-pointer duration-200 active:scale-95 drop-shadow-2xl"
          onClick={() => navigate('/cadastro')}
        >
          Cadastre-se agora
        </button>
      </div>
    );
}
 
export default HeroSection;