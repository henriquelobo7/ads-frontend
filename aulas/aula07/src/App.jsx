import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label>E-mail:</label>
        <input
          type="text"
          {...register("email", {
            required: { value: true, message: "Email obrigatório" },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label>Senha:</label>
        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "Senha obrigatória" },
            minLength: { value: 6, message: "Senha no mínimo 6 caracteres"}
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button>Entrar</button>
      </form>
    </>
  );
}

export default App;
