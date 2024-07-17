import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

function NavbarDashboard() {
  const { auth } = useContext(CurrentUserContext);

  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link to="/dashboard">Accueil</Link>
        </li>
        <li>
          <Link to="expenses">Dépenses</Link>
        </li>
        <li>
          <Link to={`profil/${auth?.id}`}>Profil</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarDashboard;
