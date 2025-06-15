import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  senha: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
    const navigate = useNavigate();
  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Cadastro realizado com sucesso! \nAgora você será redirecionado para o login.");
    navigate('/login');
  };
  return (
    <div className="mt-20 h-160">
      <h1 className="text-[#3B82F6] text-5xl font-bold text-center">
        Faça seu cadastro:
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-sm mx-auto mt-10"
      >
        <input
          {...register("email", { required: "Email é obrigatório" })}
          placeholder="Email"
          className="border p-2 rounded"
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

        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
