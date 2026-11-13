class NewComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    `;
  }
}
customElements.define('new-component', NewComponent);



class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      /*Para que o seu <footer> nunca fique "flutuando" no meio da tela em páginas com pouco conteúdo (como uma Thank You Page ou carrinho vazio)*/
        body {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          margin: 0;
        }

        main {
          flex: 1; /* Faz o <main> crescer e empurrar o footer sempre para o fim da tela */
        }
      </style>

      <header style="background: #222; color: #fff; padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
        <h2>Meu E-commerce</h2>
        <nav>
          <a href="index.html" style="color:#fff; margin-right: 15px;">Home</a>
          <a href="watch_ads.html" style="color:#fff; margin-right: 15px;">Assista Propagandas</a>
          <a href="cart.html" style="color:#fff;">Carrinho</a>
          <a href="contact.html" style="color:#fff;">Contato</a>
        </nav>
      </header>
    `;


    //GTM Call
    var gtag_gtm;
    gtag_gtm = document.createElement("script");
    gtag_gtm.setAttribute("src", "https://www.googletagmanager.com/gtm.js?id=GTM-NRM8NXCG");
    gtag_gtm.setAttribute("async", true); //Yep, I know it's not necessary as I'm using JS to load it, but makes me happier to add it here!
    document.body.appendChild(gtag_gtm);

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
    window.gtag('js', new Date());

  }
}
customElements.define('header-component', HeaderComponent);



class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        .site-footer {
          background-color: #24292e;
          color: #e1e4e8;
          padding: 2.5rem 1rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          margin-top: 4rem;
          border-top: 1px solid #e1e4e8;
        }
        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }
        .footer-col h4 {
          color: #ffffff;
          font-size: 1rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid #0366d6;
          padding-bottom: 0.5rem;
          display: inline-block;
        }
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-col li {
          margin-bottom: 0.5rem;
        }
        .footer-col a {
          color: #959da5;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-col a:hover {
          color: #ffffff;
          text-decoration: underline;
        }
        .footer-bottom {
          max-width: 1100px;
          margin: 2rem auto 0 auto;
          padding-top: 1.5rem;
          border-top: 1px solid #444d56;
          text-align: center;
          font-size: 0.85rem;
          color: #6a737d;
        }
      </style>

      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-col">
            <h4>Laboratório GTM</h4>
            <p style="font-size: 0.9rem; color: #959da5; line-height: 1.4;">
              Ambiente de testes estático para validação de rastreamento, eventos de e-commerce e Google Tag Manager.
            </p>
          </div>
          <div class="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li><a href="index.html">Início</a></li>
              <li><a href="watch_ads.html">Assista Anúncios</a></li>
              <li><a href="cart.html">Carrinho</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Ferramentas</h4>
            <ul>
              <li><a href="https://tagassistant.google.com/" target="_blank" rel="noopener">Tag Assistant</a></li>
              <li><a href="https://analytics.google.com/" target="_blank" rel="noopener">Google Analytics 4</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noopener">GitHub Pages</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 E-commerce Lab • Zero infraestrutura, 100% focado em dados.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);





