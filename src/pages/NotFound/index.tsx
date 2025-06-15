import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col justify-center items-center gap-10 p-15">
        <h1 className="text-[#3B82F6] text-5xl font-bold">
          404 - Página não econtrada
        </h1>
        <p className="w-[33%] text-center text-wrap">
          Você está tentando acessar uma página que não existe.
        </p>
        <p
          className="rounded-2xl text-lg font-extrabold cursor-pointer duration-200 active:scale-95 drop-shadow-2xl hover:underline"
          onClick={() => navigate("/")}
        >
          Voltar para a página inicial
        </p>
      </div>
    );
}
 
export default NotFound;