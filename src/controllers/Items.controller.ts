import { Request, Response } from "express"

export class Items {

    static async createItem(req: Request, res: Response) {
        res.send('Funcionando')
    }


    static async getItem(req: Request, res: Response) {
        res.send('Funcionando get')
    }


    static async editItem(req: Request, res: Response) { }


    static async deleteItem(req: Request, res: Response) { }
}