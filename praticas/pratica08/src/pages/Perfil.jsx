import { useParams } from "react-router-dom";
import FormPerfil from "./FormPerfil";

function Perfil() {
  const { id } = useParams();

  return (
    <div>
      <h1>Perfil de usuário: {id}</h1>
      <FormPerfil />
    </div>
  );
}

export default Perfil;
