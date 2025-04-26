import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import Logo from "/logo-header.png";
import styles from "./MenuMobile.module.css";

const MenuMobile = () => {
  return (
    <header className={styles.headerMobile}>
      <div className={styles.logoHeader}>
        <img src={Logo} alt="Logo do projeto CrerSer" />
      </div>
      <nav className={styles.menuNav}>
        <Link to="/" className={styles.menuLink}>
          <FaHome size={25} />
          Home
        </Link>
        <Link to="/pagina2" className={styles.menuLink}>
          <FaInfoCircle size={25} />
          Página 2
        </Link>
        <Link to="/pagina3" className={styles.menuLink}>
          <FaShoppingCart size={25} />
          Pagina 3
        </Link>
        <Link to="/mais" className={styles.menuLink}>
          <IoIosMore size={25} />
          Mais
        </Link>
      </nav>
    </header>
  );
};

export default MenuMobile;
