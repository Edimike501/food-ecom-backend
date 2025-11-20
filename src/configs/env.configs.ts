import dotenv from "dotenv";
import Jwt from "jsonwebtoken";
import type { StringValue } from "ms";

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV as
  | "development"
  | "production"
  | "local";

export const COOKIE_EXPIRY = process.env.COOKIE_EXPIRY as string | number;
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY as
  | StringValue
  | number;
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY as
  | StringValue
  | number;

export const BACKEND_DOMAIN =
  process.env.NODE_ENV === "local"
    ? (process.env.BACKEND_DOMAIN as string)
    : (process.env.ONLINE_BACKEND_DOMAIN as string);

export const CLIENT_DOMAIN =
  process.env.NODE_ENV === "local"
    ? (process.env.CLIENT_DOMAIN as string)
    : (process.env.ONLINE_CLIENT_DOMAIN as string);

export const DB_HOST = process.env.DB_HOST as string;
export const DB_USER_NAME = process.env.DB_USER_NAME as string;
export const DB_PASSWORD = process.env.DB_PASSWORD as string;
export const DB_NAME = process.env.DB_NAME as string;
export const DB_PORT = (process.env.DB_PORT as number | undefined) || 3306;

export const ARGON2_MEMORY_COST = process.env.ARGON2_MEMORY_COST as
  | number
  | string;
export const ARGON2_TIME_COST = process.env.ARGON2_TIME_COST as number | string;

export const ADMIN_TBL = process.env.ADMIN_TBL as string;

export const JWT_ALGORITHM = process.env.JWT_ALGORITHM as Jwt.Algorithm;
export const JWT_ACCESS_KEY = process.env.JWT_ACCESS_KEY as string;
export const JWT_RESET_KEY = process.env.JWT_RESET_KEY as string;
export const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY as string;
export const SESSION_SECRET_KEY = process.env.SESSION_SECRET_KEY as string;

export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;
export const FROM_EMAIL = process.env.FROM_EMAIL as string;
export const SENDER_NAME = process.env.SENDER_NAME as string;
export const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD as string;
export const NODEMAILER_USER = process.env.NODEMAILER_USER as string;
