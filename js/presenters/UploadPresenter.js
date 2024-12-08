export default class UploadPresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.render();
    this.view.bindFileUpload(this.handleFileUpload.bind(this));
  }

  async handleFileUpload(fileContent) {
    const newFile = await this.model.addFile(fileContent);
    if (newFile) {
      location.reload();
    } else {
      console.error("Failed to upload file.");
    }
  }
}
