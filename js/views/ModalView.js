export default class ModalView {
  constructor() {
    this.modal = document.getElementById("file-details-modal");
    this.detailsContainer = document.getElementById("file-details");
    this.closeButton = document.getElementById("close-modal");
    this.onClose = null; // Callback для закрытия
  }

  render(fileData) {
    this.detailsContainer.innerHTML = `
        <p><strong>File Name:</strong> ${fileData.file}</p>
        <p><strong>Lines Coverage:</strong> ${fileData.lines}%</p>
        <p><strong>Functions Coverage:</strong> ${fileData.functions}%</p>
        <p><strong>Branches Coverage:</strong> ${fileData.branches}%</p>
        <p><strong>Statements Coverage:</strong> ${fileData.statements}%</p>
        <p><strong>Upload Time:</strong> ${new Date(
          fileData.uploadTime
        ).toLocaleString()}</p>
      `;

    this.modal.classList.remove("hidden", "hide");
    this.modal.classList.add("show");
    this._attachEvents();
  }

  _attachEvents() {
    this.closeButton.addEventListener("click", () => {
      if (this.onClose) this.onClose();
    });
  }

  close() {
    this.modal.classList.remove("show");
    this.modal.classList.add("hide");

    this.modal.addEventListener(
      "animationend",
      () => {
        if (this.modal.classList.contains("hide")) {
          this.modal.classList.add("hidden");
        }
      },
      { once: true }
    );
  }
}
