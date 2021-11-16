const express = require('express');
const router = express.Router();
const resumesCtrl = require('../../controllers/resumes');
// POST new resume
router.post('/', resumesCtrl.create);
// GET all posts
// router.get('/', resumesCtrl.index)
router.get('/:id', resumesCtrl.show);
router.delete('/:id', resumesCtrl.delete);
router.put('/:id', resumesCtrl.update);

module.exports = router;