const sql = require('mssql');

const config = {
    user: '', // your SQL Server username (leave blank for Windows Authentication)
    password: '', // your SQL Server password (leave blank for Windows Authentication)
    server: 'localhost', // SQL Server name or IP address
    database: 'pos', // name of the database to connect to
    options: {
        encrypt: true, // Use encryption for the connection (use false for local development without encryption)
        trustServerCertificate: true, // Set this to true if using a self-signed certificate
    },
};

// Create a pool of connections
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => {
        console.error('Database connection failed:', err);
        process.exit(1); // Exit the process if database connection fails
    });

module.exports = { sql, poolPromise };