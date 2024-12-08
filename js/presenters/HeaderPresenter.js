import HeaderView from "../views/HeaderView.js";

export default class HeaderPresenter {
  constructor() {
    this.view = new HeaderView();
  }

  initialize() {
    this.view.render();
  }
}
