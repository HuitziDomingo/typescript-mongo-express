import { Request, Response } from "express"
import { Errors } from "../utils/error.handle"

export class Order {


    static async getItem(req: Request, res: Response) {
        try {
            res.send({ data: 'Esto solo lo ven las personas con sesion /// JWT' })

        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_BLOG')
        }
    }


}