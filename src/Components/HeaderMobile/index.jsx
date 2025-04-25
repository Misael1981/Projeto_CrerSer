import "./HeaderMobile.css";
import Logo from "/logo-header.png";
import { FaHome, FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

const Header = () => {
  return (
    <header className="header-mobile">
      <div className="logo">
        <img src={Logo} alt="Logo do projeto CrerSer" />
      </div>
      <nav className="nav-headerMobile">
        <ul className="nav-list-headerMobile">
          <li className="nav-item-headerMobile">
            <a href="#">
              <FaHome size={30} />
              <span>Link 1</span>
            </a>
          </li>
          <li className="nav-item-headerMobile">
            <a href="#">
              <FaInfoCircle size={30} />
              <span>Link 2</span>
            </a>
          </li>
          <li className="nav-item-headerMobile">
            <a href="#">
              <FaShoppingCart size={30} />
              <span>Link 3</span>
            </a>
          </li>
          <li className="nav-item-headerMobile">
            <a href="#">
              <IoIosMore size={30} />
              <span>Mais</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
