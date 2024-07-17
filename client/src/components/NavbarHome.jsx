import { Link } from "react-router-dom";

function NavbarHome() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">Connexion</Link>
        </li>
        <li>
          <Link to="/register">Inscription</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarHome;
