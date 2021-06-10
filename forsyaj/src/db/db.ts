

const knex = require('knex');
const knexfile = require ('../src/db/knexfile')

const db = knex(knexfile.development);
//module.exports = db;

export default db;