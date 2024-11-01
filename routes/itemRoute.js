const express = require('express');
const { suppliers, uploadImage, create, items } = require('../controllers/itemController');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });


router.get('/suppliers', suppliers);
router.get('/items', items);
router.post('/uploadImage', upload.array('images', 10), uploadImage);
router.post('/create', create);

module.exports = router;
