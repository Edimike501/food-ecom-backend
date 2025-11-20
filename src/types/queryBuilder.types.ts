import { ResultSetHeader, RowDataPacket } from "mysql2";
import { DefaultQueryBuilderReturnObj } from "./general.types";

/* export type QueryBuilderObj<T> = {
  // data: QueryResult;
  data: T;
  errorMessage: null;
  source: string;
  status: number;
}; */
export type QueryBuilderObj<T> = DefaultQueryBuilderReturnObj<
  T | RowDataPacket[] | ResultSetHeader | null
>;

export type QueryBuilderReturn<T = null> = Promise<QueryBuilderObj<T>>;
// Promise<QueryBuilderObj<T | null> | null>;
// export type QueryBuilderReturn<T> = QueryBuilderObj<T>;
