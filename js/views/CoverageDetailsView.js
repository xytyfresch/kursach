export default class CoverageDetailsView {
  constructor() {
    this.tableBody = document.getElementById("coverage-data");
  }

  render(data, onRowClick) {
    this.tableBody.innerHTML = ""; // Очищаем таблицу перед перерисовкой

    data.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${item.file}</td>
          <td>${item.lines}%</td>
          <td>${item.functions}%</td>
          <td>${item.branches}%</td>
          <td>${item.statements}%</td>
        `;
      row.addEventListener("click", () => onRowClick(item)); // Обработка клика по строке
      this.tableBody.appendChild(row);
    });
  }
}
