require("dotenv").config();
const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");
const AWS = require("aws-sdk");
AWS.config.update({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const bucketName = process.env.AWS_BUCKET_NAME || "resumatesbucket";
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// uploads a file to s3
async function uploadFile(file) {
  console.log("create upload hit");
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}
exports.uploadFile = uploadFile;

// downloads a file from s3
function getFileStream(fileKey) {
  // const downloadParams = {
  //   Key: fileKey,
  //   Bucket: bucketName,
  // };
  // return s3.getObject(downloadParams).createReadStream();
}
exports.getFileStream = getFileStream;
