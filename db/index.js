const config = require('../config/dev.json');
const { Pool } = require('pg');

const dbPool = new Pool({ connectionString: config.database });

module.exports = {
  query: (text, params, callback) => {
    return dbPool.query(text, params, callback);
  }
}