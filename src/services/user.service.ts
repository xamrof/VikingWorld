import { Request, Response } from "express"
import { UserModel } from "../models/user.model"


export class UserService {
    private static _instance: UserService

    constructor(){}

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    public async getAllUsers(): Promise<any>{

    }

    public async getUser(): Promise<any>{

    }

    public async createUser(userModel: UserModel): Promise<any>{
        
    }

    public async editUser(): Promise<any>{

    }

    public async deleteUser(): Promise<any>{

    }



}