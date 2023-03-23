import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export class Auth {


    static async register({ body }: Request, res: Response) {
        let responseUser = await AuthService.registerNewUser(body)
        res.send(responseUser)

    }


    static async login({ body }: Request, res: Response) {
        let { email, password } = body
        let responseUser = await AuthService.loginUser({ email, password })

        if (responseUser === 'PASSWORD_INCORRECT')
            res.status(403).send(responseUser)
        else
            res.send(responseUser)
    }


}