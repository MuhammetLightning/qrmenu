import "./menu.scss";
import { HashLink } from "react-router-hash-link";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink to="/#intro">Home</HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink to="/#about">About Us</HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink to="/#product">Contactless Menu</HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink to="/#contact">Contact</HashLink>
        </li>
      </ul>
    </div>
  );
}
