const express = require("express");
const router = express.Router();
const resumesCtrl = require("../../controllers/resumes");
const multer = require("multer");
const multerS3 = require("multer-s3");
const S3 = require("aws-sdk/clients/s3");
const AWS = require("aws-sdk");
// const { upload } = require("../../controllers/imagesCtrl");

const { uploadFile } = require("../../controllers/s3");

const fs = require("fs");
const s3 = new AWS.S3({
  /* ... */
});
AWS.config.update({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

// const storage = multerS3({
//     s3: s3,
//     bucket: process.env.AWS_BUCKET_NAME,
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString());
//     },
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == "image/png" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//     }
//   },
// });

// POST new resume
// router.post("/",  test,  resumesCtrl.create);

router.post("/", async (req, res) => {
  AWS.config.update({
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  });
  console.log("create in the bucket");
  const bucketName = process.env.AWS_BUCKET_NAME || "resumatesbucket";
  const region = process.env.AWS_BUCKET_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY;
  const secretAccessKey = process.env.AWS_SECRET_KEY;
  const s3 = new AWS.S3();

  // Binary data base64
  const fileContent = Buffer.from(req.files.file.data, "binary");

  // Setting up S3 upload parameters
  const params = {
    Bucket: bucketName,
    Key: req.files.file.name, // File name you want to save as in S3
    Body: fileContent,
  };
  console.log("ready to upload");
  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    resumesCtrl.create(req, res);
  });
});

// function test (req, res, next) {
//   console.log("Hello SEI!", req.files.file);
//   uploadFile(req.files.file),
//   console.log("Hello SEI!", req.files.file);

//   next();
// };
// GET all posts
router.get("/", resumesCtrl.index);
router.get("/:id", resumesCtrl.show);
router.delete("/:id", resumesCtrl.delete);
router.put("/:id", resumesCtrl.update);

module.exports = router;
