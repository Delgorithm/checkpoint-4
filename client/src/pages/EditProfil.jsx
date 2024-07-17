import { useLoaderData } from "react-router-dom";
import ProfilForm from "../components/ProfilForm";

function EditProfil() {
  const userData = useLoaderData();
  return <ProfilForm user={userData} />;
}

export default EditProfil;
