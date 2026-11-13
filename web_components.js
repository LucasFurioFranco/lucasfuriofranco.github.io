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
      <header style="background: #222; color: #fff; padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
        <h2>Meu E-commerce</h2>
        <nav>
          <a href="index.html" style="color:#fff; margin-right: 15px;">Home</a>
          <a href="catalog.html" style="color:#fff; margin-right: 15px;">Catálogo</a>
          <a href="cart.html" style="color:#fff;">Carrinho (<span id="cart-count">0</span>)</a>
        </nav>
      </header>
    `;


    //GTM Call
    var gtag_gtm = document.createElement("script");
    gtag_gtm.setAttribute("src", "https://www.googletagmanager.com/gtm.js?id=GTM-NRM8NXCG");
    gtag_gtm.setAttribute("async", true); //Yep, I know it's not necessary as I'm using JS to load it, but makes me happier to add it here!
    document.body.appendChild(gtag_gtm);

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
    window.gtag('js', new Date());

  }
}
customElements.define('header-component', HeaderComponent);
