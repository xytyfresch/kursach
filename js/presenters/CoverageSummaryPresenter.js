export default class CoverageSummaryPresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  initialize(coverageData) {
    this.model.setCoverage(coverageData);
    this.updateView();
  }

  updateView() {
    const coverage = this.model.getCoverage();
    this.view.render(coverage);
  }
}
