import { Link } from "react-router-dom";

function NavbarDashboard() {
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
          <Link to="profil">Profil</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarDashboard;
