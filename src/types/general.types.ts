import { PoolConnection } from "mysql2/promise";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { QueryBuilderObj } from "./queryBuilder.types";

export type JSONResponseType<T = string> = {
  data: T;
  message: string;
  status?: number;
};

export type DefaultReturnObj<T> = {
  // data: QueryResult;
  data: JSONResponseType<T> | null;
  errorMessage: string | null;
  source: string;
  status: number;
};

export type DefaultQueryBuilderReturnObj<T> = {
  // data: QueryResult;
  data: T;
  errorMessage: null | string;
  source: string;
  status: number;
};

export type DefaultUtilsReturnObj<T> = {
  // data: QueryResult;
  data: T | string;
  errorMessage: null | string;
  source: string;
  status: number;
};

export type DefaultErrorReturnObj<T = null> = {
  // data: QueryResult;
  data: T;
  errorMessage: null | string;
  source: string;
  status: number;
};

export type Token<T = null> = {
  accessToken: string;
  refreshToken?: string;
  account_data?: T;
  // school_data?: LoginSchoolDataType | SchoolInfoTblType;
};

export interface MulterRequest extends Request {
  files?: { [fieldname: string]: Express.Multer.File[] }; // For multiple files
  file?: Express.Multer.File; // For single file
}

export type GeneralGenderType = "Male" | "Female";

export type visibilityActionType = "enable" | "disable";

export type GeneralVisibleType = "Yes" | "No";

export type ServiceReturn<T> = Promise<DefaultReturnObj<T> | null>;

// Define ModelFunctionParam with two generics:
// - T: Type of params
// - U: Type of QueryBuilderReturn's data
export type ModelFunctionParamType<T, U = null> = (
  params: T,
  db_config: { db_name: string; connection?: PoolConnection }
) => Promise<QueryBuilderObj<U>>;

// Define ServiceFunctionParam with two generics:
// - T: Type of params
// - U: Type of QueryBuilderReturn's data
export type ServiceContextType = {
  deviceInfo?: UAParser.IResult;
};
export type ServiceFunctionParamType<T = unknown, U = string> = (
  params: T,
  context: ServiceContextType,
  connection?: PoolConnection
) => Promise<DefaultReturnObj<U | string>>;

export type ContextlessServiceFunctionParamType<T = unknown, U = string> = (
  params: T,
  context?: ServiceContextType,
  connection?: PoolConnection
) => Promise<DefaultReturnObj<U | string>>;

export interface CustomRequest<
  P = unknown, // Parameters (e.g., route params)
  ResBody = unknown, // Response body
  ReqBody = unknown, // Request body
  ReqQuery = unknown // Query parameters
> extends Request<
    P extends null ? Record<string, any> | undefined : P,
    ResBody,
    ReqBody,
    ReqQuery
  > {
  signedCookies: {};
}

// Define CustomResponse with generics
export interface CustomResponse<
  ResBody = null, // Response body
  Locals extends Record<string, any> = Record<string, any> // Locals object
> extends Response<JSONResponseType<ResBody | string> | string, Locals> {
  locals: Locals & {
    debugMode?: boolean;
  };
}

export type TblCount = { count: number };
export type TblCheckType = { TABLE_NAME: string };
export type TblColumnType = { COLUMN_NAME: string };
export type TblSchemaType = { SCHEMA_NAME: string };

export type LogLevelType = "error" | "warn" | "info" | "verbose" | "debug";
export type LogAndReturnType = {
  message: string;
  log_level: LogLevelType;
  source: string;
  context: string;
  status: number;
  details: Record<string, any>;
};
