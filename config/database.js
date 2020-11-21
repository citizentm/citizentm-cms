module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'citizentm'),
        username: env('DATABASE_USERNAME', 'citizen'),
        password: env('DATABASE_PASSWORD', 'citizen'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
