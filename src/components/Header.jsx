import { NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.png";
import "../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />

      <nav className="navbar">
        <NavLink
          className={({ isActive }) => (isActive ? "menu active" : "menu")}
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "menu active" : "menu")}
          to="/"
        >
          Profil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "menu active" : "menu")}
          to="/"
        >
          Réglage
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "menu active" : "menu")}
          to="/"
        >
          Communauté
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
