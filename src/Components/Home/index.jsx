import "./Home.css";

const Home = () => {
  return (
    <section className="home">
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
        <img src="/video.jpg" alt="imagem ilustrativa apenas para o vídeo" />
      </div>
    </section>
  );
};

export default Home;
