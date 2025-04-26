import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <h2>
          Histórias que conectam os princípios morais daquilo que{" "}
          <strong>Deus</strong> nos ensina.
        </h2>
        <p>Todos os dias no seu Whastapp</p>
        <a href="#">Quero começar agora</a>
      </div>
      <div>
        <img src="/video.jpg" alt="imagem ilustrativa apenas para o vídeo" />
      </div>
    </section>
  );
};

export default Home;
