import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/backendService"; // ajuste o caminho se necessário
import { useState } from "react";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const result = await loginUser(data);
      localStorage.setItem("token", result.token);

      alert("Login realizado com sucesso!");
      navigate("/app/exercicios");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setLoginError(err.message);
      } else {
        setLoginError("Ocorreu um erro ao fazer login.");
      }
    }
  };

  return (
    <div className="mt-20 h-160">
      <h1 className="text-[#3B82F6] text-5xl font-bold text-center">
        Faça seu login:
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-sm mx-auto"
      >
        <input
          {...register("email", { required: "Email é obrigatório" })}
          placeholder="Email"
          className="border p-2 rounded mt-10"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <input
          {...register("password", { required: "Senha é obrigatória" })}
          type="password"
          placeholder="Senha"
          className="border p-2 rounded"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        {loginError && <span className="text-red-500">{loginError}</span>}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded cursor-pointer"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;