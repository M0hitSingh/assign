import { NextFunction, Request, Response } from "express";
import { customAPIError } from "../errors/customAPIError";


const sendError = (err: customAPIError, res: Response) => {
    res.status(err.status.code || 500).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};



const errorHandlerMiddleware = (err: customAPIError, req: Request, res: Response, next: NextFunction) => {
    err.status = err.status || { code: 500, message: "error" };
    err.isOperational = err.isOperational ? true : err.isOperational === false ? false : true;
    sendError(err, res);

    const logError = `StatusCode: ${err.status.code} | Message: ${err.message} \n${err.stack}`;
    console.log(logError);
};

export default errorHandlerMiddleware;
