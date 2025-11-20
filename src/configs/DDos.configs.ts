import { IRateLimiterStoreNoAutoExpiryOptions } from "rate-limiter-flexible";
import { mysqlServerConfig, pool } from "./DB";
import { DB_NAME } from "./env.configs";

export const mysqlDDosServerConfig: IRateLimiterStoreNoAutoExpiryOptions = {
  storeClient: pool(mysqlServerConfig), // Callback-based connection pool
  storeType: "mysql",
  dbName: DB_NAME, // Database name
  tableName: "rate_limiter", // Ensure this table exists
  keyPrefix: "SS_Rate",
  points: 10, // Number of requests allowed per duration
  duration: 2, // Time frame in seconds
  blockDuration: 3, // Block IP for 5 seconds if exceeded
  inMemoryBlockOnConsumed: 30, // In-memory block threshold
  inMemoryBlockDuration: 3 // Block duration in-memory
  // keyColumnName: "rlkey", // Column name for the key
  // pointsColumnName: "points", // Column for tracking points
  // expireColumnName: "expire" // Expiration column
};
