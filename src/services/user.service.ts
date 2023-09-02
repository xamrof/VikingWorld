import { Request, Response } from "express"
import { UserModel } from "../models/user.model"
import { encodePassword } from "../helpers/encoderPass"
import { PrismaClient } from "@prisma/client"


export class UserService {
    private static _instance: UserService

    private prisma = new PrismaClient()

    constructor(){}

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    public async getAllUsers(): Promise<any>{

    }

    public async getUser(): Promise<any>{

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