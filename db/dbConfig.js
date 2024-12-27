const sql = require('mssql');

const config = {
    database: 'pos',
    server: 'LAPTOP-VEQSQ0JG',
    options: {
      trustedConnection: true, // Enables Windows Authentication
      encrypt: false, // Disable encryption for local development
      trustServerCertificate: true, // Required for self-signed certificates
    },
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => console.error('Database Connection Failed: ', err));

module.exports = { sql, poolPromise };
