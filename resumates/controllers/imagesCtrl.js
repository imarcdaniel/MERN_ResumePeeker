const express = require("express");
const Resume = require("../models/resume");

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { uploadFile, getFileStream } = require("./s3");

function download(req, res) {
  // console.log(req.params);
  // const key = req.params.key;
  // const readStream = getFileStream(key);

  // readStream.pipe(res);
}

async function uploadimage(req, res) {
  try {
    const file = req.file;
    console.log("in the upload function", file);

    const result = await uploadFile(file);
    await unlinkFile(file.path);
    console.log("after Uploading", result);
    // const description = req.body.description;
    res.json({ imagePath: `/images/${result.Key}` });
  } catch (error) {
    console.log("error", error);
    // Do whatever you want, throw the error again if you want but it will just produce `UnhandledPromiseRejectionWarning` again, if you throw it again.
  }
}

module.exports = {
  uploadimage,
  download,
};
