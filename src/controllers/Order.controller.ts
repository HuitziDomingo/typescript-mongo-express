import {  Response } from "express"
import { Errors } from "../utils/error.handle"
import { RequestExt } from '../interfaces/requestJWT.interface'




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