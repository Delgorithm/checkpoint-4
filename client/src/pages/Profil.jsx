import { useParams } from "react-router-dom";

function Profil() {
  const { id } = useParams();

  return <p>Profil {id}</p>;
}

export default Profil;
