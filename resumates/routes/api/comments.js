const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/commentsCtrl');

// // POST new comment
router.post('/', commentsCtrl.createComment);
// // GET all comments
router.get('/', commentsCtrl.indexComment)
// // GET comment by id
// router.get('/:id', commentsCtrl.show);
// router.delete('/:id', commentsCtrl.delete);
// router.put('/:id', commentsCtrl.update);

module.exports = router;