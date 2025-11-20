import dotenv from "dotenv";
import mysql2 from "mysql2";
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USER_NAME } from "./env.configs";

dotenv.config();

export const mysqlServerConfig: mysql2.PoolOptions = {
  host: DB_HOST,
  user: DB_USER_NAME,
  password: DB_PASSWORD,
  // database: DB_NAME,
  port: Number(DB_PORT) || 3306,
  multipleStatements: true,
  waitForConnections: true,
  connectionLimit: 50,
  queueLimit: 100,
  charset: "utf8mb4",
  enableKeepAlive: true, // Keep connections alive to avoid timeouts
  keepAliveInitialDelay: 300000, // 5 minutes (ms) for keep-alive pings
  maxIdle: 50, // Max idle connections (same as connectionLimit for no pruning)
  idleTimeout: 60000 // Time (ms) before idle connections are closed
  // connectTimeout: 10000
};

export const getSQLConfig = (): mysql2.PoolOptions => {
  return {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER_NAME, // Replace with your MySQL username
    password: DB_PASSWORD, // Replace with your MySQL password
    multipleStatements: true,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  };
};

export const pool = (mysqlServerConfig: mysql2.PoolOptions) =>
  mysql2.createPool(mysqlServerConfig);

export const con = pool(mysqlServerConfig).promise();

/* export const startDBcon = async (
  req: Request<{ school_name: string }>,
  _res: CustomResponse,
  next: NextFunction
) => {
  if (req.params.school_name && req.params.school_name.length > 0) {
    mysqlServerConfig.database = formatStringToDBName(req.params.school_name);
  }

  next();
};

export const startDBconFunc = async (school_name: string) => {
  if (school_name && school_name.length > 0) {
    mysqlServerConfig.database = school_name;
  }
}; */

/* const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER_NAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  multipleStatements: true
}); */

// const pool = mysql.createPool({
//     //connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'dbName',
// })

// module.exports = { pool, con };
