const sqlite3 = require('sqlite3').verbose()
const path = require('path');

const dbPath = path.resolve(__dirname, 'shortend_urls.db')

let db = new sqlite3.Database(dbPath, (error) => {
  if (error) {
    throw error
  } else {
    console.log('Connected to the SQLite database.');
    let createTableSql = `CREATE TABLE IF NOT EXISTS shortend_urls (
    id INTEGER PRIMARY KEY AUTOINCREMENT, short_url tinytext, long_url mediumtext, hash tinytext)`;
    db.run(createTableSql, (error) => {
      if (error) {
        console.error(error.message);
      } else {
        console.log("table created.");
      }
    });  
  }
});


module.exports = db