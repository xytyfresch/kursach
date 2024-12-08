export default class CoverageDetailsView {
  constructor() {
    this.container = document.getElementById("coverage-table");
  }

  render(data, onRowClick) {
    this.container.innerHTML = `
      <h2>Coverage Details</h2>
      <table>
        <thead>
          <tr>
            <th>File</th>
            <th>Lines</th>
            <th>Functions</th>
            <th>Branches</th>
            <th>Statements</th>
          </tr>
        </thead>
        <tbody id="coverage-data"></tbody>
      </table>
    `;

    const tableBody = this.container.querySelector("#coverage-data");

    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${item.file}</td>
          <td>${item.lines}%</td>
          <td>${item.functions}%</td>
          <td>${item.branches}%</td>
          <td>${item.statements}%</td>
        `;
      row.addEventListener("click", () => onRowClick(item));
      tableBody.appendChild(row);
    });
  }
}
