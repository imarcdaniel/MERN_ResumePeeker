const express = require('express');
const router = express.Router();
const resumesCtrl = require('../../controllers/resumes');

router.post('/', resumesCtrl.create);
router.get('/:id', resumesCtrl.show);
router.delete('/:id', resumesCtrl.delete);
router.put('/:id', resumesCtrl.update);

module.exports = router;