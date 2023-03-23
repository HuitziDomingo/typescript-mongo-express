import { sign, verify } from "jsonwebtoken"

export class JWT {


    private static jwtEnv: string = process.env.JWT_SECRET || 'mongo-typescript-secret'
    

    static async generateToken(id: string): Promise<Object> {
        let jwt = sign({ id }, this.jwtEnv, { expiresIn: '2h' })
        console.log('variable', this.jwtEnv)
        return jwt
    }


    static async verifyToken() { }


}