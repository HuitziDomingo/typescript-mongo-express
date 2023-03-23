import UserModel from '../models/User'
import { User } from '../interfaces/user.interface'


export class AuthService {


    static async registerNewUser({ email, password, name }: User) {
        let checkIs = await UserModel.findOne({ email })
        if (checkIs) return "ALREADY_REGISTERED"

        let registerNewUser = await UserModel.create({ email, password, name })
        return registerNewUser
    }


    static async loginUser() { }


}
