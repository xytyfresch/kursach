import {
  fetchCoverageDetails,
  fetchInitialCoverageData,
} from "../js/api/ApiService.js";

import HeaderPresenter from "./presenters/HeaderPresenter.js";
import FooterPresenter from "./presenters/FooterPresenter.js";

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

import ModalModel from "./models/ModalModel.js";
import ModalView from "./views/ModalView.js";
import ModalPresenter from "./presenters/ModalPresenter.js";

const coverageData = await fetchCoverageDetails();
const initialCoverageData = await fetchInitialCoverageData();

const headerPresenter = new HeaderPresenter();
headerPresenter.initialize();

const footerPresenter = new FooterPresenter();
footerPresenter.initialize();

const uploadModel = new UploadModel();
const uploadView = new UploadView();
const uploadPresenter = new UploadPresenter(uploadModel, uploadView);

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
  (filteredData) =>
    coverageDetailsView.render(filteredData, (fileData) =>
      modalPresenter.showModal(fileData)
    ),
  coverageData
);
filtersPresenter.initialize();

const coverageDetailsView = new CoverageDetailsView();
const coverageDetailsPresenter = new CoverageDetailsPresenter(
  coverageDetailsView
);
coverageDetailsPresenter.initialize(coverageData, (fileData) =>
  modalPresenter.showModal(fileData)
);

const modalModel = new ModalModel();
const modalView = new ModalView();
const modalPresenter = new ModalPresenter(modalModel, modalView);
modalPresenter.initialize();
