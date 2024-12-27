const config = require('./db/dbConfig'); // Import the configuration
const sql = require('mssql/msnodesqlv8');

const express = require('express');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/supplier', supplierRoutes); 



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
