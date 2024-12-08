export default class FooterView {
  constructor() {
    this.container = document.getElementById("app-footer");
  }

  render() {
    this.container.innerHTML = `
        <p>© 2024 Test Coverage Analysis Tool - Kozlov Ilia</p>
      `;
  }
}
