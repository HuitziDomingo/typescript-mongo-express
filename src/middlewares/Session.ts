import { Request, Response, NextFunction } from 'express';
import { JWT } from '../utils/jwt.handle';

export class Session {


    static async checkJWT(req: Request, res: Response, next: NextFunction) {
        try {
            //Extraemos el Bearer Token (JWT)
            let jwtByUser = req.headers.authorization || null
            let jwt = jwtByUser?.split(' ').pop()
            //Verificamo el Bearer Token con el JWT
            let isUser = await JWT.verifyToken(`${jwt}`)
            console.log(isUser)
            if (!isUser)
                res.status(401).send('NO_TIENES_UN_JWT_VALIDO')
            else {
                console.log(jwtByUser)
                next()
            }
        } catch (error) {
            console.log('ERROR', error)
            res.status(400).send("SESION_NOT_VALID")
        }
    }


}