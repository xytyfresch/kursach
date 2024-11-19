export default class UploadModel {
    constructor() {
      this.files = [];
    }
  
    addFile(file) {
      const newFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        uploadTime: new Date().toISOString(),
      };
      this.files.push(newFile);
      return newFile;
    }
  }
  