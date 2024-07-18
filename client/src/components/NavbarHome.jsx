/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function NavbarHome() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenBurger = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full p-4 flex justify-between items-center shadow-lg transition-colors duration-300 ${
        isScrolled ? "bg-[#7434db] text-white shadow-xl" : ""
      }`}
    >
      <p>ExpOn</p>
      <button
        type="button"
        onClick={handleOpenBurger}
        className="xxs:block md:hidden"
      >
        <Menu />
      </button>

      {isOpen ? (
        <article className="fixed top-0 right-0 z-50 w-3/5 h-full bg-[#7434db] md:hidden">
          <section className="p-5">
            <button
              type="button"
              onClick={handleOpenBurger}
              className="fixed top-4 right-4"
            >
              <X className="w-10 h-10" />
            </button>
            <ul className="flex flex-col justify-between h-32 mt-20 w-full text-center">
              <li>
                <Link
                  to="/dashboard"
                  className="text-lg text-white text-center"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-lg text-white">
                  Connexion
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-lg text-white">
                  Inscription
                </Link>
              </li>
            </ul>
          </section>
        </article>
      ) : null}

      <ul className="flex gap-2 xxs:hidden md:flex">
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
