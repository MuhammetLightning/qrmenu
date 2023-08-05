import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry } from "@fortawesome/free-solid-svg-icons";
import "./footer.scss";

const Footer = ({phone, adres}) => {
  return (
    <div className="footer">
      {/* <FontAwesomeIcon icon={faAngry} className="icon" /> */}
      <span className="phone">Telefon: {phone}</span>
      <span className="adres">Adres: {adres}</span>
    </div>
  );
};

export default Footer;
