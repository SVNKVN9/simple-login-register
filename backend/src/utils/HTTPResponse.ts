import { Response } from "express"

interface ResponseData {
    message: string
    data?: any
}

export default class {
    static Success(res: Response, data: ResponseData) {
        res.status(200).json(data)
    }

    static Error(res: Response, data: ResponseData) {
        res.status(400).json(data)
    }
}