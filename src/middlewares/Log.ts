import { NextFunction, Request, Response } from "express"

export class Log {


    static async logMiddleware(req: Request, res: Response,next: NextFunction) {
        let header = req.headers
        let userAget = header['user-agent']
        console.log('user Agent', userAget)
        next()
    }


}