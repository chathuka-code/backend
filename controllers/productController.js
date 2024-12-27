const { addProduct } = require('../services/productService');

async function addProductController(req, res) {
  try {
    const data = req.body;
    const result = await addProduct(data);
    res.status(201).json({
      message: 'Product added successfully',
      productID: result.productID,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { addProductController };
