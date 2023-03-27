import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken"
import { Errors } from "../utils/error.handle"


interface RequestExt extends Request {
    user?: string | JwtPayload
}


export class Order {


    static async getItem(req: RequestExt, res: Response) {
        try {
            res.send({
                data: 'Esto solo lo ven las personas con sesion /// JWT',
                user: req.user,
            })

        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_BLOG')
        }
    }


}