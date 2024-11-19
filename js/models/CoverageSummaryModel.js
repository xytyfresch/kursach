export default class CoverageSummaryModel {
  constructor() {
    this.coverage = {
      lines: 0,
      functions: 0,
      branches: 0,
      statements: 0,
    };
  }

  setCoverage(data) {
    this.coverage = { ...data };
  }

  getCoverage() {
    return this.coverage;
  }
}
