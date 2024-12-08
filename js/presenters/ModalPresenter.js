export default class ModalPresenter {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    initialize() {
      this.view.onClose = () => this.closeModal();
    }
  
    showModal(fileData) {
      this.model.setFileData(fileData);
      this.view.render(fileData);
    }
  
    closeModal() {
      this.view.close();
    }
  }
  