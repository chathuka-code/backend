const express = require('express');
const { addProductController } = require('../controllers/productController');

const router = express.Router();

router.post('/add', addProductController);

module.exports = router;
