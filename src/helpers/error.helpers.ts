import { NextFunction, Request } from "express";
import { validationResult } from "express-validator";
import { greenAnsiColor, logger } from "../configs/logger.configs";
import { CustomResponse, DefaultErrorReturnObj } from "../types/general.types";
import { colorizeStatus } from "./string_manipulation.helpers";
import {
  ErrorProps,
  ErrorHandlerReturn,
  CustomError,
  DefaultErrorReturn
} from "../types/error.types";

export const handleErrors = <T>({
  response,
  res,
  error,
  source,
  status
}: Partial<ErrorProps<T>>): ErrorHandlerReturn => {
  // console.log(response || error);
  const result = error instanceof CustomError ? error : response!;

  if (!res)
    return !error
      ? (result as DefaultErrorReturnObj<null>)
      : error instanceof CustomError
        ? error
        : {
            data: null,
            errorMessage: error.message,
            source: source as string,
            status: 500
          };

  let selStatus = error ? status : (result?.status as number);

  if (typeof selStatus !== "number") selStatus = 500;

  if (selStatus < 500) {
    logger.info(
      `Error occurred in ${greenAnsiColor(source ? source : result?.source)} with status code ${colorizeStatus(selStatus)} and message: ${greenAnsiColor(
        error?.message || result?.errorMessage
      )}`,
      { stack: error?.stack, source, status: selStatus }
    );

    res.status(selStatus).json({
      data: null,
      message: result
        ? (result.errorMessage as string)
        : error?.message
          ? error?.message
          : "An unknown error occurred"
    });

    return;
  }

  logger.error(
    `Error occurred in ${greenAnsiColor(source ? source : result?.source)} with status code ${colorizeStatus(selStatus)} and message: ${greenAnsiColor(
      error?.message || result?.errorMessage
    )}`,
    { stack: error?.stack, source, status: selStatus }
  );

  /* console.log(error?.stack);

  console.log(result || error);

  console.log(selStatus); */

  res
    .status(selStatus as number)
    .json({ data: null, message: "An internal server error occurred" });
  return;
};

export const defaultError = (
  source: string,
  error: string
): DefaultErrorReturn => {
  return {
    data: null,
    errorMessage: error ? error : "An unknown error occurred",
    source: source,
    status: 500
  };
};

export const handleValidationErrors = (
  req: Request,
  res: CustomResponse,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    logger.error(errors.array()[0].msg);

    return res.status(400).json({ data: null, message: errors.array()[0].msg });
  }

  next();
};

// 🛠️ Helper for error responses
export const handleZodValidationError = (
  res: CustomResponse,
  context: string,
  errorMessage: string
) => {
  logger.error(`${context} validation failed ~ Error: ${errorMessage}`, {
    error: errorMessage
  });
  res.status(400).json({
    data: null,
    message: errorMessage.replace(/"|_/g, "")
  });
};
