import { NextFunction, Request, Response } from "express";
import HTTPResponse from "../utils/HTTPResponse";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const Auth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return HTTPResponse.Error(res, { message: "Unauthorized" });
    }

    jwt.verify(req.headers.authorization.split(" ")[1], JWT_SECRET, (err, user) => {
        if (err) {
            return HTTPResponse.Error(res, { message: "Unauthorized" });
        }

        next()
    });
}