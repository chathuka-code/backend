const queries = {
    addProduct: `
      INSERT INTO Product (pName, unitPrice, inStockCount, lowStockCount, categoryID)
      OUTPUT INSERTED.productID
      VALUES (@pName, @unitPrice, @inStockCount, @lowStockCount, @categoryID);
    `,
    addStock: `
      INSERT INTO Stock (quantityChanged, transactionDate, productID)
      VALUES (@quantityChanged, GETDATE(), @productID);
    `,
  };
  
  module.exports = queries;
  