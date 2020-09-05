process.env.PORT = process.env.PORT || 4000;

process.env.URLDB =
    process.env.URLDB || "mongodb://localhost:27017/databaseapi";

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

process.env.SECRET_SESSION = process.env.SECRET_SESSION || "secretsessiondev";
