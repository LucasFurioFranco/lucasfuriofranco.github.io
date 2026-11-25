class WsProductCard extends HTMLElement {
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
customElements.define('ws-product-card', WsProductCard);



class WsProductRow extends HTMLElement {
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
customElements.define('product-row', WsProductRow);
