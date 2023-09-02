import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";



export class UserController {

    private static _instance: UserController;

    constructor(){}

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'users'})
    }

    public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'user'})
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userData = req.body

        try {
            const user = await UserService.instance.createUser(userData)

            res.status(201).json({
                msg: 'user created',
                user
            })    
        } catch (error) {
            throw error        
        }

    }

    public async edit(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'edit user'})
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'delete user'})
    }

}