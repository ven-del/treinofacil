import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
  email: string;
  senha: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();
  const onSubmit = (data: LoginFormInputs) => {

    console.log(data);
    alert("Login realizado com sucesso!");
    navigate('/app/dashboard');
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
          {...register("senha", { required: "Senha é obrigatória" })}
          type="password"
          placeholder="Senha"
          className="border p-2 rounded"
        />
        {errors.senha && (
          <span className="text-red-500">{errors.senha.message}</span>
        )}

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
