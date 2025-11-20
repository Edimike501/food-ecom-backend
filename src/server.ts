import dotenv from "dotenv";
import { logger } from "./configs/logger.configs";
import app from "./app";

dotenv.config();

/* setTimeout(() => {
  throw new Error("Test uncaught exception");
}, 1000); */

const port = process.env.PORT || 8174;

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`, {
    port: port,
    env: process.env.NODE_ENV
  });
});
