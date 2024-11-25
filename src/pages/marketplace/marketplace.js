import { Link } from "react-router-dom"
import "./marketplace.scss"

const Marketplace = () => {
  return (
    <>
      {/* Cabeçalho */}
      <header className="header">
        <a href="/" className="header__logo">
          Logotipo
        </a>
        <nav className="header__nav">
          <Link to={""} className="header__nav-item">
            Home
          </Link>
          <Link to={"products"} className="header__nav-item">
            Produtos
          </Link>
          <Link to={"contacts"} className="header__nav-item">
            Contatos
          </Link>
        </nav>
        <form className="header__search-form">
          <input
            type="text"
            placeholder="Pesquisar"
            className="header__search-input"
          />
          <button className="header__search-button">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </header>

      {/* Carrossel */}
      <main>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item">
              <img
                src="https://i.pinimg.com/originals/6c/f2/7d/6cf27d4a1a4023d6fe1d32c2116bc59a.jpg"
                className="d-block w-100"
                alt="Carrossel 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.cavhortifruti.com.br/wp-content/uploads/2017/05/banner-1.jpg"
                className="d-block w-100"
                alt="Carrossel 2"
              />
            </div>
            <div className="carousel-item active">
              <img
                src="https://irp.cdn-website.com/8dd17cdc/MOBILE/jpg/banner-principal-padaria-doces-casca-de-noz-1920x1080.jpg"
                className="d-block w-100"
                alt="Carrossel 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>

      {/* Rodapé */}
      <footer>
        <div className="bottom-bar"></div>
        <section className="footer">
          <div className="separation">
            <img
              src="../imagens/instagram.png"
              width="32"
              height="32"
              alt="Instagram"
            />
            <img
              src="../imagens/facebook.png"
              width="32"
              height="32"
              alt="Facebook"
            />
            <img
              src="../imagens/e-mail.png"
              width="32"
              height="32"
              alt="E-mail"
            />
          </div>
          <div className="separation centerFooter">
            <p>Where can I get some?</p>
            <p>
              There are<strong> many variations </strong>
            </p>
            <p>Lorem Ipsum available, but the</p>
          </div>
          <div className="separation rightFooter">
            <p>Contato</p>
            <p>
              <strong>E-mail:</strong> <span>mercadao@mercadao.com</span>
            </p>
            <p>
              <strong>Telefone:</strong> <span>(00) 0 0000-0000</span>
            </p>
          </div>
        </section>
        <div className="bottom-bar voltarMercado">
          <button onClick={() => window.history.back()}>Voltar</button>
        </div>
      </footer>
    </>
  )
}

export default Marketplace
