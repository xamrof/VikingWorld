import { Request, Response } from "express"
import { UserModel } from "../models/user.model"
import { encodePassword } from "../helpers/encoderPass"
import { PrismaClient } from "@prisma/client"
import { CustomError } from "../models/customError"
import { HttpStatusCode } from "../helpers/httpStatusCode"


export class UserService {
    private static _instance: UserService

    private prisma = new PrismaClient()

    constructor(){}

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    public async getAllUsers(): Promise<UserModel[]>{

        try {
            const users = await this.prisma.user.findMany()

            if (!users){
                throw new CustomError("i can't find any user in database", HttpStatusCode.BAD_REQUEST)
            }

            this.prisma.$disconnect()
            return users     
        } catch (error) {
            await this.prisma.$disconnect()
            throw error
        }

       
    }

    public async getUser(id: number): Promise<UserModel>{
        try {
            const user = await this.prisma.user.findUnique({where: {id}})
            if(!user){
                throw new CustomError(`The user with the id ${id} not exist`, HttpStatusCode.BAD_REQUEST)
            }
            this.prisma.$disconnect()
            return user
        } catch (error) {
            await this.prisma.$disconnect()
            throw error 
        }
    }

    public async createUser(userModel: UserModel): Promise<any>{
        try {
            const password = encodePassword(userModel.password)

            const user = await this.prisma.user.create({
                data: {...userModel, password},
                select: {id: true, username: true, name: true, password: true}
            })

            await this.prisma.$disconnect()

            return user

        } catch (error) {
            await this.prisma.$disconnect()
            throw error
        }
    }

    public async editUser(): Promise<any>{

    }

    public async deleteUser(): Promise<any>{

    }



}