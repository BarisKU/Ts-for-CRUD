

module.exports = {

    development: {
      client: 'pg',
      connection: {
        host:'localhost',
        port: 8000,
        database: 'StajProje',
        user:     '16524',
        password:  null
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        extension: 'ts',
        tableName: 'knex_migrations'
      }
    },
  
  };
