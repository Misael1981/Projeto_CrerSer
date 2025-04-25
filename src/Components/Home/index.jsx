import "./Home.css";
import Logo from "/logo-header.png";

const Home = () => {
  return (
    <section className="home">
      <div className="logo">
        <img src={Logo} alt="Logo do projeto CrerSer" />
      </div>
      <div className="home__content">
        <h2>
          Histórias diárias que conectam sua família com os valores de Deus!
        </h2>
        <p>
          Receba no seu Whatsapp 365 histórias bíblicas cheias de ensinamentos
          para o coração da sua família.
        </p>
        <a href="#">Quero começar agora</a>
      </div>
      <div>
        <img src="/public/video.jpg" alt="" />
      </div>
    </section>
  );
};

export default Home;
