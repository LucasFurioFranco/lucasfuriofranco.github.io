class NewComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    `;
  }
}
customElements.define('ws-component', NewComponent);
