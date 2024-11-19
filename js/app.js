import UploadModel from "./models/UploadModel.js";
import UploadView from "./views/UploadView.js";
import UploadPresenter from "./presenters/UploadPresenter.js";

import CoverageSummaryModel from "./models/CoverageSummaryModel.js";
import CoverageSummaryView from "./views/CoverageSummaryView.js";
import CoverageSummaryPresenter from "./presenters/CoverageSummaryPresenter.js";

import FiltersModel from "./models/FiltersModel.js";
import FiltersView from "./views/FiltersView.js";
import FiltersPresenter from "./presenters/FiltersPresenter.js";

import CoverageDetailsView from "./views/CoverageDetailsView.js";
import CoverageDetailsPresenter from "./presenters/CoverageDetailsPresenter.js";

const coverageData = [
  {
    file: "file1.js",
    lines: 75,
    functions: 80,
    branches: 70,
    statements: 85,
    uploadTime: "2024-11-18T10:30:00",
  },
  {
    file: "file2.js",
    lines: 50,
    functions: 40,
    branches: 60,
    statements: 55,
    uploadTime: "2024-11-18T14:15:00",
  },
  {
    file: "file3.js",
    lines: 95,
    functions: 90,
    branches: 92,
    statements: 94,
    uploadTime: "2024-11-19T08:00:00",
  },
  {
    file: "file4.js",
    lines: 85,
    functions: 75,
    branches: 80,
    statements: 88,
    uploadTime: "2024-11-19T12:45:00",
  },
];

const initialCoverageData = {
  lines: 75,
  functions: 60,
  branches: 80,
  statements: 90,
};

const coverageSummaryModel = new CoverageSummaryModel();
const coverageSummaryView = new CoverageSummaryView();
const coverageSummaryPresenter = new CoverageSummaryPresenter(
  coverageSummaryModel,
  coverageSummaryView
);
coverageSummaryPresenter.initialize(initialCoverageData);

const filtersModel = new FiltersModel();
const filtersView = new FiltersView();
const filtersPresenter = new FiltersPresenter(
  filtersModel,
  filtersView,
  applyFilters
);

filtersPresenter.initialize();

const coverageDetailsView = new CoverageDetailsView();
const coverageDetailsPresenter = new CoverageDetailsPresenter(
  coverageDetailsView
);

coverageDetailsPresenter.initialize(coverageData, showFileDetails);

function applyFilters(filters) {
  const { minCoverage, startDate, endDate } = filters;

  const filteredData = coverageData.filter((item) => {
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

  coverageDetailsView.render(filteredData, showFileDetails);
}

const uploadModel = new UploadModel();
const uploadView = new UploadView();
const uploadPresenter = new UploadPresenter(uploadModel, uploadView);

function showFileDetails(fileData) {
  const modal = document.getElementById("file-details-modal");
  const detailsContainer = document.getElementById("file-details");

  detailsContainer.innerHTML = `
    <p><strong>File Name:</strong> ${fileData.file}</p>
    <p><strong>Lines Coverage:</strong> ${fileData.lines}%</p>
    <p><strong>Functions Coverage:</strong> ${fileData.functions}%</p>
    <p><strong>Branches Coverage:</strong> ${fileData.branches}%</p>
    <p><strong>Statements Coverage:</strong> ${fileData.statements}%</p>
    <p><strong>Upload Time:</strong> ${new Date(
      fileData.uploadTime
    ).toLocaleString()}</p>
  `;

  modal.classList.remove("hidden", "hide");
  modal.classList.add("show");
}

document.getElementById("close-modal").addEventListener("click", () => {
  const modal = document.getElementById("file-details-modal");

  modal.classList.remove("show");
  modal.classList.add("hide");

  modal.addEventListener(
    "animationend",
    () => {
      if (modal.classList.contains("hide")) {
        modal.classList.add("hidden");
      }
    },
    { once: true }
  );
});

// coverageDetailsView.render(coverageData, showFileDetails);
