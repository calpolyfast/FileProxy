const AWS = require('aws-sdk');

const s3 = new AWS.S3();
const Bucket = 'calpolyfast-ctf-winter17';

// Get the files in a bucket
const getFilesInFolder = function getFilesInFolder() {
  return new Promise((resolve, reject) => {
    const params = { Bucket };

    s3.listObjectsV2(params, (err, data) => {
      if (err) reject(err); // an error occurred
      resolve(data);
    });
  });
};

// Get the url for a file
const getFileURL = function getFileURL(fileName) {
  return new Promise((resolve) => {
    const params = { Bucket, Key: fileName, Expires: 3600 };
    const url = s3.getSignedUrl('getObject', params);
    resolve(url);
  });
};

// Get signed url for uploading a file
const uploadFile = function uploadFile(fileName) {
  return new Promise((resolve, reject) => {
    resolve(`Presignd url for: ${fileName}`);
    reject(`Could not get presignd url for: ${fileName}`);
  });
};

module.exports = {
  getFilesInFolder,
  getFileURL,
  uploadFile,
};
