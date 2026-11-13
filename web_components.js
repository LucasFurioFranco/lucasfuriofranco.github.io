

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
    
    <global-styles-component></global-styles-component>

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





class ProductCard extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name') || 'Produto';
    const price = this.getAttribute('price') || '0.00';
    const sku = this.getAttribute('sku') || 'N/A';
    const category = this.getAttribute('category') || 'Geral';
    const imageUrl = this.getAttribute('image') || '';
    const fallbackImage = 'https://via.placeholder.com/300x200?text=Sem+Foto';

    // Injeta diretamente no Light DOM (sem shadowRoot)
    this.innerHTML = `
      <div class="card" data-card-sku="${sku}">
        <div class="card-img-container">
          <img 
            src="${imageUrl}" 
            alt="${name}" 
            class="card-img"
            onerror="this.onerror=null; this.src='${fallbackImage}';"
          >
        </div>
        <div class="card-body">
          <span class="card-category">${category}</span>
          <h3 class="card-title">${name}</h3>
          <div class="card-price">R$ ${price}</div>
          <button type="button" class="btn-buy" data-sku="${sku}" data-name="${name}" data-price="${price}">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    `;

    // Lógica do clique mantendo o push no dataLayer
    const buyButton = this.querySelector('.btn-buy');
    buyButton.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'add_to_cart',
        ecommerce: {
          items: [{
            item_id: sku,
            item_name: name,
            price: parseFloat(price),
            item_category: category,
            quantity: 1
          }]
        }
      });
      console.log(`[GTM DataLayer] add_to_cart disparado para: ${name}`);
    });
  }
}
customElements.define('product-card', ProductCard);



class ProductRow extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name') || 'Produto';
    const price = this.getAttribute('price') || '0.00';
    const sku = this.getAttribute('sku') || 'N/A';
    
    // Pega a URL da imagem passada por atributo, ou deixa vazio para testar o fallback
    const imageUrl = this.getAttribute('image') || 'url-que-vai-dar-erro.jpg';
    
    // URL de uma imagem genérica padrão (pode ser um placeholder ou SVG em base64/link confiável)
    const fallbackImage = 'https://via.placeholder.com/150?text=Sem+Foto';
    //const fallbackImage = 'img.src = "Static/img/generic/img_not_found.png";';

    this.innerHTML = `
      <div class="product-row">
        <!-- A tag <img> com o evento onerror embutido -->
        <img 
          src="${imageUrl}" 
          alt="${name}" 
          class="product-thumb"
          onerror="this.onerror=null; this.src='${fallbackImage}';"
        >
        <div>
          <strong>${name}</strong>
          <div style="font-size: 0.8rem; color: #6a737d;">SKU: ${sku}</div>
        </div>
        <div>R$ ${price}</div>
        <div>Em estoque</div>
        <div>
          <button type="button" class="btn-buy">Adicionar</button>
        </div>
      </div>
    `;
  }
}
customElements.define('product-row', ProductRow);





class GlobalStyleComponent extends HTMLElement {
  connectedCallback() {
    // Evita duplicar se já foi inserido
    if (document.getElementById('global-lab-styles')) return;

    const styleEl = document.createElement('style');
    styleEl.id = 'global-lab-styles';
    styleEl.textContent = `
      /* Seus estilos globais, reset e correções do body */
      body {
        display: block;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background-color: #f4f6f8;
        color: #24292e;
      }

      main {
        flex: 1;
      }

      .container {
        max-width: 1100px;
        margin: 2.5rem auto;
        padding: 0 1rem;
      }

      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      product-card {
        display: block;
      }

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

      /* Estilos encapsulados visualmente aqui dentro */
      .card {
        background: #fff;
        border: 1px solid #e1e4e8;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        height: 100%;
      }

      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(27, 31, 35, 0.1);
      }

      .card-img-container {
        width: 100%;
        height: 180px;
        background: #f6f8fa;
        border-bottom: 1px solid #e1e4e8;
        overflow: hidden;
      }

      .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .card-body {
        padding: 16px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .card-category {
        font-size: 0.75rem;
        color: #586069;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }

      .card-title {
        font-size: 1rem;
        font-weight: 600;
        color: #24292e;
        margin: 0 0 8px 0;
      }

      .card-price {
        font-size: 1.15rem;
        font-weight: 700;
        color: #0366d6;
        margin-bottom: 16px;
        margin-top: auto;
      }

      .btn-buy {
        background-color: #2ea44f;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        width: 100%;
        font-size: 0.9rem;
        transition: background-color 0.2s ease;
      }

      .btn-buy:hover {
        background-color: #2c974b;
      }

      .product-row {
        display: grid;
        grid-template-columns: 60px 2fr 1fr 1fr auto;
        gap: 16px;
        align-items: center;
        padding: 12px 16px;
        border-bottom: 1px solid #e1e4e8;
        background: #fff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      .product-thumb {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 4px;
        border: 1px solid #e1e4e8;
        background: #f6f8fa;
      }

    `;

    document.head.appendChild(styleEl);
  }
}

customElements.define('global-styles-component', GlobalStyleComponent);
