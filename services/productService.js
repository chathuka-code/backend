const { poolPromise } = require('../db/dbConfig');
const queries = require('../queries/productQueries');

async function addProduct(data) {
  const pool = await poolPromise;
  const transaction = new pool.Transaction();

  try {
    await transaction.begin(); // Start transaction

    // Add product
    const productRequest = new pool.Request(transaction);
    productRequest
      .input('pName', data.pName)
      .input('unitPrice', data.unitPrice)
      .input('inStockCount', data.inStockCount)
      .input('lowStockCount', data.lowStockCount)
      .input('categoryID', data.categoryID);

    const productResult = await productRequest.query(queries.addProduct);
    const newProductID = productResult.recordset[0].productID;

    // Add stock if inStockCount > 0
    if (data.inStockCount > 0) {
      const stockRequest = new pool.Request(transaction);
      stockRequest
        .input('quantityChanged', data.inStockCount)
        .input('productID', newProductID);

      await stockRequest.query(queries.addStock);
    }

    // Add a row to the Supplies table
    const suppliesRequest = new pool.Request(transaction);
    suppliesRequest
      .input('supplierID', data.supplierID)
      .input('productID', newProductID);

    await suppliesRequest.query(queries.addSupplies);

    await transaction.commit(); // Commit transaction
    return { success: true, productID: newProductID };
  } catch (err) {
    await transaction.rollback(); // Rollback transaction on error
    throw new Error(err.message);
  }
}

module.exports = { addProduct };
