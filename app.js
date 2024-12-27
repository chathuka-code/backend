const sql = require('mssql/msnodesqlv8');
const config = require('./db/dbConfig'); // Import the configuration

// Function to connect to the database and run the query
async function runQuery() {
  try {
    // Attempt to connect to the database
    await sql.connect(config);
    console.log('Database connection successful.');

    // Create a request object
    var request = new sql.Request();

    // Make the query (Replace this with your actual SQL query)
    //var query = 'SELECT * FROM Category'; // e.g., "SELECT * FROM tbl_name"

    // Execute the query
    //const result = await request.query(query);
    //console.log('Query results: ', result.recordset); // Output the query results

  } catch (err) {
    // Handle errors that may occur during connection or query execution
    console.error('Error during database operation: ', err.message);
  } finally {
    // Always close the connection, even if there was an error
    try {
      await sql.close();
      console.log('Database connection closed.');
    } catch (err) {
      console.error('Error closing the database connection: ', err.message);
    }
  }
}

// Run the query
runQuery();
