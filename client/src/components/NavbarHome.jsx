/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenBurger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 flex justify-between items-center">
      <p>ExpOn</p>
      <button
        type="button"
        onClick={handleOpenBurger}
        className="xxs:block md:hidden"
      >
        <Menu />
      </button>

      {isOpen ? (
        <article className="absolute top-0 right-0 bg-blue-500 h-full w-2/5">
          <section className="p-5">
            <button
              type="button"
              onClick={handleOpenBurger}
              className="xxs:block lg:hidden bg-red-500"
            >
              <X />
            </button>
            <ul className="flex flex-col justify-between h-32 mt-10">
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
          </section>
        </article>
      ) : null}

      <ul className="flex gap-2 xxs:hidden md:block">
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
