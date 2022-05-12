const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: '18062003',
  host: 'localhost',
  port: 5432,
  database: 'react_pizza'
});

module.exports = pool;