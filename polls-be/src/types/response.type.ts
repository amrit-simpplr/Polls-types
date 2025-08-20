import { Response } from "express";

export interface ResponseHelper {
  prepareAndSendErrResponse(
    initTimestamp: number,
    res: Response,
    error: any,
    data: string
  ): void;
  sendResponse(
    initTimestamp: number,
    res: Response,
    errorData: any,
    httpStatusCode: number
  ): void;
}

export type QueryResponse<T> = {
  done: boolean;
  nextRecordsUrl?: string;
  records: T[];
};

export type res = {
  /* eslint-disable-next-line */
  data: {};
  errors?: string;
};
