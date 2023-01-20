import { Request, Response } from "express"

export class Proyect {

    static async createProyect(req: Request, res: Response) {
        res.send('Funcionando')
    }
    
    static async getProyect(req: Request, res: Response ){
        res.send('Funcionando get')
    }

}