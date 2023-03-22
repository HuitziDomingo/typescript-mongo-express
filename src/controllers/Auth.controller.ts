import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class Auth {


    static async register({ body }: Request, res: Response) {
        // let responseUser = await AuthService.registerNewUser()
    }


    static async login(req: Request, res: Response) {

    }


}