import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser, RegisterPayload } from "../../services/backendService";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>();

  const onSubmit = async (data: RegisterPayload) => {
    setLoading(true);
    try {
      await registerUser(data);
      alert(
        "Cadastro realizado com sucesso! \nAgora você será redirecionado para o login."
      );
      navigate("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 h-screen">
      <h1 className="text-[#3B82F6] text-5xl font-bold text-center">
        Faça seu cadastro:
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-sm mx-auto mt-10"
      >
        <input
          {...register("nomeCompleto", {
            required: "Nome completo é obrigatório",
          })}
          placeholder="Nome completo"
          className="border p-2 rounded"
        />
        {errors.nomeCompleto && (
          <span className="text-red-500">{errors.nomeCompleto.message}</span>
        )}

        <input
          {...register("nomeExibicao")}
          placeholder="Nome de exibição (opcional)"
          className="border p-2 rounded"
        />

        <input
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Email inválido",
            },
          })}
          placeholder="Email"
          className="border p-2 rounded"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <input
          {...register("senha", {
            required: "Senha é obrigatória",
            minLength: { value: 6, message: "Mínimo de 6 caracteres" },
          })}
          type="password"
          placeholder="Senha"
          className="border p-2 rounded"
        />
        {errors.senha && (
          <span className="text-red-500">{errors.senha.message}</span>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "bg-gray-400" : "bg-blue-600"
          } text-white py-2 rounded cursor-pointer`}
        >
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </div>
  );
};

export default Register;
