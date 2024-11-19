export default class FiltersPresenter {
  constructor(model, view, onFilterChangeCallback) {
    this.model = model;
    this.view = view;
    this.onFilterChange = onFilterChangeCallback; // Callback для обновления таблицы
  }

  initialize() {
    this.view.render();
    this.view.onFilterSubmit = (filters) => this.applyFilters(filters);
  }

  applyFilters(filters) {
    this.model.setFilters(filters);

    if (this.onFilterChange) {
      const currentFilters = this.model.getFilters();
      this.onFilterChange(currentFilters);
    }
  }
}
