class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header style="background: #222; color: #fff; padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
        <h2>Meu E-commerce</h2>
        <nav>
          <a href="index.html" style="color:#fff; margin-right: 15px;">Home</a>
          <a href="catalog.html" style="color:#fff; margin-right: 15px;">Catálogo</a>
          <a href="cart.html" style="color:#fff;">Carrinho (<span id="cart-count">0</span>)</a>
        </nav>
      </header>
    `;
  }
}
customElements.define('header-component', HeaderComponent);