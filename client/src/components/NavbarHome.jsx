import { Link } from "react-router-dom";

function NavbarHome() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarHome;
