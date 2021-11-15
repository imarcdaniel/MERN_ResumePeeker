const express = require("express");
const router = express.Router();
const imagesCtrl = require("../../controllers/images");

// POST /api/images/upload
router.post("/images/:key", imagesCtrl.uploadimage);
// GET /api/images/download
router.get("/images", imagesCtrl.download);

module.exports = router;