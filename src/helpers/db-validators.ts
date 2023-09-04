import { PrismaClient } from "@prisma/client"
import { CustomError } from "../models/customError"
import { HttpStatusCode } from "./httpStatusCode"

const prisma = new PrismaClient()

export class DbValidator {
    private static _instance: DbValidator;

    constructor(){}

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    public async emailExist(email = '') {
        const emailExist = await prisma.user.findUnique({where: {email}})
        if(emailExist) {
            prisma.$disconnect()
            throw new CustomError('The email exist in database', HttpStatusCode.BAD_REQUEST)   
        }
    }

    public async userExist(username: string) {
        const userExist = await prisma.user.findUnique({where: {username}})
        if(userExist){
            prisma.$disconnect()
            throw new CustomError('The username exist in database', HttpStatusCode.BAD_REQUEST)
        }
    }
}

