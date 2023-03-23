import { hash, compare } from "bcryptjs"

export class Bcrypt {


    static async encrypt(password: string) {
        let passwordHash = await hash(password, 8)
        return passwordHash
    }

    /**
     * Funcion para verificar que la encriptación y la clave del usuario es la 
     * misma cadena de texto.
     * @param password 
     * @param passwordHash 
     * @returns @boolean
     */
    static async verify(password: string, passwordHash: string) {
        let isCorrect = await compare(password, passwordHash)
        return isCorrect
    }



}