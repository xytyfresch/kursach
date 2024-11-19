export default class FiltersModel {
  constructor() {
    this.filters = {
      minCoverage: 0,
      startDate: null,
      endDate: null,
    };
  }

  setFilters(newFilters) {
    this.filters = { ...this.filters, ...newFilters };
  }

  getFilters() {
    return this.filters;
  }
}
