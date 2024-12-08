export default class ModalView {
  constructor() {
    this.container = document.getElementById("file-details-modal");
    this.container.classList.add("modal", "hidden"); // Убедимся, что модальное окно скрыто

    this.onClose = null; // Callback для закрытия
  }

  render(fileData) {
    // Генерация структуры модального окна
    this.container.innerHTML = `
        <div class="modal-content">
          <span class="close-btn" id="close-modal">&times;</span>
          <h2>File Details</h2>
          <div id="file-details">
            <p><strong>File Name:</strong> ${fileData.file}</p>
            <p><strong>Lines Coverage:</strong> ${fileData.lines}%</p>
            <p><strong>Functions Coverage:</strong> ${fileData.functions}%</p>
            <p><strong>Branches Coverage:</strong> ${fileData.branches}%</p>
            <p><strong>Statements Coverage:</strong> ${fileData.statements}%</p>
            <p><strong>Upload Time:</strong> ${new Date(
              fileData.uploadTime
            ).toLocaleString()}</p>
          </div>
        </div>
      `;

    // Применяем класс modal
    this.container.classList.add("modal");
    this.container.classList.remove("hidden", "hide");
    this.container.classList.add("show");

    this._attachEvents();
  }

  _attachEvents() {
    const closeButton = this.container.querySelector("#close-modal");
    closeButton.addEventListener("click", () => {
      if (this.onClose) this.onClose();
    });
  }

  close() {
    this.container.classList.remove("show");
    this.container.classList.add("hidden", "hide");

    this.container.addEventListener(
      "animationend",
      () => {
        if (this.container.classList.contains("hide")) {
          this.container.classList.add("hidden");
        }
      },
      { once: true }
    );
  }
}
