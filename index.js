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

  /**
   *
   * @param {*} imagesBucketName  - Bucket Name in your AWS S3
   * @param {*} imagesTableName   - Table name in your AWS DynamoDB
   * @param {*} imageId           - ImageID to retrieve (Partition key in imagesTableName)
   * @returns
   */
  retrieve = async function (imagesBucketName, imagesTableName, imageId) {
    if (!this.#isInitialized) {
      throw "isInitialized false. ";
    }
    // checking if the state provided is not undefined.
    let imagesRepository = new ImagesRepository(imagesBucketName, imagesTableName);
    return imagesRepository.retrieve(imageId);
  };

  /**
   *
   * @param {*} imagesBucketName  - Bucket Name in your AWS S3
   * @param {*} imagesTableName   - Table name in your AWS DynamoDB
   * @param {*} imageId           - ImageID to retrieve (Partition key in imagesTableName)
   * @param {*} imagesHostURL     - Your API / Website that allow your client to call later when the unique imageId
   * @param {*} imageFileBase64   - Image file in Base64 encoding (example: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQA...)
   * @param {*} desc              - Description of the image that your client is uploading
   * @returns
   */
  upload = async function (
    imagesBucketName,
    imagesTableName,
    imageId,
    imagesHostURL,
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
