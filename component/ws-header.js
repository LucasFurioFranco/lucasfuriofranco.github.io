class WsHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
    <global-styles-component></global-styles-component>

      <header style="background: #222; color: #fff; padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
        <h2>Meu E-commerce</h2>
        <nav>
          <a href="index.html" style="color:#fff; margin-right: 15px;">Home</a>
          <a href="apps.html" style="color:#fff; margin-right: 15px;">PWAs</a>
          <a href="watch_ads.html" style="color:#fff; margin-right: 15px;">Assista Propagandas</a>
          <a href="cart.html" style="color:#fff;">Carrinho</a>
          <a href="contact.html" style="color:#fff;">Contato</a>
        </nav>
      </header>
    `;
  }
}
customElements.define('ws-header', WsHeader);
