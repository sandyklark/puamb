
// Require and initialize outside of your main handler
import mysql from 'serverless-mysql';

const connection = mysql({
  config: {
    host     : process.env.MYSQL_HOST,
    database : process.env.DB_NAME,
    user     : process.env.USERNAME,
    password : process.env.PASSWORD
  }
})

// Main handler function
exports.handler = async (event, context) => {
  // Run your query
  let results = await connection.query(event.query);

  // Run clean up function
  await connection.end();

  console.log("RESULT: ");
  console.log(results);
  // Return the results
  return {
    results
  }
};
