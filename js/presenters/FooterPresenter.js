import FooterView from "../views/FooterView.js";

export default class FooterPresenter {
  constructor() {
    this.view = new FooterView();
  }

  initialize() {
    this.view.render();
  }
}
