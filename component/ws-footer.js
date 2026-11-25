class WsFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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
customElements.define('ws-footer', WsFooter);
