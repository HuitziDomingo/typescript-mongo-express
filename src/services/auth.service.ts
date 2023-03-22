import { Auth } from '../interfaces/auth.interface'
import UserModel from '../models/User'


export class AuthService {


    static async registerNewUser(authUser: Auth){
        let user = new UserModel
    }


    static async loginUser(){}


}
