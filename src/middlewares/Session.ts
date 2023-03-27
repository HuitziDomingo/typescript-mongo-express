import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { JWT } from '../utils/jwt.handle';


interface RequestExt extends Request {
    user?: string | JwtPayload
}

export class Session {

    static async checkJWT(req: RequestExt, res: Response, next: NextFunction) {
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
                req.user = isUser
                next()
            }
        } catch (error) {
            console.log('ERROR', error)
            res.status(400).send("SESION_NOT_VALID")
        }
    }


}