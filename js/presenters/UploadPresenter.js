export default class UploadPresenter {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.view.render();
      this.view.bindFileUpload(this.handleFileUpload.bind(this));
    }
  
    handleFileUpload(file) {
      const newFile = this.model.addFile(file);
      console.log("Uploaded file:", newFile); // Для проверки
    }
  }
  