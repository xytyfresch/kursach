export default class HeaderView {
    constructor() {
      this.container = document.getElementById("app-header");
    }
  
    render() {
      this.container.innerHTML = `
        <h1>Анализ покрытия автотестами</h1>
      `;
    }
  }
  