export default class ModalModel {
  constructor() {
    this.fileData = null;
  }

  setFileData(fileData) {
    this.fileData = fileData;
  }

  getFileData() {
    return this.fileData;
  }
}
