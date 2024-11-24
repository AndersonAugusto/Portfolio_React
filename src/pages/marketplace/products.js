import React from "react"
import "./marketplace.scss"

const ProductsMarketingPlace = () => {
  return (
    <>
      {/* Cabeçalho */}
      <header className="header">
        <a href="#" className="header__logo">
          Logotipo
        </a>
        <nav className="header__nav">
          <a href="#" className="header__nav-item">
            Home
          </a>
          <a href="#" className="header__nav-item">
            Produtos
          </a>
          <a href="#" className="header__nav-item">
            Contatos
          </a>
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
      <body>
        <div id="fundoPreto">
          <div id="modal" class="relative modal">
            <div id="checkout" class="checkout"></div>
            <div class="closeCheckout">
              <div class="menuModal" id="valorTotal"></div>
              <div class="menuModal" onclick="clearCarrinho()">
                Limpar Carrinho
              </div>
              <div class="menuModal" onclick="closeModal()">
                {" "}
                Fechar
              </div>
            </div>
          </div>
        </div>
        <section class="products">
          <section id="menu">
            <div class="inputField">
              <input id="filtro" type="text" placeholder="Filtro" />
            </div>
            <div class="">
              <button>Buscar</button>
            </div>
            <div id="carrinho">
              <img
                src="../../imagens/carrinho.png"
                onclick="showCheckout()"
                alt=""
              />
              <span id="carrinhoCount"> </span>
            </div>
          </section>
          <div id="count"></div>
          <section id="listOfProducts"></section>
        </section>
      </body>

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

export default ProductsMarketingPlace
