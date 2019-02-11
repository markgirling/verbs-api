module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_CONNECTION_STRING || 'postgresql://postgres:postgres@postgres:5432/db'
  },
  test: {
    client: 'pg',
    connection: process.env.DB_CONNECTION_STRING || 'postgresql://postgres:postgres@postgres:5432/db_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DB_CONNECTION_STRING,
    pool: {
      min: process.env.DB_CONNECTION_POOL_MIN || 2,
      max: process.env.DB_CONNECTION_POOL_MAX || 10
    }
  }
};
