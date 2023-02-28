import { Request, Response } from "express"
import { Errors } from "../utils/error.handle"

export class Items {


    static async createItem({ body }: Request, res: Response) {
        try {
            res.send(body)
        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_ITEM')
        }
    }


    static async getItem(req: Request, res: Response) {
        try {
            res.send('Funcionando get')

        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_ITEM')
        }
    }


    static async getItemsById(req: Request, res: Response) {
        try {
            res.send('Funcionando get')

        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_ITEM')
        }
    }


    static async editItem(req: Request, res: Response) {
        try {
            res.send('Funcionando get')

        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_ITEM')
        }
    }


    static async deleteItem(req: Request, res: Response) {
        try {
            res.send('Funcionando get')

        } catch (error) {
            Errors.handleHttp(res, 'ERROR_GET_ITEM')
        }
    }


}