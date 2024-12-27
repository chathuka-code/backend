const config = {
    server: 'DESKTOP-7B80IM0', // e.g., 'DESKTOP_mjsi\\MSSQLEXPRESS'
    database: 'pos',
    user: '', // Please read above note about SQL authentication
    password: '', // Please read above note about SQL authentication
    options: {
      trustedConnection: true, // Enable Windows Authentication
    },
    port: 1433, // Default port number
    driver: 'msnodesqlv8', // Use the msnodesqlv8 driver
  };
  
  module.exports = config;
  