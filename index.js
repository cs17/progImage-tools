const ImagesRepository = require("./src/repository/ImagesRepository.js");

class progImageTools {
  #isInitialized = false;
  constructor() {
    try {
      this.#isInitialized = true;
    } catch (error) {
      logger.error("Error (Library Init): ", error);
      this.#isInitialized = false;
      throw error;
    }
  }

  retrieve = async function (imagesBucketName, imagesTableName, imageId) {
    if (!this.#isInitialized) {
      throw "isInitialized false. ";
    }
    // checking if the state provided is not undefined.
    let imagesRepository = new ImagesRepository(imagesBucketName, imagesTableName);
    return imagesRepository.retrieve(imageId);
  };

  upload = async function (
    imagesBucketName,
    imagesTableName,
    imagesHostURL,
    imageId,
    imageFileBase64,
    desc
  ) {
    if (!this.#isInitialized) {
      throw "isInitialized false. ";
    }
    // checking if the state provided is not undefined.
    let imagesRepository = new ImagesRepository(imagesBucketName, imagesTableName);
    return imagesRepository.uploadImage(imagesHostURL, imageId, imageFileBase64, desc);
  };
}
module.exports = progImageTools;
