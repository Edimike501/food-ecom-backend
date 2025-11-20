import express, { Request, Response } from "express";

import { logger } from "../configs/logger.configs";
import { CustomResponse } from "../types/general.types";
import { rateLimiterMiddleware } from "../middlewares/DDos.middlewares";

const allRoutes = express.Router();

allRoutes.use(rateLimiterMiddleware);

// Basic route
allRoutes.get("/", (_req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

allRoutes.use((req: Request, res: CustomResponse) => {
  logger.info("Server Route Not Found", {
    route: req.originalUrl,
    method: req.method,
    body: req.body
  });

  res.status(404).json({ data: "", message: "Server Route Not Found" });
});

export default allRoutes;
