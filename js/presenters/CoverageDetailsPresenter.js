export default class CoverageDetailsPresenter {
  constructor(view) {
    this.view = view;
  }

  initialize(data, onRowClick) {
    this.view.render(data, onRowClick);
  }

  update(data) {
    this.view.render(data, this.onRowClick);
  }
}
