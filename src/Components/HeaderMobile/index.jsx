import "./HeaderMobile.css";
import Logo from "/logo-header.png";
import { FaHome, FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo do projeto CrerSer" />
      <nav>
        <ul>
          <li>
            <a href="#">
              <FaHome />
              <span>Link 1</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaInfoCircle />
              <span>Link 2</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaShoppingCart />
              <span>Link 3</span>
            </a>
          </li>
          <li>
            <a href="#">
              <IoIosMore />
              <span>Mais</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
