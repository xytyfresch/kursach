export default class UploadView {
  constructor() {
    this.container = document.getElementById("file-upload");
  }

  render() {
    this.container.innerHTML = `
        <h2>Upload Test Coverage Report</h2>
        <form id="upload-form">
          <input type="file" id="coverage-file" accept=".json" />
          <button type="submit">Upload</button>
        </form>
      `;
    this.uploadForm = document.getElementById("upload-form");
    this.fileInput = document.getElementById("coverage-file");
  }

  bindFileUpload(handler) {
    this.uploadForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const file = this.fileInput.files[0];
      if (file) {
        handler(file);
        this.fileInput.value = ""; // Сброс input после загрузки
      }
    });
  }
}
