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
          <button id="download-data-btn">Download Data</button>
        </div>
      `;

    // Применяем класс modal
    this.container.classList.add("modal");
    this.container.classList.remove("hidden", "hide");
    this.container.classList.add("show");

    this._attachEvents(fileData);
  }

  _attachEvents(fileData) {
    const closeButton = this.container.querySelector("#close-modal");
    closeButton.addEventListener("click", () => {
      if (this.onClose) this.onClose();
    });

    const downloadButton = this.container.querySelector("#download-data-btn");
    downloadButton.addEventListener("click", () => this._downloadData(fileData));
  }

  _downloadData(fileData) {
    const fileContent = JSON.stringify(fileData, null, 2); // Форматируем JSON с отступами
    const blob = new Blob([fileContent], { type: "application/json" }); // Создаем Blob
    const url = URL.createObjectURL(blob); // Создаем ссылку на Blob
    const a = document.createElement("a"); // Создаем <a> элемент
    a.href = url;
    a.download = `${fileData.file || "file-details"}.json`; // Имя файла
    a.click(); // Симулируем клик по ссылке
    URL.revokeObjectURL(url); // Удаляем объект ссылки
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
