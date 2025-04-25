import "./HeaderMobile.css";
import { FaHome, FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

const Header = () => {
  return (
    <header className="header-mobile">
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
