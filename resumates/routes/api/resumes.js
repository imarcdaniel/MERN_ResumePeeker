const express = require('express');
const router = express.Router();
const resumesCtrl = require('../../controllers/resumes');

// POST new resume
router.post('/', resumesCtrl.create);
// GET all posts
router.get('/mine', resumesCtrl.showMine);
router.get('/', resumesCtrl.index)
router.get('/:id', resumesCtrl.show);
router.delete('/delete/:id', resumesCtrl.delete);
router.put('/update/:id', resumesCtrl.update);


module.exports = router;