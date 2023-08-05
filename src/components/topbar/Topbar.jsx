import "./topbar.scss";
import { HashLink } from "react-router-hash-link";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
export default function Topbar({ restoran, phone }) {
  return (
    <div className="topbar ">
      <div className="wrapper">
        <div className="left">
          <div className="logo">{restoran}.</div>
          <div className="itemContainerN">
            <img src={Phone} alt="" className="icon" />
            <span>{phone}</span>
          </div>
          {/* <div className="itemContainer">
            <img className="icon" src={Email} alt="" />
            <span>contact@qrmenu.com</span>
          </div> */}
        </div>

        {/* <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
