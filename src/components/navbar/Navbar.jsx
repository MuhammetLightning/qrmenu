import "./navbar.scss";
import { HashLink } from "react-router-hash-link";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <HashLink to="/#intro" className="logo">
            qrmenu.
          </HashLink>
          <div className="itemContainer">
            <img src={Phone} alt="" className="icon" />
            <span>+1 1234 556 75</span>
          </div>
          <div className="itemContainer">
            <img className="icon" src={Email} alt="" />
            <span>contact@qrmenu.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
