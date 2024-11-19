export default class CoverageSummaryView {
  constructor() {
    this.container = document.getElementById("coverage-summary");
  }

  render(coverageData) {
    const { lines, functions, branches, statements } = coverageData;

    this.container.innerHTML = `
        <h2>Coverage Summary</h2>
        <div class="stats-bar">
          <label>Lines:</label>
          <progress id="lines-coverage" max="100" value="${lines}"></progress>
          <span id="lines-percentage">${lines}%</span>
        </div>
        <div class="stats-bar">
          <label>Functions:</label>
          <progress id="functions-coverage" max="100" value="${functions}"></progress>
          <span id="functions-percentage">${functions}%</span>
        </div>
        <div class="stats-bar">
          <label>Branches:</label>
          <progress id="branches-coverage" max="100" value="${branches}"></progress>
          <span id="branches-percentage">${branches}%</span>
        </div>
        <div class="stats-bar">
          <label>Statements:</label>
          <progress id="statements-coverage" max="100" value="${statements}"></progress>
          <span id="statements-percentage">${statements}%</span>
        </div>
      `;
  }
}
