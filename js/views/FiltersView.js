export default class FiltersView {
  constructor() {
    this.container = document.getElementById("filters-container");
    this.onFilterSubmit = null; // Callback для обработки фильтрации
  }

  render() {
    this.container.innerHTML = `
        <h2>Filters</h2>
        <form id="filter-form">
          <label for="min-coverage">Min Coverage (%):</label>
          <input
            type="number"
            id="min-coverage"
            name="min-coverage"
            min="0"
            max="100"
            step="1"
            placeholder="e.g., 80"
          />
  
          <label for="start-date">Start Date:</label>
          <input type="datetime-local" id="start-date" name="start-date" />
  
          <label for="end-date">End Date:</label>
          <input type="datetime-local" id="end-date" name="end-date" />
  
          <button type="submit">Apply Filter</button>
        </form>
      `;

    this._attachEvents();
  }

  _attachEvents() {
    const form = document.getElementById("filter-form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (this.onFilterSubmit) {
        const minCoverage =
          parseInt(document.getElementById("min-coverage").value, 10) || 0;
        const startDate = document.getElementById("start-date").value;
        const endDate = document.getElementById("end-date").value;

        this.onFilterSubmit({ minCoverage, startDate, endDate });
      }
    });
  }
}
