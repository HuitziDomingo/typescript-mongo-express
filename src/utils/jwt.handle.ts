import { sign, verify } from "jsonwebtoken"

export class JWT {


    private static jwtEnv: string = process.env.JWT_SECRET || 'mongo-typescript-secret'


    static async generateToken(id: string): Promise<Object> {
        let jwt = sign({ id }, this.jwtEnv, { expiresIn: '2h' })
        return jwt
    }


    static async verifyToken(jwt: string) {
        let isOK = verify(jwt, this.jwtEnv)
        return isOK
    }


}