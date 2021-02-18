module.exports = {
   "type": "postgres",
   "host": process.env.DB_HOST || "localhost",
   "port": process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
   "username": process.env.DB_USERNAME || "postgres",
   "password": process.env.DB_PASSWORD || "password",
   "database": process.env.DB_NAME || "databasetest2",
    "entities": ["dist/entity/*.js"],
    "migrations": ["dist/migrations/*.js"],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migrations",
     },
};