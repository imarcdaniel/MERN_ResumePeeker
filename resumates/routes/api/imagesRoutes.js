const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const imagesCtrl = require("../../controllers/imagesCtrl");

// POST /api/images/upload
router.post("/put", upload.single("file"), imagesCtrl.uploadimage);
// GET /api/images/download
router.get("/get",  imagesCtrl.download);

module.exports = router;
