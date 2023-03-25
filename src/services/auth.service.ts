import UserModel from '../models/User'
import { User } from '../interfaces/user.interface'
import { Bcrypt } from '../utils/bcrypt.handle'
import { Auth } from '../interfaces/auth.interface'
import { JWT } from '../utils/jwt.handle'


export class AuthService {


    static async registerNewUser({ email, password, name }: User) {
        let checkIs = await UserModel.findOne({ email })
        if (checkIs) return "ALREADY_REGISTERED"

        let passHash = await Bcrypt.encrypt(password)

        let registerNewUser = await UserModel.create({
            email,
            password: passHash,
            name
        })
        return registerNewUser
    }


    static async loginUser({email, password}: Auth) { 
        let checkIs = await UserModel.findOne({ email })
        if (!checkIs) return "NOT_FOUND_USER"

        let passHash = await checkIs.password
        let isCorrect = await Bcrypt.verify(password,passHash )

        if(!isCorrect) return "PASSWORD_INCORRECT"

        let token = await JWT.generateToken(checkIs.email)
        
        return { token, checkIs }
    }


}
