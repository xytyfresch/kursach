export default class UploadView {
  constructor() {
    this.container = document.getElementById("file-upload");
  }

  render() {
    this.container.innerHTML = `
      <h2>Upload File</h2>
      <form id="file-upload-form">
        <input type="file" id="file-input" accept="application/json" />
        <button type="submit">Upload</button>
      </form>
    `;
  }

  bindFileUpload(handler) {
    const form = document.getElementById("file-upload-form");
    const fileInput = document.getElementById("file-input");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsedData = JSON.parse(reader.result);
            handler(parsedData);
          } catch (error) {
            console.error("Invalid JSON file:", error);
          }
        };
        reader.readAsText(file);
      } else {
        console.error("No file selected.");
      }
    });
  }
}
