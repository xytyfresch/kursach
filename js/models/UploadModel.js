import { BASE_URL } from "../api/ApiService.js";
export default class UploadModel {
  async addFile(fileContent) {
    try {
      const response = await fetch(`${BASE_URL}/coverage-details`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fileContent),
      });
      if (!response.ok) {
        throw new Error(`Failed to upload file: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  }
}
