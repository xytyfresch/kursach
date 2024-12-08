export default class FiltersPresenter {
  constructor(model, view, onFilterChangeCallback, coverageData) {
    this.model = model;
    this.view = view;
    this.onFilterChange = onFilterChangeCallback;
    this.coverageData = coverageData;
  }

  initialize() {
    this.view.render();
    this.view.onFilterSubmit = (filters) => this.applyFilters(filters);
  }

  applyFilters(filters) {
    this.model.setFilters(filters);

    const filteredData = this.filterData(filters);

    if (this.onFilterChange) {
      this.onFilterChange(filteredData);
    }
  }

  filterData(filters) {
    const { minCoverage, startDate, endDate } = filters;

    return this.coverageData.filter((item) => {
      const uploadTime = new Date(item.uploadTime);
      const withinCoverage =
        item.lines >= minCoverage &&
        item.functions >= minCoverage &&
        item.branches >= minCoverage &&
        item.statements >= minCoverage;
      const withinDateRange =
        (!startDate || uploadTime >= new Date(startDate)) &&
        (!endDate || uploadTime <= new Date(endDate));

      return withinCoverage && withinDateRange;
    });
  }
}
