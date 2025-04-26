import { Link } from "react-router-dom";
import styles from "./MenuDesktop.module.css";
import Logo from "/logo-header.png";

const MenuDesktop = () => {
  return (
    <header className={styles.headerDesktop}>
      <div className={styles.logoHeader}>
        <img src={Logo} alt="Logo do projeto CrerSer" />
      </div>
      <nav className={styles.menuNav}>
        <Link to="/" className={styles.menuLink}>
          Home
        </Link>
        <Link to="/pagina2" className={styles.menuLink}>
          Página 2
        </Link>
        <Link to="/pagina3" className={styles.menuLink}>
          Pagina 3
        </Link>
        <Link to="/mais" className={styles.menuLink}>
          Mais
        </Link>
      </nav>
    </header>
  );
};

export default MenuDesktop;
