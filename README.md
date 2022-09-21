# progImage-tools

This tool aims to simplify client upload or retrieve image files between Cloud and your application.

## Contents

- [1. Installation](#installation)
  - [1.1. Using npm](#install)
- [2. Usage](#usage)
  - [2.1. Upload](#sample-upload)
  - [2.1. Retrieve](#sample-retrieve)

## <a name="installation"></a>1. Installation

### <a name="install"></a>1.1. Using npm:

```
$ npm install progImage-tools
```

## <a name="usage"></a>2. Usage

### <a name="sample-upload"></a>2.1. Upload image into Cloud

```
const ProgImageTools = require('progimage-tools');

/**
  *
  * @param {*} imagesBucketName  - Bucket Name in your AWS S3
  * @param {*} imagesTableName   - Table name in your AWS DynamoDB
  * @param {*} imageId           - ImageID to retrieve (Partition key in imagesTableName)
  * @returns
  */
let progImageTools = new ProgImageTools();
let imageUrl = await progImageTools.upload(
    'images-bucket',
    'Images',
    'http://localhost:3000/dev/retrieve',
    'cl8adv3uv00020yxpfuu7ccs4',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys...',
    'demo description',
);
```

### <a name="sample-retrieve"></a>2.2. Retrieve image from Cloud

```
const ProgImageTools = require('progimage-tools');

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
let progImageTools = new ProgImageTools();
let image = await progImageTools.retrieve(
 'images-bucket',
    'Images',
    'imageId,
    'cl8adv3uv00020yxpfuu7ccs4',
);
```
