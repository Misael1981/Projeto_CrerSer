import "./HeaderDesktop.css";
import Logo from "/logo-header.png";

const HeaderDesktop = () => {
  return (
    <header className="header-desktop">
      <div className="logo">
        <img src={Logo} alt="Logo do projeto CrerSer" />
      </div>
      <nav className="nav-desktop">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">link 1</a>
          </li>
          <li className="nav-item">
            <a href="#">link 2</a>
          </li>
          <li className="nav-item">
            <a href="#">link 3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
